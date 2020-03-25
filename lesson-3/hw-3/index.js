
class Button  {
    constructor() {
        this.btn = document.createElement('button')
        //this.btn.className = 'button'
        this.btn.type = 'submit'
        this.btn.style.bgColor = '#cccccc'
        this.btn.value = 'click'
        this.btn.style.margin = '10px'
        //this.btn.style.width = '50px'
        //this.btn.style.height = '30px'
        
}
    
    render(parent) {
      parent.appendChild(this.btn)
    }
}


class LikeButton extends Button {
    constructor(value) {
        super() 
        this.btn.innerText = 'Like'
        this.btn.style.Text = '#000000'
        this.btn.value = value
       
        
    }
   

    like() {
      this.btn.value = 0
       this.btn.value ++
        console.log(`Ammount of clicks is ${this.btn.value}`)
       //render()      
    }
 
}

class CountDownButton extends Button {
    constructor() {
        super() 
        this.btn.id = 'count'
        this.btn.innerText = 'Count down'
        this.btn.style.Text = '#00ccaa'
        //this.btn.addEventListener('click', start)
    }

    start() {

    }
}

let a = new LikeButton()

a.render(document.body)


let b = new CountDownButton()
b.render(document.body)

