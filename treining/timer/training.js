/*
let a = document.getElementById('elem')

let div = document.getElementById('box')

a.addEventListener('click', func)

function func() {
   
    var self = this 

   windov.setInterval(() => (self.value), 2000)
}
*/
  let div = document.getElementById('box'); 
function start() {
	//По нажатию на кнопку наш таймер начнет работать:
    	window.setInterval(timer, 1000);
}

//Эта функция будет запускаться каждую секунду
function timer() {
    let elem = document.getElementById('test');
    let el = document.createElement('p')
    div.appendChild(el)

      el.innerHTML = elem.value;
   
	
} 


