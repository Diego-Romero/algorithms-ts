String.prototype.repeatify = function(times) {
  var result = ''
  for (let i = 0; i < times; i++) result += this;
  return result;
}