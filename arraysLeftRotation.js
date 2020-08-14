const rotLeft = (a, d) => {
  if (d <= 0) {
    return a;
  }
  for (let i = 0; i < d; i++) {
    let shift = a.shift();
    a.push(shift);
  }

  return a;
};

rotLeft([1, 2, 3, 4, 5], 2);
