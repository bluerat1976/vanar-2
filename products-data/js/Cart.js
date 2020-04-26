

let items = document.querySelector('.row')
let CartContent = document.querySelector('#cart-content')


let cartOpen = document.querySelector('#img-cart')
//cartOpen.addEventListener('click', loadEventListeners )

loadEventListeners();


function getItemInfo(item) {
   //create an Object with course data
    let itemInfo = {
        image: item.querySelector('img').src,
        name: item.querySelector('h2').textContent,
        price: item.querySelector('.info').textContent,
        ammount: item.querySelector('.info').textContent,
        id: item.querySelector('.product  .btn-buy').getAttribute('id'),
        //quantity: item.querySelector('.info + span + span')
    }

    addToCart(itemInfo);
}

function loadEventListeners() {
    //when new course is added
    items.addEventListener('click', buyItem);

    function buyItem(e) {
        if (e.target.classList.contains('btn-buy')) {
            //read the course value
            const item = e.target.parentElement;
            getItemInfo(item);
        }
    }

    CartContent.addEventListener('click', removeItem);
    document.querySelector('#clear-cart').addEventListener('click', clearCart);
}


//---------fix-->>------------------------
// quantity of each product -- ????
//--------<<--fix---------------------

function addToCart(item) {
    let row = document.createElement('tr');

    row.innerHTML = `

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
        <a href="#" class="remove" data_id="${item.id}">X</a>
    </td>

`
   CartContent.appendChild(row);
}

function removeItem(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearCart() {
   // console.log(CartContent.firstChild)
    while (CartContent.firstChild) {
        CartContent.removeChild(CartContent.firstChild);
    }
}

//-----------------------------------------------------------
//

/*
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
*/