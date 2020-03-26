
class Button  {
    constructor(btn) {
        this.btn = btn
        this.btn = document.createElement('button')
        this.btn.type = 'submit'
        this.btn.style.margin = '10px'  
    }
    
    render(body) {
      body.appendChild(this.btn)
    }
}

class LikeButton extends Button {
    constructor(btn, likes = 0) {
        super(btn) 
        this.likes = likes
        this.btn.innerText = 'Likes'
        this.btn.addEventListener('click', this.like.bind(this)) 
    }
   
    like() {
        this.likes ++
        //this.render()
        this.btn.innerHTML = `Likes: ${this.likes}`
        console.log(this.likes)       
    }

    /*
    render() {}
   */
}

class CountDownButton extends Button {
    constructor(btn, count = 10 ) {
        super(btn) 
        this.__count = count
        this.btn.innerText = 'Count down'
        this.btn.disables = true
        this.btn.addEventListener('click', this.start.bind(this)) 
    }

    set count(value) {
        if(value > 0) {
            this.__count = value   
        } else {
            alert('STOP COUNTER!')
        }
    }

    get count() {
        return this.__count
    }

    start() {
        setInterval(() => {
         this.count --
         this.btn.innerHTML = `Count down: ${this.count}`}, 1000)
        }
    
    
    /*
    render() { }
    */
}

let btn1 = new LikeButton()
btn1.render(document.body)

let btn2 = new CountDownButton()
btn2.render(document.body)


