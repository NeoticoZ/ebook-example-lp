/**
 * Utilities Module
 * Reusable helper functions
 */

/**
 * Formats phone number with Brazilian mask (XX) XXXXX-XXXX
 * @param {string} value - Raw phone input
 * @returns {string} Formatted phone number
 */
export function formatPhone(value) {
  const digits = value.replace(/\D/g, '');
  const match = digits.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  
  if (!match) return value;
  
  if (!match[2]) return match[1];
  return `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Formats number with Brazilian locale
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return num.toLocaleString('pt-BR');
}

/**
 * Smooth scroll to element
 * @param {string|HTMLElement} target - Selector or element
 */
export function scrollToElement(target) {
  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target;
    
  if (element) {
    element.scrollIntoView({ 
      behavior: prefersReducedMotion() ? 'auto' : 'smooth' 
    });
  }
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} Prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Calculates future date
 * @param {number} daysFromNow - Days to add
 * @returns {string} Formatted date in pt-BR
 */
export function getFutureDate(daysFromNow) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toLocaleDateString('pt-BR');
}

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
