// 0   0   1   0   1   0   0   0   0   1   0 => 5
// 0   0   1   0   0   1   0   => 4
// 0   0   0   0   1   0   => 3

const countJumps = (n, c) => {
  c = c.split(' ').join('');
  const cloudGroups = c.split('1');
  let jumps = cloudGroups.length - 1;
  for (let clouds of cloudGroups) {
    if (clouds.length >= 2) {
      jumps += Math.floor(clouds.length / 2);
    }
  }
  return jumps;
};

console.log(countJumps(7, '0 0 0 1 0 1 0 0 1 0 1 0 0 0 1 0')); // 8
