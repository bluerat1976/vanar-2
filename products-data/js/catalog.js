
let products = [
    new Product(
        'Landscape', 'Pictures',
        ['images/summer-5.jpg', 
        'images/summer-8.jpg', 
        'images/summer-2.jpg', 
        'images/summer-4.jpg'
        ], 
        189.99, 'EUR', 3),

    new Product('Vase', 'Ceramica', 
        [
        'images/vase-7.jpg', 
        'images/vase-8.jpg', 
        'images/vase-5.jpg', 
        'images/vase-9.jpg'
        ], 
        242.39, 'EUR', 2),
    
    new Product('Statuette', 'Bronze', 
        [
        'images/stat-1.jpg', 
        'images/stat-5.jpg', 
        'images/stat-3.jpg', 
        'images/stat-4.jpg'
        ], 
        325.59, 'EUR', 1),
   
]
 

function renderProductsGrid() {
    let wrapper = document.querySelector('#products-grid')
   
    products.forEach( 
        product => wrapper.appendChild(product.render())  
    )    
}

renderProductsGrid('#products-grid')