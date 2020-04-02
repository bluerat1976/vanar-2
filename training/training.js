
class Product {
    constructor ( price ){
            this.__price = {}
           this.price = price
         
    }
    
    set price(value) {
        if(Object.keys(value).includes ('ammount') && Object.keys(value).includes('currency')){
           
        this.ammount = value.ammount
        this.currency = value.currency
        } else {
        alert('Something is missing')
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
}


/*
let price = {
    'ammount': 100, 
    'currency': 'EUR'
};

let {ammount = 200, currency = 'eur'} = price

alert(ammount)
alert(currency)


let options = {
    title: "Menu"
  };
  
  let {width = 100, height = 200, title} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

  console.log(title)
  console.log(width)
  console.log(height)
  
  */