/**
 * Returns true only when `status` is exactly the string 'UP'.
 * @param {*} status
 * @returns {boolean}
 */
function isHealthy(status) {
  return status === 'UP';
}

module.exports = { isHealthy };
