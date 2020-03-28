//Module

class Product {
    constructor( name, category, images, ammount, currency, quantity) {
        this.__name = name
        this.__category = category // string
        this.__images = images // []
        // price  {ammount: 100.00, currency: 'EUR'}
        this.__price = {
           'ammount': ammount,
           'currency': currency,
        }  
        this.__quantity = quantity // number (integer)
    }

//name property

    set name(value) {
        if(value == true) {
            this.__name = value
        } else {
            alert('Where is the name?')
        }
    }

    get name() {
        return this.__name
    }

// category property

    set category(value) {
        if(isNaN(value) == true ) {
            this.__category = value
        } else {
            alert('The category has to be a string!')
        }
    }

    get category() {
        return this.__category
    }

// images property

    set images(value) {
        if(images.isArray(value) == true) {
            this.__images = value
        } else {
            alert('This is not array!')
        }
    }

    get images() {
        return this.__images
    }


// price property

    set price(value) {
        if(Object.keys(price) == ['ammount', 'currency']) {
            this.price = value
            //this.currency = currency
            
        } else {
            alert('Tomething is missing!')
        }
    }   

    get price() {
        return this.__price
    }


// quantity property

    set quantity(value) {
        if(Number.isInteger(value) == true) {
           this.__quantity = value
        } else {
           alert('This is not an integer!')
        }
    }

    get quantity() {
        return this.__quantity
    }


    // function that renders this product

    render() {
        let div = document.createElement('div')
        div.appendChild(document.createElement('h2'))
        //div > h2
        div.firstElementChild.innerHTML = this.name + ' ' + this.category + ' ' + this.images + ' ' + parseFloat(this.price.ammount) + ' ' + this.price.currency + ' ' + this.quantity
        return div
    }
}