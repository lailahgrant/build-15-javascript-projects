const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/**
 * selecting the button
 * add event listener to button for a click
 * hex colours consist of e.g. #f15025 #, anumber, letter, to make 6 figures
 * - Set up a loop that will generate the hex colour on the loop
 * target the body
 * target the span to display the code of the hex colour in the background
 */
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    let hexColor = '#';
    //loop to generate 6, loop runs 6 times
    // loop runs and generates a random value
    for (let i = 0; i < 6; i++) {
        /*
         //pass the array index
         hexColor += hex[11];// running a static number in the array - need dynamic color generated randomly
         */

        //pass the dynamic random generated number
        hexColor += hex[getRandomNumber()]; //call the function
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

