// Inheritance - OOP
// Super Class ---->(logic/structure) -----> Extends


// Super class
class Fruit {
    constructor(weight) {
        this.__weight = weight//gramms 
    }

    set weight(value) {
        if(value < 0) {
            console.error('Error: wrong data')   
        } else {
            this.__weight = value  
        }
    }

    get weight() {
        return this.__weight
    }

    info() {
        if(this.__weight) {
            console.log(`This is a fruit \n ${this.weight} g`)
            } else {
            console.log('This is a fruit with wrong weight')
        }
    }
}

// Extended classes

class Apple extends Fruit {
    constructor( color, weight) {
        //this.weight = weight 
        super(weight)
        this.color = color
    }

    info() {
        super.info()
        console.log(`\n It is an apple \n ${this.color}`)
    }
}


class Orange extends Fruit {
    constructor(color, diametr, weight) {
        super(weight)
         this.color = color
         this.diametr = diametr // cm
    }

    info() {
        super.info()
        console.log(`It is an Orange \n it's color is ${this.color} \n it's deametr is ${this.diametr}cm`)

    }
}

// OBJECTS

let f = new Fruit()
f.weight = 100

let a = new Apple('Green')
a.weight = 180

let or = new Orange('orange', 180)
or.weight = 240
