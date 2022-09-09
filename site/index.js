import {convert} from './phonate.js'

/* Global: inputElement, outputElement */

async function doIt () {
  outputElement.innerText = convert(inputElement.value)
}

doIt()

inputElement.oninput = doIt
