/**
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function (version) {
  // The first bad version in which this api calculates if a version is bad or not
  const firstBadVersion = 4;
  if (version >= firstBadVersion) {
    return true;
  }
  return false;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lastBadVersion;

    let left = 1;
    let right = n;

    while (left <= right) {
      const checkVersion = Math.floor((left + right) / 2);
      if (isBadVersion(checkVersion)) {
        lastBadVersion = checkVersion;
        right = checkVersion - 1;
        continue;
      }
      left = checkVersion + 1;
    }
    return lastBadVersion;
  };
};

// const firstBadVersion = solution(isBadVersion);
// const result = firstBadVersion(5);
console.log(solution(isBadVersion)(5));
