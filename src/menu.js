import {clear, newHeader, loadFooter, navButtons} from './initialpage'

const loadMenu = function () {
    clear()
    newHeader()
    navButtons()
    const content = document.getElementById('content')
    const contentWrapper = document.getElementById('content-wrapper')
    const menuWrapper = document.createElement('div')
    menuWrapper.className = "menu-wrapper"
    const menu= document.createElement('div')
    menu.className= "menu"
//FOOD DIV
    const food= document.createElement('div')
    food.id='food'
    food.className= "subMenu"
    const foodTitle = document.createElement('h1')
    foodTitle.innerHTML= "Grub"
    food.appendChild(foodTitle)
    let foodItems = ['Classic Cheeseburger (American cheese, lettuce, tomatoes, pickes, onions', 'Nashville Hot Chicken Sandwhich (Brioche Bun, coleslaw, and pickles)', 'Hot Wings (Mild Moderate or Spicy heat levels, ask for the flavors!)', 'French Fries']
    foodItems.forEach((x) => {
        let foodP = document.createElement('p')
        foodP.innerHTML = `${x}`
        food.appendChild(foodP)
    });
//DRINK DIV
    const drink= document.createElement('div')
    drink.id='drink'
    drink.className= "subMenu"
    const drinkTitle= document.createElement('h1')
    drinkTitle.innerHTML= "On Tap"
    drink.appendChild(drinkTitle)
    let drinkItems = ['On Tap (Miller Lite, Samuel Adams, Mind Haze, Modelo', 'Hard Liquor (Whatever we have on shelf, prces vary)', 'Soda (Coke Products)', 'Water']
    drinkItems.forEach((x) => {
        let drinkP = document.createElement('p')
        drinkP.innerHTML = `${x}`
        drink.appendChild(drinkP)
    });

    menu.appendChild(food)
    menu.appendChild(drink)
    menuWrapper.appendChild(menu)
    contentWrapper.appendChild(menuWrapper)
    content.appendChild(contentWrapper)
    loadFooter()
};

export {loadMenu}