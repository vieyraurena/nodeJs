let message = ''

exports.calculate = function (degrees) {

  if (degrees <= 10) {
    message = `Hace mucho frío`
    return message
  } else if (degrees > 10 && degrees <= 15) {
    message = `Hace poco frío`
    return message
  } else if (degrees > 16 && degrees <= 24) {
    message = `Hace una temperatura normal`
    return message
  } else if (degrees > 25 && degrees <= 30) {
    message =  `Hace poco calor`
    return message
  } else {
    message = `Hace mucho calor`
    return message
  }
  
}