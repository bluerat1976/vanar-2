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

let p1 = new Person('Tania');

 

p1.name = 123
alert(this.name)