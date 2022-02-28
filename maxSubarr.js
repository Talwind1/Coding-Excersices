const maxSubArray = (nums) => {
  let maxSoFar = nums[0];
  let prevMax = nums[0];
  for (let i = 0; i < nums.length; i++) {
    prevMax = Math.max(nums[i], maxSoFar);
    if (prevMax > maxSoFar) {
      maxSoFar = prevMax;
    }
  }
  return maxSoFar;
};
