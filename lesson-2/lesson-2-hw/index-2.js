function func () { 
  for (let i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  } 
}

func(10, 22, 33, 678)