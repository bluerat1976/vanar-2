
let button = document.getElementById('btn')
button.addEventListener('click', moveElem)





function moveElem() {
   let elem = document.getElementById('animate')

   let pos = 0;

  let a = setInterval(mover, 10);

  function mover() {
    pos++;
    if(pos == window.innerWidth || pos == window.innerHeight ) {
        clearInterval(a)
       
          
    } else {
         
          elem.style.top = pos + "px" ;
          elem.style.left = pos + "px";
      }
  }

}
