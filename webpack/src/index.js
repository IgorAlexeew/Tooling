import _ from 'lodash'
import './style.css'
import Icon from './icon.svg'

function test() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'Forte'], ' ')
    element.classList.add('hello')

    const icon = new Image()
    icon.src = Icon
    element.appendChild(icon)

    return element
}

document.body.appendChild(test())