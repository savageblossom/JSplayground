console.log(`Begin of function as constructors`)
function Point(x, y) {
  this.x = x;
  this.y = y;
}
var p = new Point(5, 3);
Point.prototype.r = function() {
  return Math.sqrt(
    Math.pow(this.x, 2) + Math.pow(this.y, 2)
  );
}
Point.prototype.ss = function(x) {
  return x;
}
console.log(p.ss(3))
console.log(`End of function as constructors`)
