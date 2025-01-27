function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < max; i++) {
    max = i;
  };  

  for (let i = 0; i > min; i++) {
    min = i;
  };

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  };

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
