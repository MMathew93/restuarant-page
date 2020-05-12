import {clear, newHeader, loadFooter, navButtons} from './initialpage'

const loadAbout = function () {
    clear()
    newHeader()
    navButtons()
    const content = document.getElementById('content')
    const contentWrapper = document.getElementById('content-wrapper')
    const aboutSection = document.createElement('div')
    aboutSection.className = "aboutSection"
    const h1 = document.createElement('h1')
    h1.innerHTML = "the Mock Bar"
    aboutSection.appendChild(h1)
    const p = document.createElement('p')
    p.innerHTML = 'Both a made up and fictitious place, Mathew has fooled not only you but the mass gathering of people who are outside of his home insiting he pour them a cold brew. However while a great man of mystery and honor mathew has no intentions following through on such demands. For years he has thought of starting his own brewery or even a pub but alas he has now dedicated his time and efforts in trying to learn to program, he figured with more money he could always buy his own brewery later on in life, guess we\'ll see how this pans out for our hero.'
    aboutSection.appendChild(p)
    contentWrapper.appendChild(aboutSection)
    content.appendChild(contentWrapper)
    loadFooter()
};

export {loadAbout}