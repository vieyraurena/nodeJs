exports.Validation = function (num) {
  let total = num.toString().length
  
  if (total === 3) {
    return true
  } else {
    return false
  }
  
}