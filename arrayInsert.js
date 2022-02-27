var searchInsert = function (arr, target) {
  if (target < arr[0]) {
    return 0;
  }
  if (target > arr[arr.length - 1]) {
    return arr.length;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
      if (target > arr[i] && target < arr[i + 1]) {
        console.log("yes");
        return i + 1;
      }
    }
  }
};
console.log(searchInsert([1, 2, 5, 6], 5));
