module.exports.validateName = (value) => {
  if (value.length === 0) {
    return 'Enter your name';
  }

  return true;
};

module.exports.validateEmail = (value) => {
  if (value.length === 0) {
    return 'Enter your email';
  }

  return true;
};

module.exports.validateUsername = (value) => {
  if (value.length === 0) {
    return 'Enter your username';
  }

  return true;
};
