// #Arrays

const personArray = ["applex", "app", "lex", "appx"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

const ages = [21,23,54,22];
for (let i = 0; i < ages.length; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i] + " is even age");
    }
}






// Objects

// Ugly way
const personArr = ["alice", "sam", "neha"];
const genderArr = ["male", "male", "female"];
for (let i = 1; i<= personArr.length; i++){ // for printing males from the person arr.
    if(genderArr[i] == "male"){
        console.log(personArr[i]);
    }
}



//  now using Objects 
const allUsers = [{
    firstName: "Applxity",
    gender: "male"
}, {
    firstName: "lex",
    gender: "male",
},{
    firstName: "appi",
    gender: "Female"
}]

for (let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}

