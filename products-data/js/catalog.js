let products = [
   new Product('iPhne', 'Smartphones',['http://www.odnopolchane.net/images/news/smart.jpg', '*', '*'], 100.99, 'EUR', 2),
    new Product('iPad', 'Tablets', ['*', '*', '*'], 325.59, 'EUR', 1),
    //new Product('Laptop', 'Notebooks'),
]


function renderProductsGrid() {
    let wrapper = document.querySelector('#products-grid')

    products.forEach( 
        product => wrapper.appendChild(product.render())
    ) 
}

