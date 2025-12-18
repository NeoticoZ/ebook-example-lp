/**
 * Animations Module
 * Handles counter, popup, and other visual effects
 */

import { CONFIG } from './config.js';
import { formatNumber, prefersReducedMotion, scrollToElement } from './utils.js';

/**
 * Counter Animation with IntersectionObserver
 */
export class CounterAnimation {
  constructor(selector, target) {
    this.element = document.querySelector(selector);
    this.target = target;
    this.hasCounted = false;
    
    if (this.element) {
      this.init();
    }
  }
  
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasCounted) {
          this.animate();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(this.element);
  }
  
  animate() {
    this.hasCounted = true;
    
    if (prefersReducedMotion()) {
      this.element.textContent = formatNumber(this.target);
      return;
    }
    
    let current = 0;
    const stepTime = Math.abs(Math.floor(
      CONFIG.COUNTER_DURATION / (this.target / CONFIG.COUNTER_STEP)
    ));
    
    const timer = setInterval(() => {
      current += CONFIG.COUNTER_STEP;
      this.element.textContent = formatNumber(current);
      
      if (current >= this.target) {
        this.element.textContent = formatNumber(this.target);
        clearInterval(timer);
      }
    }, stepTime);
  }
}

/**
 * Exit Intent Popup Handler
 */
export class ExitIntentPopup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this.popupContent = this.popup?.querySelector('div');
    this.isShown = false;
    
    if (this.popup) {
      this.init();
    }
  }
  
  init() {
    // Desktop: Mouse leave
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 0) {
        this.show();
      }
    });
    
    // Mobile: Timer fallback
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (!this.isShown) this.show();
      }, CONFIG.POPUP_DELAY_MOBILE);
    }
    
    // Close button
    const closeBtn = this.popup.querySelector('button[onclick*="closePopup"]');
    if (closeBtn) {
      closeBtn.removeAttribute('onclick');
      closeBtn.addEventListener('click', () => this.hide());
    }
    
    // Close on backdrop click
    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup) {
        this.hide();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isShown) {
        this.hide();
      }
    });
    
    // CTA button in popup
    const ctaBtn = this.popup.querySelector('button:not([onclick*="closePopup"])');
    if (ctaBtn) {
      ctaBtn.removeAttribute('onclick');
      ctaBtn.addEventListener('click', () => {
        scrollToElement(CONFIG.SELECTORS.CAPTURE_SECTION);
        this.hide();
      });
    }
  }
  
  show() {
    if (this.isShown || prefersReducedMotion()) return;
    
    this.popup.classList.remove('pointer-events-none', 'opacity-0');
    this.popupContent?.classList.remove('scale-95');
    this.popupContent?.classList.add('scale-100');
    this.isShown = true;
    
    // Trap focus for accessibility
    this.popup.setAttribute('aria-hidden', 'false');
    const firstFocusable = this.popup.querySelector('button');
    firstFocusable?.focus();
  }
  
  hide() {
    this.popup.classList.add('pointer-events-none', 'opacity-0');
    this.popupContent?.classList.add('scale-95');
    this.popupContent?.classList.remove('scale-100');
    
    this.popup.setAttribute('aria-hidden', 'true');
  }
}

/**
 * Initialize Lucide icons
 */
export function initIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

export default { CounterAnimation, ExitIntentPopup, initIcons };
