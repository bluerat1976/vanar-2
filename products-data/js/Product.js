//Module

class Product {
    constructor( name, category, images, ammount, currency, quantity) {
        this.name = name
        this.category = category // string
        this.images = images // []
        // price  {ammount: 100.00, currency: 'EUR'}
        this.price = {
           'ammount': this.ammount,
           'currency': this.currency,
        }  
        this.quantity = quantity // number (integer)
    }

//name property

    set name(value) {
        if(value.length > 0) {
            this.__name = value
        } else {
            alert('There is no name')
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
        if(Array.isArray(value) == true) {
            this.__images = value
        } else {
            alert('This is not an array!')
        }
    }

    get images() {
        return this.__images
    }

//--------------------------------------
// price property

    set price(value) {
        if(Object.keys(value).includes ('ammount') && Object.keys(value).includes('currency')) {
            this.__price = value    
        } else {
            alert('Tomething is missing!')
        }
    }   
    get price() {
        return this.__price
    }

    set ammount(value) {
        if(typeof value == Number) {
            this.__ammount = value
        } else {
            alert('This is not an ammount')
        }
    }

    get ammount() {
        return this.__ammount
    }

    set currency(value) {
        if( typeof value == 'string') {
            this.__currency = value
        } else {
            alert('This is not a right currency')
        }
    }

    get currency() {
        return this.__currency
    }

//--------------------------------------
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
        div.setAttribute('class', 'name')
        div.appendChild(document.createElement('h2'))
        //div > h2
        div.firstElementChild.innerHTML = this.name 

        let boxcat = document.createElement('div')
        boxcat.setAttribute('class', 'category')
        div.appendChild(boxcat)
        boxcat.appendChild(document.createElement('h3'))
        
        boxcat.firstElementChild.innerHTML = this.category

        let boxpict = document.createElement('div')
        boxpict.setAttribute('class', 'pictures')
        boxcat.appendChild(boxpict)
       
       
        for(let i=0; i< this.images.length; i++) {
            let img = document.createElement('img')
            img.setAttribute('src', this.images[i])
            img.setAttribute('class', 'img')
            img.setAttribute('style', 'width')
            img.style.width = '100px'
            boxpict.appendChild(img) 
        }

       
        let boxinfo = document.createElement('div')
        boxinfo.setAttribute('class', 'info')
        boxcat.appendChild(boxinfo)
       
        boxinfo.innerHTML = `Price: ${parseFloat(this.price.ammount)}  ${this.price.currency}` +'<br>'+`Qty: ${this.quantity}`
        return div
    }


}

