const makeBigArray = () => {
  const arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(Math.random());
  }
  return arr;
};

const arr = makeBigArray();

onmessage = e => {
  arr.sort();
  console.log(arr);
};
