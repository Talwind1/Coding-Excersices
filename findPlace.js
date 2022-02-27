var searchInsert = function (arr, target) {
  if (target > arr[arr.length - 1]) return arr.length;
  if (target < arr[0]) return 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
    if (target > arr[i] && target < arr[i + 1]) {
      return i + 1;
    }
  }
};
