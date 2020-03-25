
class Button {
    constructor(Text,  bgColor, TxtColor) {
       this.Text = Text
        this.bgColor = '#cccccc'
        this.TxtColor = '#000000'

    }
    
    render() {
        document.write(document.body)

    }

}

class LikeButton extends Button {
    constructor(Text,  bgColor, TxtColor) {
        super(Text, bgColor, TxtColor) 
        
    }

    render() {
      
    }

}

class CountDownButton extends Button {
    constructor(Text,  bgColor, TxtColor) {
        super(Text,  bgColor, TxtColor) 
    }
}

let a = new LikeButton('Like')
let b = new CountDownButton('Count down')
