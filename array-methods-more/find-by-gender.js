/*
  Refactor this function to use .find and ES6 syntax
 */
function findByGender(persons, gender) {
  const result = [];
  persons.find(function (params) {
    if (params.gender === gender) {
      result.push(params);
    }
  })
  return result;
};
/*
function findByGender(persons, gender) {
  var result = [];
  for(var i = 0; i < persons.length; i++) {
    if(persons[i].gender === gender) {
      result.push(persons[i]);
    }
  }
  return result;
};*/

module.exports = findByGender;