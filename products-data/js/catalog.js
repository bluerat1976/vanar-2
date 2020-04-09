
let products = [
    new Product(
        100,
        'Landscape', 'Pictures',
        ['images/summer-5.jpg', 
        'images/summer-8.jpg', 
        'images/summer-2.jpg', 
        'images/summer-4.jpg'
        ], 
        {ammount: 188.99, currency:'EUR'}, 3),

    new Product(
        101,
        'Vase', 'Ceramica', 
        [
        'images/vase-7.jpg', 
        'images/vase-8.jpg', 
        'images/vase-5.jpg', 
        'images/vase-9.jpg'
        ], 
        {ammount: 242.39, currency:'EUR'}, 2),
    
    new Product(
        102,
        'Statuette', 'Bronze', 
        [
        'images/stat-1.jpg', 
        'images/stat-5.jpg', 
        'images/stat-3.jpg', 
        'images/stat-4.jpg'
        ], 
        {ammount: 325.59, currency: 'EUR'}, 1),  
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

            //$(`.p-${product.id} .pictures .owl-dots .owl-dot`).append(`<img style="width:50px" src="images/${this.images}";/>`);
        
            let dot = $(`.p-${product.id} .pictures .owl-dots .owl-dot`) 
            
            for(let j = 0; j<dot.length; j++) {
                let dimg = document.createElement('img')
                dimg.setAttribute('style','width')
                dimg.style.width = '50px'
                dimg.setAttribute('src', product.images[j])
                dot[j].appendChild(dimg)
            } 

            let s = $(`.p-${product.id}`)
            let btnBuy = document.createElement('button')
            for(let n = 0; n<s.length; n++) {
                
                btnBuy.setAttribute('class', 'btn-buy')
                btnBuy.setAttribute('type', 'submit')
                btnBuy.innerHTML = 'Add to cart'
                s[n].appendChild(btnBuy)
            }

            btnBuy.addEventListener('click', addToCart)  
            function addToCart() {
                alert('Product ID: '+ product.id)
            } 


            /*
            let btnArr = document.getElementsByClassName('btn-buy')
            
            for(let n = 0; n<btnArr.length; n++ ) {
                btnArr[n].addEventListener('click', addToCart)    
            } 
                
            function addToCart() {
                alert('Product ID:'+ product.id)
            } 
           */
        } 
    )    
}

renderProductsGrid('#products-grid')