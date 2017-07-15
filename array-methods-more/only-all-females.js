/*
    This function should return true if all the persons in the "persons" array are of gender "female", otherwise returns falses
    1. Refactor this function to use .every and ES6 syntax
    2. Add more tests to check this is working
 */

const checkAllFemale = (persons) => {
  const result = persons.every((params)=>{
    return params.gender !== 'female' ? false : true;
  })
  return result;
};
/*
function checkAllFemale(persons) {
  for(var i = 0; i < persons.length; i++) {
    if(persons[i].gender !== 'female') {
        // notice how we exit early if one of the persons is not female
        return false;
    }
  }
  return true;
};*/

module.exports = checkAllFemale;