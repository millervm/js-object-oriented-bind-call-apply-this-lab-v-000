//Your code here
function justInvoke(fn) {
  fn();
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue);
};
