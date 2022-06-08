const stringLength = str => {
  const length = str.length;
  if (length >=1 && length <= 10) {
    return true;
  } else {
    return false;
  }
};

module.exports = stringLength;