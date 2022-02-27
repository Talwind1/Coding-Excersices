var removeElement = function (nums, val) {
  let i = nums.indexOf(val);
  console.log("i", i);
  while (i > -1) {
    nums.splice(i, 1);
    i = nums.slice(i).indexOf(val);
  }
  return nums;
};
console.log(removeElement([3, 2, 2, 3], 3));
