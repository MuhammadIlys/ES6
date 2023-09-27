myfun = function(){
   console.log('Normal Function')
    console.log('.....................')

}

myfun2 = () =>{
    console.log('Normal Arrow function')
    console.log('.....................')

}

myfun3 = () => "Short arrow function";

myfun4 = (val) => "Short arrow function with value : " + val;

myfun();
myfun2();
console.log(myfun3());
console.log('.....................')

console.log(myfun4("myvalue"));
console.log('........... ARROW FUNCTION END ..........')
