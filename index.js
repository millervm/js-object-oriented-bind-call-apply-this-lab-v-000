//Your code here
function justInvoke(fn) {
  fn();
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, [args]);
};
