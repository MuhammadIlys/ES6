myfun = function(){
   console.log('Normal Function')
}

myfun2 = () =>{
    console.log('Normal Arrow function')
}

myfun3 = () => "Short arrow function";

myfun4 = (val) => "Short arrow function with value : " + val;

myfun();
myfun2();
console.log(myfun3());
console.log(myfun4("myvalue"));