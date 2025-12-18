/**
 * App Module - Main Entry Point
 * Initializes all components and event listeners
 */

import { CONFIG } from './config.js';
import { getFutureDate, scrollToElement } from './utils.js';
import { FormHandler } from './form.js';
import { CounterAnimation, ExitIntentPopup, initIcons } from './animations.js';

/**
 * Main Application Class
 */
class App {
  constructor() {
    this.init();
  }
  
  init() {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.bootstrap());
    } else {
      this.bootstrap();
    }
  }
  
  bootstrap() {
    // Initialize Lucide icons
    initIcons();
    
    // Set dynamic urgency date
    this.setUrgencyDate();
    
    // Set dynamic copyright year
    this.setCopyrightYear();
    
    // Initialize form handler
    new FormHandler(CONFIG.SELECTORS.FORM);
    
    // Initialize counter animation
    new CounterAnimation(
      CONFIG.SELECTORS.COUNTER, 
      CONFIG.DOWNLOAD_TARGET
    );
    
    // Initialize exit intent popup
    new ExitIntentPopup(CONFIG.SELECTORS.POPUP);
    
    // Setup bottom form CTA
    this.setupBottomForm();
    
    console.log('✅ E-book LP initialized');
  }
  
  setUrgencyDate() {
    const dateElement = document.querySelector(CONFIG.SELECTORS.DATE_TARGET);
    if (dateElement) {
      dateElement.textContent = getFutureDate(CONFIG.URGENCY_DAYS);
    }
  }
  
  setCopyrightYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });
    
    // Also update footer text if contains hardcoded year
    const footer = document.querySelector('footer p');
    if (footer) {
      footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${currentYear}`);
    }
  }
  
  setupBottomForm() {
    const bottomForm = document.getElementById('bottomForm');
    const ctaButton = bottomForm?.querySelector('button');
    
    if (ctaButton) {
      ctaButton.removeAttribute('onclick');
      ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToElement(CONFIG.SELECTORS.CAPTURE_SECTION);
        
        // Focus on first input
        setTimeout(() => {
          const firstInput = document.querySelector('#name');
          firstInput?.focus();
        }, 500);
      });
    }
  }
}

// Initialize app
new App();

export default App;
