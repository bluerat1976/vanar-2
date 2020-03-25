// Inheritance - OOP
// Super Class ---->(logic/structure) -----> Extends


// Super class
class Fruit {
    constructor(weight) {
        this.__weight = 200//gramms 
    }

    set weight(value) {
        if(value > 0) {
            this.__weight = value  
        } else {
            console.error('Error: wrong data')
        }
    }

    get weight() {
        return this.__weight
    }

    info() {
       console.log(`This is a fruit \n ${this.__weight} g`)
    }
}

// Extended classes

class Apple extends Fruit {
    constructor(weight, color) {
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
    constructor(weight, color, diametr) {
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
let a = new Apple('Green')
let or = new Orange(230, 'orange', 180)

