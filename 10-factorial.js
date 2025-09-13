function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Parse argument
const num = parseInt(process.argv[2]);

// Print result
console.log(factorial(num));
