import _ from 'lodash'

function test() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'Jedis'], ' ')
    element.setAttribute("style", "font-family: sans-serif")
    return element
}

document.body.appendChild(test())