

let items = document.querySelector('.row')
let CartContent = document.querySelector('#cart-content')


//let cartOpen = document.querySelector('#img-cart')
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

    
 
    function saveCart(item) {
       
            localStorage.setItem('cart', JSON.stringify(item))
        }

      saveCart(item)  
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


