/**
 * set initial count
 * select the value span
 * select all the buttons
 * - select all the buttons using querySelectorAll,
 * - differentiate the buttons using a "for each" loop
 */


//* set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

//console shows a nodelist
//console.log(btns);
/**
 * Nodelist is array-like
 * - There are some array methods that can be done on it and not
 * - Need to sometimes tranform it into an array
 * - Use the forEach method
 * - pass a callback fn in a forEach fn
 * - can access any item in the forEach callback fn using a parameter
 * - console.log()
 */

//loop through all these buttons
btns.forEach(function (btn) {
    //console.log(btn);

    //add an event listener to all these buttons
    btn.addEventListener('click', function (e) {
        //access the event objects - to know which button is clicked
        // event object has currentTarget method, look for the classList
        //console.log(e.currentTarget); //shows the button the user clicks on 

        //shows the class of the individual buttons clicked
        //console.log(e.currentTarget.classList);

        const styles = e.currentTarget.classList;

        //make an if statement
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        //increase
        if (count > 0) {
            //turn the span value to green when counter is increasing
            value.style.color = "green";
        }

        //decrease
        if (count < 0) {
            value.style.color = "red";
        }

        //reset
        if (count === 0) {
            value.style.color = "#222";
        }


        //change the displayed value of the counter in the span
        value.textContent = count;

    })

});


