
class Cart {
    constructor() {
        this.item = []
    }

    get itemCount() {// returns quantity of products
       // let q = 0;
        //for(let i = 0; i < q.length; i++){
        //    q += 1;
        //}
       
        //return q      
    }
    

    get itemInfo() {
        
    }
    
    addProduct( p, q ) {
        

    }
    

    
    removeProduct( p ) {
        //this.item <- removes
    }
    

    render() {
    
        let divCart = document.querySelector('.dropdown')
       
        let btnCart = document.querySelector('#dropdownMenu1')
        btnCart.innerHTML = 'Cart'
       
        divCart.appendChild(btnCart)
        
        let cartMenu = document.createElement('div')
        cartMenu.setAttribute('class','dropdown-menu')
        divCart.appendChild(cartMenu)

       
        btnCart.addEventListener('click', openCartItems)
        

        function openCartItems() {
            let place = document.querySelector('#header')
            place.appendChild(cartMenu)

        }
      
        return divCart
    }
}


let c1 = new Cart()
function renderCart() {
    let wrapper = document.getElementById('header')
    wrapper.appendChild(c1.render())
}

renderCart('header')
