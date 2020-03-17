class Person {
    constructor(name = 'Unknown') {
        this.__name = name;
        this.__age = 35;
    }

    set name(value) {
        if(typeof(value) == 'string' && value.length > 3 ) {
             this.__name = value.trim()
        } else {
            alert('Wrong input')
        }
    }

    get name() {
        return this.__name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}` )
        
    }
}

let p = new Person()

p.name = 'Tania  '

 alert(p.name)
