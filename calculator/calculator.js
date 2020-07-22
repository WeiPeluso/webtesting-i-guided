module.exports = {
  add,
  multiply,
};

function add(...args) {
  if (!args) {
    return 0;
  } else {
    return args.reduce((sum, e) => {
      return sum + e;
    }, 0);
  }
}

function multiply(a, b) {
  return a * b;
}
