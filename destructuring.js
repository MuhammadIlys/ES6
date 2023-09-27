
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

console.log('.....................')
vehicle(vehicleOne);
function vehicle(v){
    console.log('My car is ' +v.brand);
    console.log(' model is ' + v.model);
    console.log(' type is ' + v.type);
    console.log('Color is ' + v.color)
    console.log('Year is ' + v.year);
}

console.log('.....................')
vehicle2(vehicleOne);
function vehicle2({brand,model,type}){
    console.log('Car : ' + brand);
    console.log('Model : ' + model);
    console.log('Type : ' + type);
}
console.log('.......... DESTRUCTURING END ...........')
