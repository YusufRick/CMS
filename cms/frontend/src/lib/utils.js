/**
 * Combines class names with proper handling of conditional classes
 * @param {...string} inputs - Class names or conditional class objects
 * @returns {string} - Combined class names
 */
function clsx(...inputs) {
  return inputs
    .filter(Boolean)
    .flat()
    .join(" ");
}

/**
 * Merges class names with Tailwind classes
 * @param {...string} inputs - Class names or conditional class objects
 * @returns {string} - Combined class names
 */
export function cn(...inputs) {
  return clsx(inputs);
}

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {boolean} - True if email is valid
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formats a date to a readable string
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Truncates text to a maximum length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}