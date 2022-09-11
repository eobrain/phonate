import { convert } from './phonate.js'

/* global inputElement, outputElement */

async function doIt () {
  outputElement.innerText = convert(inputElement.value)
}

doIt()

inputElement.oninput = doIt
