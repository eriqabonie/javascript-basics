const getNthElement = (index, array) => {
  let n = index - array.length;
  if (n < 0) {
    return array[index];
  } else {
    return array[n];
  }
};


const arrayToCSVString = array => {
  return array.join(',');
  
};

const csvStringToArray = string => {
return string.split(',');
};

// I really dont understand the instructions here
const addToArray = (element, array) => {
if (typeof(string)) {
  array.push(element);
  return array;
} else if (typeof(Number)) {
  array.push(element);
  return array;
} else {
  return undefined;
}
 
};

// I really dont understand the instructions here
const addToArray2 = (element, array) => {
//
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
    
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {


};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
