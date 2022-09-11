import { convert } from './phonate.js'

/* global inputElement, outputElement */

function resizeToFit (elem) {
  console.log(`clientHeight=${elem.clientHeight} scrollHeight=${elem.scrollHeight}`)
  while (elem.clientHeight < elem.scrollHeight) {
    elem.rows++
  }
}

function doIt () {
  outputElement.innerText = convert(inputElement.value)
  resizeToFit(inputElement)
  resizeToFit(outputElement)
}

doIt()

inputElement.oninput = doIt
