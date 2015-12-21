function a(x) {
  x += 6;
  return x;
}

function b(y) {
    y %= 5;
    return y;
}

function c(z) {
    var string = "This probably worked";
    z *= string.length;
    return z;
}

c( b( a(3) ) );

