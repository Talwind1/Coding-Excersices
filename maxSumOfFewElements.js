// find the max sum of B elements (B is integer) of array A of integers
const bSum = (A, B) => {
  let sum = 0;
  for (let i = 0; i < B; i++) {
    sum += A[i];
  }
  if (A.length === B) {
    return sum;
  } else {
    //check alllll the other possible sums
    let maxSum = 0;
    for (let i = 0; i < A.length; i++) {
      sum = sum - A[B - i] + A[A.length - i - 1];
      maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
  }
};
