let div = document.createElement('div')
div.setAttribute('id', 'box')
document.body.appendChild(div)

let btn = document.createElement('button')
btn.setAttribute('id', 'butn')
btn.innerHTML = 'Add counter'
div.appendChild(btn)
btn.addEventListener('click', addAmm)

function addAmm() {
    let p1 = new Person('Tania');
    let p2 = new Person('Misha')
    let divRes = document.getElementById('box-2')
div.appendChild(divRes)
divRes.innerHTML = p1.name + ' ' + p2.info

}


class Person {
    constructor(name = 'Unknown') {
        this.name = name;
        this.number = parseInt(prompt('input number'));
        this.__age = 34;
        this.info = prompt('input info');
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
        if(this.name = String && this.name.value >3 ) {
            
        } else {
            alert('wrong datas')
        }
    }
}





 

 