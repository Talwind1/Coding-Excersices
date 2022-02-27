const isNumber = function (s) {
  s = s.trim();
  return s === "" ? false : !isNaN(s);
};
