function NOD(...args) {
  let [x, y] = args;

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
