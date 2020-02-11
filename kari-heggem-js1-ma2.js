// Question 1

const myFunctionExpression = function(){
    console.log("Kari");
}

// Question 2

const buttonByClass = document.querySelector(".btn");

function buttonClicked(){
    console.log("I was clicked");
}

buttonByClass.addEventListener("click", buttonClicked);

// Question 3

const textInput = document.querySelector("#firstName");

function callWhenKeyPressed(event){
    console.log(event.key);
}

textInput.addEventListener("keydown", callWhenKeyPressed);

// Question 4

const buttonByTag = document.querySelector("button");

function addHoverClass(event){
    event.target.classList.add("hover");
}

buttonByTag.addEventListener("mouseover", addHoverClass);

// Question 5

const buttonByData = document.querySelector('[data-animal="dog"]');

function removeHoverClass(event){
    event.target.classList.remove("hover");
}

buttonByData.addEventListener("mouseout", removeHoverClass);

// Question 6

const animalListItems = document.querySelectorAll("li");

    function logAnimal(event){
    console.log(event.target.dataset.animal);
}

for(let i = 0; i < animalListItems.length; i++){
    animalListItems[i].addEventListener("mouseover", logAnimal);
}

// Question 7

switch(animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

// Question 8

function handleEachSheep(sheeps){
    console.log(sheeps);
};

sheep.forEach(handleEachSheep);

// Question 9

function sayHello(){
    console.log("Hello");
    if(counter === 5){
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(sayHello, 500);

// Quesiton 10

const newTextContainer = document.querySelector("div");

function updateText(){
    newTextContainer.innerHTML = "Text updated";
}

setTimeout(updateText, 2000);