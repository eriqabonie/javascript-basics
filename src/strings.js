function sayHello (string) {
 return "Hello, " + string + "!"
};

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
  return string.toLowerCase();
};

function countCharacters (string) {
  return string.length;
};

function firstCharacter (string) {
  return string.charAt(0);
};

function firstCharacters (string, n) {

  if (string.length < 4){
    return string.substring(0,2);
  } else {
    return string.substring(0,4);
  }

};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};