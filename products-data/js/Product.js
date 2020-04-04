//Module

class Product {
    constructor(id, name, category, images, price, quantity) {
        this.id = id  //HW: set / get -> number
        this.name = name
        this.category = category // string
        this.images = images // []
        // price  {ammount: 100.00, currency: 'EUR'}
        //this.__price = {}
        this.__price = {}
        this.price = price 
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
        //{
        //'ammount': this.ammount,
        // 'currency': this.currency,
        //}  
    set price(value) {      
        
        if(Object.keys(value).includes ('ammount') && Object.keys(value).includes('currency')) {
            //this.__price = value 
            
            // HW: ES6+  destructuring / expanding
            this.ammount = value.ammount
            this.currency = value.currency  
        } else {
            alert('Something is missing!')
        }
    }   
    get price() {
        return this.__price
    }

    set ammount(value) {
        console.log(this.__price)
        if(typeof value == 'number') {
            this.__price.ammount = value
        } else {
            alert('This is not an ammount')
        }
    }

    get ammount() {
        return this.__price.ammount
    }

    set currency(value) {
        if( typeof value == 'string') {
            this.__price.currency = value
        } else {
            alert('This is not a right currency')
        }
    }

    get currency() {
        return this.__price.currency
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
        // div.setAttribute('class', 'product')
        div.classList.add('product')
        div.classList.add('p-' + this.id)

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
            //img.classList.add('img', 'owl-lazy')
            img.setAttribute('class', 'img')
            //img.setAttribute('style', 'width')
            //img.style.width = '100px'
            boxpict.appendChild(img) 
        }

       
        let boxinfo = document.createElement('div')
        boxinfo.setAttribute('class', 'info')
        boxcat.appendChild(boxinfo)
       
        boxinfo.innerHTML = `Price: ${parseFloat(this.price.ammount)}  ${this.price.currency}` +'<br>'+`Qty: ${this.quantity}`
        return div
    }


}

