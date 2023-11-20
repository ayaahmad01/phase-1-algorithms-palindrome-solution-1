function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
I should create an isPalindrome function that returns either true or false. The function should evaluate
whether the input string reads the same forwards and backwards. In other words, if the reversed version of the input
string is identical to the original, the function should return true. For example, 
'mom' and 'racecar' are palindromes because their reversed counterparts are also 'mom' and 'racecar,'
but for cases like 'hi,' where the reverse is 'ih,' the function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;