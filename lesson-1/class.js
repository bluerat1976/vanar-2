class Person {
    constructor(name = 'Unknown') {
        this.name = name;
        this.__age = 25;
    }

    set age(value) {
       
        if(value >=1 && value <=200) {
             this.__age = value
        } else {
            alert('wrong number')
        }
    }

    get age() {
        return this.__age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}` )
        if(this.name = String && this.name.value <3 ) {
            
        } else {
            console.log('wrong datas')
        }
    }
}


function addNew() {


let p1 = new Person(prompt('input title'));

//let p1 = new Person('CAT');
//let p1 = new Person(prompt('input name'));
let result = document.getElementById('res');
//let p1 = new Person(prompt('input name'));
console.log(p1)
 //result.innerHTML = p1.name;

p1.name = (prompt('input name'));
p1.age = +(prompt('input age'));
//console.log(this.name);
console.log(p1.name);
let a = p1.name;
let b = p1.age;
// let p2 = new Person('Vasia')
// result.innerHTML = p2.name;
result.innerHTML = a + ' ' + b;

    // let arr = [];
    // for(let i = 0; i <= arr.length; i++) {
    //     
    //     arr.push(p1.name);    
    // }

}

let btn = document.getElementById('btn');

btn.onclick = addNew;
