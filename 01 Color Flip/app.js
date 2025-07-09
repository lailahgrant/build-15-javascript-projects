const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/**
 * target the button
 * target the colour <span> in html - display the color value
 * set event listener for the button
 * target the body of html element
 * use background style property to change the span vale, manually access values in the colors variable above
 */
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //console.log(document.body);

    /*
    //get a random number between 0 - 3
    //manually access values in the colors array variable above
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    */

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

// get a random colour
function getRandomNumber() {
    /*
    return Math.random(); //get random number between 0 to 0.99999 appr 1
    // to get whole numbers, multiply random number by the .floor with the length of the array
    // Math.floor() - rounds down to a whole number
    */
    return Math.floor(Math.random() * colors.length);
}

