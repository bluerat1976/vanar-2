
let products = [
    new Product(
        100,
        'Landscape', 'Pictures',
        ['images/summer-5.jpg', 
        'images/summer-8.jpg', 
        'images/summer-2.jpg', 
        'images/summer-4.jpg'
        ], 
        {ammount: 188.99, currency:'EUR'},
        1,),

    new Product(
        101,
        'Vase', 'Ceramica', 
        [
        'images/vase-7.jpg', 
        'images/vase-8.jpg', 
        'images/vase-5.jpg', 
        'images/vase-9.jpg'
        ], 
        {ammount: 242.39, currency:'EUR'},
        1,),
    
    new Product(
        102,
        'Statuette', 'Bronze', 
        [
        'images/stat-1.jpg', 
        'images/stat-5.jpg', 
        'images/stat-3.jpg', 
        'images/stat-4.jpg'
        ], 
        {ammount: 325.59, currency: 'EUR'},
        1,),  
]
 

function renderProductsGrid() {
    let wrapper = document.querySelector('#products-grid')
   
    products.forEach( 
        product => {
            wrapper.appendChild(product.render()) 

            $('.product').addClass('col-lg-4').addClass('col-sm-6')
            
            $(`.p-${product.id} .pictures`).addClass('owl-carousel').addClass('owl-theme').owlCarousel({
                center: true,
                items:1,
                lazyLoad:true,
                loop:true,
                nav:true, 
                
            });

            //$(`.p-${product.id} .pictures .owl-dots .owl-dot`).append(`<img style="width:50px" src="images/${product.images}";/>`);
        
            let dot = $(`.p-${product.id} .pictures .owl-dots .owl-dot`) 
            
            for(let j = 0; j<dot.length; j++) {
                let dimg = document.createElement('img')
                dimg.setAttribute('style','width')
                dimg.style.width = '50px'
                dimg.setAttribute('src', product.images[j])
                dot[j].appendChild(dimg)
            } 

             // WORKS!!! -->>--------------------------------------------
            let s = $(`.p-${product.id}`)
            let btnBuy = document.createElement('button')
            for(let n = 0; n<s.length; n++) {
                
                btnBuy.setAttribute('class', 'btn-buy')
                btnBuy.setAttribute('id', `${product.id}`)
                btnBuy.setAttribute('type', 'submit')
                btnBuy.innerHTML = 'Add to cart'
                s[n].appendChild(btnBuy)
            }
            


            btnBuy.addEventListener('click', addToCart)  
           
            
           // let cart = document.querySelector('') 
           
            //cart.innerHTML = 'hello'

/*
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
*/
      
      
//-------------------------------------------------------------

/*
            function addToCart() {
                //alert('Product ID: '+ product.id)
                //alert(product.id)
              
                let idProd = product.id
                //let dropItem = document.querySelector('.dropdown-item')
                //let item = document.createElement('p');
                let p;   
                if(idProd ==100) {
                        //p = products[0].name
                        p = products[0].id + ' ' + products[0].name + ' ' + products[0].ammount + ' ' + products[0].currency + ' ' + products[0].images[0]  
                        //let p1 = (products[0].id + ' ' + products[0].name + ' ' + products[0].currency + ' ' + products[0].images[0] ) 
                        
                        //alert(p)
                   
                    } if(idProd == 101) {
                        p = products[1].id + ' ' + products[1].name + ' ' + products[1].ammount + ' ' + products[1].currency + ' ' + products[1].images[0]  
                       //let p2 = (products[1].id + ' ' + products[1].name + ' ' + products[1].currency + ' ' + products[1].images[0] ) 
                       //alert(p)
                        
                    } if(idProd == 102) {
                        p = products[2].id + ' ' + products[2].name + ' ' + products[2].ammount + ' ' + products[2].currency + ' ' + products[2].images[0]  
                        //let p3 = (products[2].id + ' ' + products[2].name + ' ' + products[2].currency + ' ' + products[2].images[0] ) 
                       // alert(p)
                    }
                    
                    alert('Product: ' + p )

                    $( '.dropdown-menu').append(`<a class="dropdown-item" href="#">${p}</a>`)
                    
                   // let p1 = p
 
                   // c1.addToCart(p1)
                    
                }

*/                
             //--<< WORKS!!!------------------------------------------------------

        
          /*  
          $(`.p-${product.id}`).append('<button class="btn-buy" type="submit"> Add to cart</button>')
          $(`.p-${product.id} .btn-buy`).on('click',function() { alert('Product ID: '+ product.id) })
         */
            }
        
    )    
}

renderProductsGrid('#products-grid')
