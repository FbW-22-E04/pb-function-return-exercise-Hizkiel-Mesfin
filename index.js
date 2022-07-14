// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAge(17));

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(-87687681, 78));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  return x ** n;
}

console.log(pow(3, 3));
