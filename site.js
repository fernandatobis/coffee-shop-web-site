document.addEventListener('DOMContentLoaded', (event) => {
    const foods = window.document.querySelector("#foods")
    const drinks = window.document.querySelector("#drinks")
    const foodList = window.document.querySelector(".food-list")
    const drinkList = window.document.querySelector(".drink-list")
    foods.addEventListener("click", function(){
        foodList.style.display = "block"
        drinkList.style.display= "none"
        foods.classList.add("selected")
        drinks.classList.remove("selected")
    } ) 
    drinks.addEventListener("click", function (){
        foodList.style.display = "none"
        drinkList.style.display = "block"
        drinks.classList.add("selected")
        foods.classList.remove("selected")
    })
});