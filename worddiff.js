
var SPACE = /\s+/;

function transform(s) {
  if (Array.isArray(s)) return s.slice(0);

  s = s.split(SPACE);
  if (s[0] === '') s = s.slice(1);
  if (s[s.length - 1] === '') s = s.slice(0, -1);

  return s;
}

function worddiff(a, b) {
  a = transform(a);
  b = transform(b);

  // Remove items there match from both a and b
  var i = 0;
  while (i < b.length && a.length > 0) {
    var index = a.indexOf(b[i]);
    if (index !== -1) {
      a.splice(index, 1);
      b.splice(i, 1);
    } else {
      i += 1;
    }
  }

  // Only unique items should exists now, so the element sum will be the diff
  return a.length + b.length;
}
module.exports = worddiff;
