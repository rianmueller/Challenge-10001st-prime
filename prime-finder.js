module.exports = function(n) {
  let count = 0;
  let number = 2;

  function isPrime(number) {
    for (i = 2; i < number / 2 + 1; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  while (count < n) {
    if (isPrime(number) === true) {
      count++;
    }
    number++;
  }

  return number - 1;
};
