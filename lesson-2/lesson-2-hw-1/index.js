class Button {
    constructor() {
        this.text = 'Click',
        this.__type ='submit',
        this.color = '#000000',
        this.style = {
            width: '100px',
            fontSize: '50px',
        }
    }

    set type(value) {
        if(value = 'submit') {
             this.__type = value
        } 
    }

    get type() {
        return this.__type;
    }  
}

let result = new Button('cat');


result.type = 'text'
console.log(this.type)
