
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
            
               $(`.p-${product.id}.pictures`).addClass('owl-carousel').owlCarousel();
              
        } 
    )    
}

renderProductsGrid('#products-grid')