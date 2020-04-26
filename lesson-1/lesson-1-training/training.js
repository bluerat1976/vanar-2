let div = document.createElement('div')
div.setAttribute('id', 'box')
document.body.appendChild(div)

let btn = document.createElement('button')
btn.setAttribute('id', 'butn')
btn.innerHTML = 'Add counter'
div.appendChild(btn)
btn.addEventListener('click', addCounter)


class Expenses {

    constructor() {
        this.__name = prompt('input name');
        this.number = parseInt(prompt('input number'));

    }

    set name(value) {
       
        if(value = string) {
             this.__name = value
            
        } else {
            alert('wrong number')
        }
    }

    get name() {
        return this.__name;
    }

}   

let boxCount = document.createElement('div')

function addCounter() {
    
    //
    let btnSum = document.createElement('button')
    btnSum.setAttribute('id', 'btnsum')
    btnSum.innerHTML = 'Summa'
    boxCount.appendChild(btnSum)

    let btnAddTotal = document.createElement('button')
    btnAddTotal.setAttribute('id', 'btnaddtotal')
    btnAddTotal.innerHTML = 'Add sum to total'
    boxCount.appendChild(btnAddTotal)

function addData() {
         let p1 = new Expenses();
    //let p2 = new Expenses()
    let divRes = document.getElementById('box-2')
    div.appendChild(divRes)
    divRes.innerHTML = p1.__name + ' ' + p1.number
    // + ', ' + p2.__name + p2.number

}
   addData()
   
}
    
    

    


 

 