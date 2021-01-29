"use strict"

function not(fn) {
  return function (...arg) {
    return !fn(...arg)
  }
}

function when(fn) {
  return function (predicate) {
    return function (...arg) {
      if (predicate(...arg)) {
        return fn(...arg)
      }
    }
  }
}

function isShortEnough(str) {
  return str.length <= 5
}

const output = console.log
const printIf = when(output)
const isLongEnough = not(isShortEnough)

var msg1 = "Hello"
var msg2 = msg1 + " World"

printIf(isShortEnough)(msg1) // Hello
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2) // Hello World
