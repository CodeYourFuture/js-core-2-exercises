/*
  Refactor this function to use .find and ES6 syntax
 */
const findByGender = (persons, gender)=>{
   const result = persons.find((params) => {
    return params.gender === gender ? result.push(params) : false;
  });
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