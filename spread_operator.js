const num = [1,2,3,4];
const num2 = [5,6,7,4];

console.log('....... SPREAD OPERATOR WITH ARRAYS STARTS .....')
const allnums = [...num,...num2];
console.log(allnums);
console.log('....... SPREAD OPERATOR WITH ARRAYS END .....')



console.log('....... SPREAD OPERATOR WITH OBJECTS STARTS .....')
const Person = {
    name : "Ali",
    age : 23,
    address : "Rawalpindi"
}
const Details = {
    email : "abc@gmail.com",
    password : "mypass",
    address : "Islamabad" //First address override by this one
}

const PersonInfo = {...Person,...Details};
console.log(PersonInfo);

console.log('....... SPREAD OPERATOR WITH OBJECTS END .....')