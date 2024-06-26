let count = 0;
let count2 = 0;

const all = (arr, callback) => {
  count++;
  if (arr.length === 1) {
    return callback(arr[0]);
  }

  const leftArr = arr.slice(0, Math.floor(arr.length / 2));
  const rightArr = arr.slice(Math.floor(arr.length / 2));

  return all(leftArr, callback) && all(rightArr, callback);
};

function all2(array, callback) {
  count2++;
  var copy = copy || array.slice(); // shallow copies array

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift(); // remove first element from array
    return all2(copy, callback);
  } else {
    return false;
  }
}

// const arr = [1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6, 1, 2, 3, 4, 7, 6];
const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
const callback = (item) => item < 7;

console.log(all(arr, callback));
console.log(all2(arr, callback));
console.log(count);
console.log(count2);
