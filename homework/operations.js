let msj = 'El número que ingresó fue 0 y todo número divisible entre el da error'
let alert = 'Ingrese los espacios indicados'


exports.Operations = function(opcion, a ,b) {

  if (opcion === 'sumar') {
    return a + b
  } else if (opcion === 'restar') {
    return a - b
  } else if (opcion  === 'multiplicar') {
    return a * b
  } else if(opcion === 'dividir') {
    if (a === 0 || b === 0) {
      return msj
    } else {
      return a / b;
    }
  } else { 
    return alert
  }
  
}

