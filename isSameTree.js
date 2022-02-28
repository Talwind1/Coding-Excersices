const isSameTree = (p, q) => {
  if (!q && !p) {
    return true;
  }
  if (!q || !p) {
    return false;
  }
  if (q.val !== p.val) {
    return false;
  } else {
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
  }
};
