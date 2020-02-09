// Question 1

/* Answer Q1
    const myFunctionExpression = function(){
        console.log("Kari");
    }
*/

// Question 2

/* Answer Q2
    const button = document.querySelector(".btn");

    function buttonClicked(){
        console.log("I was clicked");
    }

    button.addEventListener("click", buttonClicked);
*/

// Question 3

/*  Answer Q3
    const textInput = document.querySelector("#firstName");

    function callWhenKeyPressed(event){
        console.log(event.key);
    }

    textInput.addEventListener("keydown", callWhenKeyPressed);
*/

// Question 4

/*  Answer Q4
    const button = document.querySelector("button");

    function addHoverClass(event){
        event.target.classList.add("hover");
    }

    button.addEventListener("mouseover", addHoverClass);
*/

// Question 5

/* Answer Q5
    const button = document.querySelector('[data-animal="dog"]');

    function removeHoverClass(event){
        event.target.classList.remove("hover");
    }

    button.addEventListener("mouseout", removeHoverClass);
*/

// Question 6

/* Answer Q6
    const animalListItems = document.querySelectorAll("li");

     function logAnimal(event){
        console.log(event.target.dataset.animal);
    }

    for(let i = 0; i < animalListItems.length; i++){
        animalListItems[i].addEventListener("mouseover", logAnimal);
    }
*/

// Question 7

/* Answer Q7
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
*/

// Question 8

/* Answer Q8
    function handleEachSheep(sheeps){
        console.log(sheeps);
    };

    sheep.forEach(handleEachSheep);
*/

// Question 9
/* Answer Q9
    function sayHello(){
        console.log("Hello");
        if(counter === 5){
            clearInterval(intervalId);
        }
        counter++;
    }
    let counter = 0;
    const intervalId = setInterval(sayHello, 500);
*/

// Quesiton 10
/* Answer Q10
    const newTextContainer = document.querySelector("div");

    function updateText(){
        newTextContainer.innerHTML = "Text updated";
    }

    setTimeout(updateText, 2000);
*/