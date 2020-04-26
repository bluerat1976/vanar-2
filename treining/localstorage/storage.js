/*
let a = 100
let b = 'Hello'
let c = true

let d = {e: 200, k: 'cat', s: 300}

localStorage.setItem('1', a)
localStorage.setItem('2', b)
localStorage.setItem('3', c)
localStorage.setItem('4', JSON.stringify(d))
*/

//-----------------------------------------------------------------------------
/*
class Box {
    constructor(value) {
        this.value = value
    }

    show () {
        console.log('Box [',this.value,']')
    }

}

let b = new Box(100)
b.show()

localStorage.setItem('First box', JSON.stringify(b))

let bb = JSON.parse(localStorage.getItem('First box'))  // primitive object

let bbb = new Box(bb.value)
*/
//------------------------------------------------------------------------------

class CartX {
    constructor(items) {
        this.items = items
    }

    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    static loadCart() {
       // for(), forEach(), map().
      let c = new CartX (JSON.parse(localStorage.getItem('cart')).items)
      return c
    }
}

//let c = new CartX(['IPone', 'MAC'])
//CartX.saveCart(c)

let c = CartX.loadCart()

//---------HW-------------------------
// 1) add to cart -> save cart -> localstorage
// 2) window.onload -> load cart <- localstorage 