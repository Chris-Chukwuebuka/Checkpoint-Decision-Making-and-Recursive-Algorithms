//Question 1
//Decision Making (if-else and switch)

//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

/**
 * Function to check if a year is a leap year or not.
 * @param {number} year - The year to check.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 */
function isLeapYear(year) {
  // Leap years are divisible by 4
  if (year % 4 === 0) {
    // However, years that are divisible by 100 are not leap years, unless they are also divisible by 400
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // The year is a leap year (it is divisible by 4, 100 and 400)
      }
      return false; // The year is not a leap year (it is divisible by 4 and 100 but not 400)
    }
    return true; // The year is a leap year (it is divisible by 4 but not 100)
  }
  return false; // The year is not a leap year (it is not divisible by 4)
}
console.log(isLeapYear(2020));

//Question 2
//Decision Making (if-else and switch)

/**
 * Function to determine the price of a movie ticket based on age.
 * @param {number} age - The age of the person.
 * @return {number} - The price of the movie ticket.
 */

//  the users age
let age = 50;
// Determine the price of the movie ticket
let price = determineTicketPrice(age);

function determineTicketPrice(age) {
  // Check the age range
  if (age <= 12) {
    // Children (age <= 12): $10
    return 10;
  } else if (age >= 13 && age <= 17) {
    // Teenagers (age 13-17): $15
    return 15;
  } else {
    // Adults (age >= 18): $20
    return 20;
  }
}
// Log the price
console.log(`The price of the movie ticket is $${price}`);

//Recursion

//Question 1
/**
 * Function to generate the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @return {number} - The nth Fibonacci number.
 */
function fibonacci(n) {
    // Base cases: the first and second Fibonacci numbers are 0 and 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case: the nth Fibonacci number is the sum of the (n-1)th and (n-2)th Fibonacci numbers
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test the function
console.log(fibonacci(11)); // Output: 55

//Question 2
// Palindrome Checker
/**
 * Recursive function to check if a string is a palindrome.
 * @param {string} str - The string to check.
 * @return {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // Remove spaces, punctuation and convert to lowercase
  str = str.replace(/[\W_]/g, '').toLowerCase();

  // Base case: if the string has 0 or 1 character, it is a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: if the first and last characters are the same, check the rest of the string
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  // If the first and last characters are not the same, the string is not a palindrome
  return false;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
