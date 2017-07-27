var student = {
    name: "Simon",
    age: "21",
    interests: ["javascript", "react"]
};
function printProperties(student) {
    console.log(Object.keys(student))
}

printProperties(student);
// Output in this case should be name, age, interests

var student = {
    name: "Simon",
    age: "21",
    interests: ["javascript", "react"]
};
// function hasProperty(student, property) {
//     var keys = Object.keys(student)
//     //return student[property];
//     for (var i = 0; i < property.length; i++) {
//         return student[keys[i]];
//         console.log(hasProperty(student, 'age'));
//         //if(property ===keys[i]){
//         // return true;
//     }
// }

function hasProperty(person) {
    var keys = Object.keys(person);
    var message = "";
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        message = message + key + " " + person[key] + ", ";
    }
    console.log(message);
}

function printObject(person) {
    var keys = Object.keys(person);
    const result = property.map(function (property) {
        if (typeof person[property] === 'Object') {
            return property + 'are' + person[property]
        }else{
            return property + 'is' + person[property]
        }
    })
    console.log(result.join('\n'))
}
//hasProperty(student, 'age'); // should return true
//hasProperty(student, 'job'); // should return false
printObject(student);


