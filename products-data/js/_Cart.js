class Cart {
    constructor() {
        this.item = []
    }

    get itemCount() {// returns quantity of products
        let q = 0;
        for(let i = 0; i < q.length; i++){
            q += 1;
        }
       
        return q      
    }
    
    addProduct( p, q ) {
        //this.item -> {product: p, quantity: q}
       
          
    }
    
    removeProduct( p ) {
        //this.item <- removes
    }
    

    render() {
    
        let divCart = document.createElement('div')
        divCart.setAttribute('class', 'dropdown')

        let btnCart = document.createElement('button')
        btnCart.classList.add('btn', 'btn-primary','dropdown-toggle')
        btnCart.setAttribute('type', 'button')
        btnCart.setAttribute('id', 'dropdownMenu1')
        btnCart.setAttribute('data-toggle', 'dropdown')
        btnCart.setAttribute('aria-haspopup', true)
        btnCart.setAttribute('aria-expanded', false)
        btnCart.innerHTML = 'Cart'
        divCart.appendChild(btnCart)
        
        let cartMenu = document.createElement('div')
        cartMenu.classList.add('dropdown-menu', 'dropdown-primary')
        divCart.appendChild(cartMenu)
       
        btnCart.addEventListener('click', openMenu)

        function openMenu() {
            
            
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



//let p1 = new Product(...)


//c1.adProduct(p1, 1)