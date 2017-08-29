function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    if (i === 1) {
      array.pop("I am 1 strange loop.")
    } else {
      array.unshift(`I am ${i} strange loops.`)
    }
    return array
  }
}
var newA = []
console.log(forLoop(new))
