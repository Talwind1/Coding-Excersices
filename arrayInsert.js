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

var strStr2 = function (haystack, needle) {
  return needle.length === 0 ? 0 : haystack.indexOf(needle);
};
console.log(searchInsert([1, 2, 5, 6], 5));
