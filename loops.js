function forLoop(array) {
  for (var i = 0; i <= 25; i++) {
    if (i === 1) {
      array.unshift("I am 1 strange loop.")
    } else {
      array.unshift(`I am ${i} strange loops.`)
    }
  }
}

forLoop()
