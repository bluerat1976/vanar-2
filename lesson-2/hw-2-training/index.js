let button = {
    text: 'Click',
    __type: 'submit',
    color:'#000000',
    style: {
       width: '100px',
       fontSize: '50px',
   },

   set type(value) {
       if(value = 'submit') {
           
        __type = value
       }
   },

   get type() {
       return this.__type
   }


}