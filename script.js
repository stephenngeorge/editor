const frame = document.querySelector('.editor')

frame.contentWindow.document.designMode = "on"

frame.contentWindow.document.body.innerHTML = '<b>word stuff</b>'

const paragraph = frame.contentWindow.document.body.innerHTML
const div = document.createElement("DIV")
div.innerHTML = paragraph

document.body.appendChild(div)