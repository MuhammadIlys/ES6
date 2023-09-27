class A{
    constructor(name){
       this.name = name;
    }
    
    showname(){
        return "First name is " + this.name;
    }
}

class B extends A{
    constructor(name,lname){
        //refers to parent class
        super(name);
        this.lname = lname;
    }

    shownameb() {
        console.log(this.showname() + ' Last name is ' + this.lname);
    }
}

obj = new A("Ali");
obj.showname();
console.log('.....................')


objb = new B('ali','Khan')
objb.shownameb();
console.log('.......... CLASSES END ...........')
