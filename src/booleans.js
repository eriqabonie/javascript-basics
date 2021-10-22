function negate(a) {
  if (a) {
    return false;
  } else {
    return true;
  }
};

function both(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
};

function either(a, b) {
  if (a && b === true) {
    return true;
  } else if (a || b === true) {
    return true;
  } else {
    return false;
  }
};

function none(a, b) {
  if (a || b == true) {
    return false;
  } else {
    return true;
  }

};

function one(a, b) {
  if (a && b === true) {
    return false;
  } else if (a || b == true) {
    return true;
  } else {
    return false;
  } 
};

function truthiness(a) {
  if (a) {
    return true;
  } else {
    return false;
  }
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a % 2 == 0) {
    return false;
  }else {
    return true;
  }
};

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  }else {
    return false;
  }
};

// I did not complety understand this
function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0 ) {  
    return true;
  }else {
    return false;
  }
};


function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }
};

//used a regex to achive this. don't really understand the ig in the regex
function containsVowels(string) {
  if (string.match(/[aeiou]/ig)) {
    return true;
  } else {
    return false;
  }

    
};

function isLowerCase(string) {
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
