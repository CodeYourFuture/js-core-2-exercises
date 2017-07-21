/*
  Refactor this function to use .find and ES6 syntax
 */

// function findByGender(persons, gender) {
//   var result = [];
//   for(var i = 0; i < persons.length; i++) {
//     if(persons[i].gender === gender) {
//       result.push(persons[i]);
//     }
//   }
//   return result;
// };
function findByGender(persons, gender) {
  var result = persons.filter(function (person) {
    return person.gender == gender;
  })
  return result;
};

module.exports = findByGender;