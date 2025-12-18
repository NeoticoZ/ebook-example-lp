/**
 * Form Module
 * Handles form validation, submission, and success states
 */

import { CONFIG } from './config.js';
import { validateEmail, prefersReducedMotion } from './utils.js';

/**
 * Form Handler Class
 */
export class FormHandler {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.successState = document.querySelector(CONFIG.SELECTORS.SUCCESS_STATE);
    this.inputs = this.form?.querySelectorAll('input[required]');
    this.submitBtn = this.form?.querySelector('button[type="submit"]');
    this.originalBtnContent = this.submitBtn?.innerHTML;
    
    if (this.form) {
      this.init();
    }
  }
  
  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.inputs.forEach(input => {
      input.addEventListener('input', () => this.clearError(input));
    });
    
    // Phone masking
    const phoneInput = this.form.querySelector('#whatsapp');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => this.maskPhone(e));
    }
  }
  
  maskPhone(e) {
    const value = e.target.value.replace(/\D/g, '');
    const match = value.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !match[2] 
      ? match[1] 
      : `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // Check honeypot
    const honeypot = this.form.querySelector('.hp-field input');
    if (honeypot && honeypot.value) {
      console.warn('Bot detected');
      return;
    }
    
    if (!this.validateForm()) {
      return;
    }
    
    this.showLoading();
    this.simulateSubmission();
  }
  
  validateForm() {
    let isValid = true;
    
    this.inputs.forEach(input => {
      const errorMsg = this.getErrorElement(input);
      
      if (input.type === 'checkbox') {
        if (!input.checked) {
          isValid = false;
          this.showError(input, errorMsg);
        }
      } else if (!input.value.trim()) {
        isValid = false;
        this.showError(input, errorMsg);
      } else if (input.type === 'email' && !validateEmail(input.value)) {
        isValid = false;
        this.showError(input, errorMsg);
      } else if (input.id === 'whatsapp' && input.value.length < CONFIG.PHONE_MIN_LENGTH) {
        isValid = false;
        this.showError(input, errorMsg);
      }
    });
    
    return isValid;
  }
  
  getErrorElement(input) {
    if (input.type === 'checkbox') {
      return document.getElementById('termsError');
    }
    return input.parentElement.querySelector('.error-msg');
  }
  
  showError(input, errorMsg) {
    input.classList.add('border-red-500');
    if (errorMsg) errorMsg.classList.remove('hidden');
  }
  
  clearError(input) {
    input.classList.remove('border-red-500');
    const errorMsg = this.getErrorElement(input);
    if (errorMsg) errorMsg.classList.add('hidden');
  }
  
  showLoading() {
    this.submitBtn.innerHTML = '<div class="spinner mx-auto"></div>';
    this.submitBtn.disabled = true;
  }
  
  simulateSubmission() {
    setTimeout(() => {
      this.showSuccess();
    }, 1500);
  }
  
  showSuccess() {
    this.form.style.display = 'none';
    this.successState.classList.remove('hidden');
    
    if (!prefersReducedMotion()) {
      this.triggerConfetti();
    }
  }
  
  triggerConfetti() {
    if (typeof confetti !== 'function') return;
    
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }
}

export default FormHandler;
