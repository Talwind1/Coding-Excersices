var removeDuplicates = function (nums) {
  const map = {};
  nums.forEach((num) => (map[num] = map[num] + 1 || 1));
  return Object.keys(map);
};
console.log(removeDuplicates([1, 1, 2]));
