const vehicleOnee = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}


vehicle(vehicleOnee);
function vehicle(v){
    console.log('.....................')
    console.log("brand : " + v.brand);
    console.log("brand : " + v.registration.state);
}


vehicle(vehicleOnee);
function vehicle({brand,registration:{city}}) {
    console.log('.....................')
    console.log("Brand : " + brand);
    console.log("City : " + city);
}
console.log('.......... NESTED DESTRUCTURING END ...........')
