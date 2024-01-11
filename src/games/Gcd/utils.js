function NOD(num1, num2) {
  let x = num1;
  let y = num2;

  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;

  return x;
}

export default NOD;
