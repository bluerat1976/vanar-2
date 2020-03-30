
let products = [
    new Product('iPhone', 'Smartphones',['images/smartphone-1.jpg', 'https://avatars.mds.yandex.net/get-pdb/163339/7afecea5-145c-474f-9c20-6a2776b9b112/s375', '*'], 100.99, 'EUR', 2),
    new Product('iPad', 'Tablets', ['*', '*', '*'], 325.59, 'EUR', 1),
    //new Product('Laptop', 'Notebooks'),
]
 


function renderProductsGrid() {
    let wrapper = document.querySelector('#products-grid')
   
    products.forEach( 
        product => wrapper.appendChild(product.render())  
    )    
}

 