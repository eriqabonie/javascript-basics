const createPerson = (name, age) => {
 const person = {
   name: name,
   age: age,
 };
 return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {

const n = people.map((person) =>  person.age)
return n;
};

const findByName = (name, people) => {
  const found = people.find(person => person.name === name);
  return found;
};

const findHondas = cars => {
  const myCars = cars.filter(car => car.manufacturer === 'Honda');
  return myCars;
};

const averageAge = people => {
  const ages = Object.values.age(people).reduce((num, acc) => (num + acc) / 3);
  return ages;
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
