// letters 
const letters = "abcdefghijklmnopqrstuvwzyz";

//get array from this 
let lettersArray = Array.from(letters);
// let lettersArray= [...Array.from(letters)];
console.log(lettersArray);

//select letters conatiner
let lettersContainer = document.querySelector(".letters");

// generate Letters 
lettersArray.forEach(letter => {
    // create span
    let span = document.createElement("span");
    //create letters text node
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);

    //add class on the span 
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});

//craete objects of words + categories
const words = {
    programing: ["php", "javascript", "sql", "go", "python", "sass", "css", "html", "pugjs"],
    movies: ["inception", "coco", "about time", "the chosen", "hunger game", "lost", "stranger things"],
    men: ["ahmed", "mina", "kero", "fady", "ali", "sam", "hany"],
    womens: [, "marina", "fiby", "liza", "nancy", "gamila", "mona"],
    conutries: ["egypt", "north coria", "north afric", "france", "usa", "soudi", "uk"],
}

// get random property
let allkeys = Object.keys(words);
// console.log(allkeys.length);

let randomPropNumber = Math.floor(Math.random() * allkeys.length);
// console.log(randomPropNumber);
let randomPropName = allkeys[randomPropNumber];
// console.log(randomPropName);
let randomPropValue = words[randomPropName];
// console.log(randomPropValue);
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// console.log(randomValueNumber);

let randomValueName = randomPropValue[randomValueNumber];
// console.log(randomValueName);

document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueName);
// console.log(lettersAndSpace);

// set wrong Attempts
let wrongAttepts = 0;

// select the Drow element 
let theDrow = document.querySelector(".hangman-draw");


lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    // if the letter is space
    if (letter === ' ') {
        emptySpan.className = 'has-space';
        // console.log("space");
    }

    lettersGuessContainer.appendChild(emptySpan);
});

// select guess span 
let guessSpan = document.querySelectorAll(".letters-guess span");

// handle clicking on litters 
document.addEventListener("click", (e) => {

    // set the chose stats
    let theStatus = false;

    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        let theClickLetter = e.target.innerHTML.toLowerCase();

        // console.log(theClickLetter);
        // console.log(lettersAndSpace);

        lettersAndSpace.forEach((wordLetter, wordIndex) => {
            if (theClickLetter == wordLetter) {
                theStatus = true;
                console.log(`found at index ${wordIndex}`);
                guessSpan.forEach((span, spanIndex) => {
                    if (wordIndex == spanIndex) {
                        span.innerHTML = wordLetter;
                    }
                });
            }
        });
        console.log(theStatus);
        if (theStatus !== true) {
            wrongAttepts++;
            console.log(`wrong-${wrongAttepts}`);
            theDrow.classList.add(`wrong-${wrongAttepts}`);
            console.log(theDrow);
            // if (wrongAttepts > 8){
            //     document.querySelector(".letter").classList.add("fail");
            // }
        }
    }
});