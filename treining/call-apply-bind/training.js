
//------connection 'el' and 'this' with a 'addEventListener'-------

/* 
let el = document.getElementById('elem')
el.addEventListener('click', func)

function func() {
    alert(this.value)

}
*/


// ------connection 'el' and 'this' with a 'CALL'-------

/*
let el = document.getElementById('elem')

function func(q, expl) {
    alert(this.value + ' ' + q + ' ' + expl)
}

func.call(el, 6, 'psc')

*/


// ------connection 'el' and 'this' with a 'APPLY'-------
/*
let el = document.getElementById('elem')

function func(q, expl) {
    alert(this.value + ' ' + q + ' ' + expl)
}

func.apply(el, [6, 'psc'])
*/

// ------connection 'el' and 'this' with a 'BIND'-------

let el = document.getElementById('elem')

function func(q, expl) {
    alert(this.value + ' ' + q + ' ' + expl)
}

let newFunc = func.bind(el)

newFunc(6, 'psc')

