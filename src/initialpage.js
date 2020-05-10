import {loadAbout} from './about.js'

//Header Loader
const loadHomePageHeader = function () {
    const content = document.getElementById('content')
    const contentWrapper = document.createElement('div')
    contentWrapper.id = "content-wrapper"
    const header = document.createElement('header')
    const ul = document.createElement('ul')
    ul.className = "nav-bar"
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
};
//Hero Loader
const loadHero = function () {
    const content = document.getElementById('content')
    const contentWrapper = document.getElementById('content-wrapper')
    const hero = document.createElement('div')
    hero.className = "hero"
    contentWrapper.appendChild(hero)
    content.appendChild(contentWrapper)
};
//Footer Loader
const loadFooter = function () {
    const content = document.getElementById('content')
    const contentWrapper = document.getElementById('content-wrapper')
    const footer = document.createElement('footer')
    const iconBox = document.createElement('div')
    iconBox.id = "icon-box"
    let icons = ['fab fa-facebook-square', 'fab fa-instagram', 'fab fa-twitter-square']
    icons.forEach((x) => {
        let i = document.createElement('i')
        i.className = `${x}`
        iconBox.appendChild(i)
    });
    footer.appendChild(iconBox)
    const p = document.createElement('p')
    p.className = "footer-text"
    p.innerHTML = 'Icons supplied by FA Free, <a href="https://fontawesome.com/license"> fontawesome.com/license </a>, changes to icon color only, no other changes applied.'
    footer.appendChild(p)
    contentWrapper.appendChild(footer)
    content.appendChild(contentwrapper)
};
//Navigation Buttons
const navButtons = function () {
    let about_button = document.getElementById('About')
    let events_button = document.getElementById('Events')
    let menu_button = document.getElementById('Menu')
    let contactUs_button = document.getElementById('Contact Us')
    about_button.addEventListener('click', loadAbout)
    //events_button.addEventListener('click', events)
    //menu_button.addEventListener('click', menu)
    //contactUs_button.addEventListener('click', contactUs)
};

export {loadHomePageHeader, loadHero, loadFooter, navButtons}