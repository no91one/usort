arr = [];

function bubbleSort(arr) {
  let i;
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j + 1] < arr[j]) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
  return arr;
}
function insertionSort(arr){

    for(let i = 1; i < arr.length;i++){

        for(let j = i - 1; j > -1; j--){

            if(arr[j + 1] < arr[j]){

                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}
function selectionSort(arr) {
    let min;

    for (let i = 0; i < arr.length; i++) {

      min = i;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      if (min !== i) {

        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }

    return arr;
}
function merge(arr1, arr2) {

    let res = [],
      i = 0,
      j = 0;

    if (arr1.length > 1) {
      let min = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (i !== min) {
          if (arr1[i] < arr1[min]) {

            [arr1[i], arr1[min]] = [arr1[min], arr1[i]];

            min = i;
          }
        }
      }
    }

    if (arr2.length > 1) {
      let min = 0;
      for (let i = 0; i < arr2.length; i++) {
        if (i !== min) {
          if (arr2[i] < arr2[min]) {

            [arr2[i], arr2[min]] = [arr2[min], arr2[i]];

            min = i;
          }
        }
      }
    }

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }

    return res;
  }
  function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    let mid = Math.ceil(arr.length / 2);

    let arr1 = arr.slice(0, mid);

    let arr2 = arr.slice(mid);

    let arr1_subarrays = [],
      sorted_arr1_subarrays = [];

    let arr2_subarrays = [],
      sorted_arr2_subarrays = [];

    for (let i = 0; i < arr1.length; i += 2) {
      arr1_subarrays.push(arr1.slice(i, i + 2));
    }

    for (let i = 0; i < arr2.length; i += 2) {
      arr2_subarrays.push(arr2.slice(i, i + 2));
    }

    for (let i = 0; i < arr1_subarrays.length; i += 2) {
      let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
      result.forEach((value) => sorted_arr1_subarrays.push(value));
    }

    for (let i = 0; i < arr2_subarrays.length; i += 2) {
      let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
      result.forEach((value) => sorted_arr2_subarrays.push(value));
    }

    let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);

    return result;
  }
  function partition(items, left, right) {

    let pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {

      while (items[i] < pivot) {
        i++;
      }

      while (items[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [items[i], items[j]] = [items[j], items[i]];
        i++;
        j--;
      }
    }

    return i;
  }

  function quickSort(items, left, right) {
    let index;

    if (items.length > 1) {
      index = partition(items, left, right);

      if (left < index - 1) {

        quickSort(items, left, index - 1);
      }

      if (index < right) {

        quickSort(items, index, right);
      }
    }

    return items;
  }
var uSort={
  bubbleSort: bubbleSort,
  insertionSort: insertionSort,
  mergeSort: mergeSort,
  quickSort: quickSort,
  selectionSort:selectionSort
}
module.exports = uSort;
