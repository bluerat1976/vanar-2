//Примените несколько вариантов деструктуризации в местах "A" и "B"


class Order {
    constructor( ...data ){
       
        [this.id, this.client, this.cost] = data  // A    
    }

    render() {

        let div = document.createElement('div')
        div.classList.add('ord' + this.id)

        div.innerHTML = this.client + ' --- ' + this.cost
        return  div
    }
}

let data = {
    orders: [
        new Order(10,"John", 100.00),
        new Order(11,"Marry", 150.00),
        new Order(12,"Jack", 200.00), 
    ]
}
//let clients =[ data.orders[0].name, data.orders[1].name, data.orders[2].name ]  // B


function renderDataOrders( ) {
    
    let wrapper = document.querySelector('#show-orders')
    
    data.orders.forEach(
       element => wrapper.appendChild(element.render())
  )  

 
}

renderDataOrders('#show-orders')



/*Как вариант
    class typing {
      constructor(options) {
         Object.assign(this, options);
      }
    }
    
    class typing {
      constructor(options) {
        const {strings, loop, speed, pause} = options;
        
        Object.assign(this, {strings, loop, speed, pause});
      }
    }
*/