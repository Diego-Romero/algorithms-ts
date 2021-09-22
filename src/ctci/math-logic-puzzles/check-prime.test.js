// how can we check if a number is in fact a prime
// the naive approach would be to iterate through every number past 2, and check
// prime numbers can only be made by being a product of themselves x 1
// they also need to be higher than 1
function checkPrimeNaive(n) {
  if (n < 2) return false;
  // if at any point the number is divisible by any I, it is a prime number
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// we can optimise this, by checking the square root of N instead of N
function isPrimeImproved(n) {
  if (n < 2) return false;
  const sqrt = Math.sqrt(n);
  console.log(`${n} square root is: ${sqrt}`);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(checkPrimeNaive(13)); // is prime, as there are no products that can make this number
// console.log(checkPrimeNaive(15)); // is divisible by 5 and 3
// console.log(isPrimeImproved(13)); // is prime, as there are no products that can make this number
// console.log(isPrimeImproved(15)); // is divisible by 5 and 3

// do greatest common divisor, and least common multiple

/*
 Generating a lit of primes: the Sieve of Eratostenes
 efficient way of generating this list, by recognising that all all non prime numbers are divisible by a prime number
*/

function sieveOfEratosthenes(max) {
  const flags = new Array(max + 1).fill(true);
  let count = 0;
  // set all the flags to true, except 0 and 1
  flags[0] = false;
  flags[1] = false;

  let prime = 2;
  console.log(flags);
  const sqrt = Math.sqrt(max);
  while (prime <= sqrt) {
    crossOff(flags, prime);
    prime = getNextPrime(prime, flags);
  }

  return flags;
}

function crossOff(flags, prime) {
  for (let i = prime; i < flags.length; i += prime) {
    flags[i] = false;
  }
}

function getNextPrime(prime, flags) {
  let next = prime + 1;
  while (next < flags.length || !flags[next]) {
    next++;
  }
  return next;
}

console.log("Sieve of Eratosthenes");
console.log(sieveOfEratosthenes(13));
