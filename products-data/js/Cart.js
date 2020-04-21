

class Cart {
    constructor() {
        this.item = []
    }

    get itemCount() {// returns quantity of products
       // let q = 0;
        //for(let i = 0; i < q.length; i++){
        //    q += 1;
        //}
       
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
        btnCart.classList.add('btn', 'btn-primary')
        btnCart.setAttribute('type', 'button')
        btnCart.setAttribute('id', 'dropdownMenu1')
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


//-------------------------------------------------------------------
//-------------------------------------------------------------------

/*

let items = document.querySelector('.row')
let cartItems = document.querySelector('.dropdown-menu')

loadEventListeners();

function loadEventListeners() {
    //when new item is added
    items.addEventListener('click', buyItem); 
    
    function buyItem(e) {
        if (e.target.classList.contains('btn-buy')) {
            //read the item value
            const item = e.target.parentElement;
            getItemInfo(item);
        }
    }
}

function getItemInfo(item) {
   
    //create an Object with item data
    let itemInfo = {
        image: item.querySelector('img').src,
        name: item.querySelector('h2').textContent,
        price: item.querySelector('.info').textContent,
        //ammount: item.querySelector('.item_price + span').textContent,
        //id: item.querySelector('.cart a').getAttribute('data-id'),
        //quantity: item.querySelector('.item_price + span + span')
    }


    addToCart(itemInfo);
}

let shoppingCart = (function () {

cart = [];
let obj = {}

    // Total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let product in cart) {
            totalCart += cart[product].price * cart[product].quantity;
        }
        return Number(totalCart.toFixed(2));
    }

    return obj;

})();

function addToCart(item) {
    let row = document.createElement('tr');

    row.innerHTML = `
    <table>
<tr>
    <td>
        <img src="${item.image}" width="100">    
    </td>   
    <td style="font-size: 14px">
        ${item.name}
    </td>
     <td style="font-size: 14px">
        ${item.price}
    </td>
     <td>
        <a href="#" class="remove" data-id="${item.id}">X</a>
    </td>
</tr>
</table>
`

    let t = document.getElementById('total')
    let h = document.createElement('h3')
    t.appendChild(h)
    $('#total h3').html(shoppingCart.totalCart());


    // let t = document.getElementById('total')
    // let h = document.createElement('h3')
    // h.classList.add('total')
    // h.innerHTML = `<div> 
    // ${total}
    // </div>
    // `
    // t.appendChild(h)
        

    cartItems.appendChild(row);
}


/*
// shoppingCartContent = document.querySelector('#cart-content tbody')
// clearCartBtn = document.querySelector('#clear-cart')
// loadEventListeners();

function loadEventListeners() {
    //when new course is added
    items.addEventListener('click', buyItem);

    function buyItem(e) {
        if (e.target.classList.contains('btn-buy')) {
            //read the item value
            const item = e.target.parentElement
            getItemInfo(item);
        }
    }

    cartItems.addEventListener('click', removeItem);
    document.querySelector('#clear-cart').addEventListener('click', clearCart);
}

function removeItem(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
}

function clearCart() {
    console.log(cartItems.firstChild)
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }
}
*/