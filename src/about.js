import {loadFooter, navButtons} from './initialpage.js'

//ABOUT LOAD
const loadAbout = function () {
    const content = document.getElementById('content')
    content.innerHTML = ''
//Non-Homepage Header
    const newHeader = function () {
        const contentWrapper = document.createElement('div')
        contentWrapper.id = "content-wrapper"
        const header = document.createElement('header')
        header.id = 'nonHomepageHeader'
        const ul = document.createElement('ul')
        ul.className = "nav-bar"
        ul.id = "non-homepage"
        let logo = document.createElement('div')
        logo.id = 'logo'
        logo.innerHTML = 'the Mock Bar'
        header.appendChild(logo)
        let ul_tabs = ['About', 'Events', 'Menu', 'Contact Us']
        ul_tabs.forEach((x) => {
            let li = document.createElement('li')
            li.id = `${x}`
            li.innerHTML = `${x}`
            ul.appendChild(li)
        });
        header.appendChild(ul)
        contentWrapper.appendChild(header)
        content.appendChild(contentWrapper)
    }
    newHeader()
    //Hero Content Change
    const aboutSection = function () {
        const aboutSection = document.createElement('div')
        aboutSection.className = "aboutSection"
        const h1 = document.createElement('h1')
        h1.innerHTML = "the Mock Bar"
        aboutSection.appendChild(h1)
        const p = document.createElement('p')
        p.innerHTML = 'Both a made up and fictaticious place, Mathew has fooled not only you must the mass gathering of people who are outside of his home insiting he pour them a cold brew. However while a great man of mystery and honor mathew has no intentions following through on such demands. For years he has thought of starting his own brewery or even a pub but alas he has now dedicated his time and efforts in trying to learn to prgram, he figured with more money he could always buy his own brewery later on in life, guess we\'ll see how this pans out for our hero.'
        aboutSection.appendChild(p)
        contentWrapper.appendChild(aboutSection)
        content.appendChild(contentWrapper)
    }
    aboutSection()
    loadFooter()
    navButtons()
};



export {loadAbout}