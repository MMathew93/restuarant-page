import {clear, newHeader, loadFooter, navButtons} from './initialpage'

const loadEvents = function () {
    clear()
    newHeader()
    navButtons()
    const content = document.getElementById('content')
    const contentWrapper = document.getElementById('content-wrapper')
    const eventSection = document.createElement('div')
    eventSection.className = "eventSection"
    const h1 = document.createElement('h1')
    h1.innerHTML = "Upcoming Events"
    eventSection.appendChild(h1)
    const p = document.createElement('p')
    p.innerHTML = 'No upcoming events :('
    eventSection.appendChild(p)
    contentWrapper.appendChild(eventSection)
    content.appendChild(contentWrapper)
    loadFooter()
};

export {loadEvents}