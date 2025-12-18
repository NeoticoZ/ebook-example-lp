/**
 * Configuration Module
 * Centralized settings for the landing page
 */

export const CONFIG = {
  // Counter animation settings
  DOWNLOAD_TARGET: 15420,
  COUNTER_DURATION: 2000,
  COUNTER_STEP: 120,
  
  // Urgency settings
  URGENCY_DAYS: 3,
  
  // Popup settings
  POPUP_DELAY_MOBILE: 45000,
  
  // Validation patterns
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_MIN_LENGTH: 14,
  
  // Messages
  MESSAGES: {
    NAME_ERROR: 'Por favor, insira seu nome.',
    EMAIL_ERROR: 'Por favor, insira um e-mail válido.',
    PHONE_ERROR: 'Número inválido.',
    TERMS_ERROR: 'Você precisa aceitar os termos.',
    SUCCESS_TITLE: 'Parabéns!',
    SUCCESS_MESSAGE: 'Seu e-book foi enviado para o seu e-mail.'
  },
  
  // Selectors
  SELECTORS: {
    FORM: '#mainForm',
    SUCCESS_STATE: '#successState',
    COUNTER: '#downloadCounter',
    POPUP: '#exitPopup',
    DATE_TARGET: '#dateTarget',
    CAPTURE_SECTION: '#capture-form-section'
  }
};

export default CONFIG;
