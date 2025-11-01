/**
 * Backend utility functions
 */

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
exports.isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Formats error messages for consistent API responses
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @returns {Object} - Formatted error object
 */
exports.formatError = (message, statusCode = 400) => {
  return {
    error: {
      message,
      statusCode
    }
  };
};

/**
 * Sanitizes user input by removing potentially dangerous characters
 * @param {string} input - String to sanitize
 * @returns {string} - Sanitized string
 */
exports.sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '');
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {Object} - Validation result with isValid and message
 */
exports.validatePassword = (password) => {
  if (password.length < 8) {
    return {
      isValid: false,
      message: 'Password must be at least 8 characters long'
    };
  }
  
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }
  
  if (!/[0-9]/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }
  
  return {
    isValid: true,
    message: 'Password is valid'
  };
};