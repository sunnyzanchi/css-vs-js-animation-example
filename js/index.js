const b = document.querySelector('#b');
const jsButton = document.querySelector('button#js');
const wwButton = document.querySelector('button#ww');

let frame = 0;
const render = () => {
  b.style.transform = `translateY(${Math.sin(frame / 60) * 100}px)`;
  frame++;
  requestAnimationFrame(render);
};

render();

const makeBigArray = () => {
  const arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(Math.random());
  }
  return arr;
};

const arr = makeBigArray();

jsButton.addEventListener('click', e => {
  arr.sort();
  console.log(arr);
});

const worker = new Worker('/js/worker.js');
wwButton.addEventListener('click', e => worker.postMessage('doSort'));
