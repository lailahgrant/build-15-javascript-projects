# Build 15 JavaScript Projects - Vanilla JavaScript
> [John Smilga](https://www.johnsmilga.com)
> 
> GitHub repo is [javascript-basics-projects](https://www.github.com/john-smilga/javascript-basics-projects)

### Features
- JavaScript Tutorial and Projects course
- CSS already prepared
- No Arrow functions
- Starter project at [John Smilga](https://www.johnsmilga.com)

<hr>

### Projects
1. Change background
- Generate a unique hex colour when a button is clicked
- Turn the background colour of the website by a random colour when button is clicked
  
2. Counter
- Increase / decrease the count
- Reset the count
- Counts less than 0 are in red, greater than one are in green   

3. Reviews
4. Navbar
5. Sidebar
6. Modal
7. Questions
8. Menu
9.  Video
10. Scroll
11. Tabs
12. Countdown timer
13. Lorem Ipsum
14. Todo
15. Slider
    
### Course Exclusive
16. Counters (OOP)
17. Gallery (OOP)
18. Numbers
19. Dark Mode
20. Filters
21. Dad Jokes
22. Products
23. Random User
24. Cocktails
25. Slider
26. Stripe Submenus
27. Pagination
28. Wikipedia
29. Comfy Sloth


<hr>

### What I'm learning in Every Project
1. Color Flip
- Generate a unique hex colour when a button is clicked
- for loop 
```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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


```
- Getting whole numbers using from the `Math.random` and `Math.floor`
```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// get a random colour
function getRandomNumber() {
    /*
    return Math.random(); //get random number between 0 to 0.99999 appr 1
    // to get whole numbers, multiply random number by the .floor with the length of the array
    // Math.floor() - rounds down to a whole number
    */
    return Math.floor(Math.random() * hex.length);
}
```
  
1. Counter
- Increase / decrease the count
- Reset the count
- Counts less than 0 are in red, greater than one are in green   

1. Reviews
2. Navbar
3. Sidebar
4. Modal
5. Questions
6. Menu
7.  Video
8.  Scroll
9.  Tabs
10. Countdown timer
11. Lorem Ipsum
12. Todo
13. Slider
    
### Course Exclusive
16. Counters (OOP)
17. Gallery (OOP)
18. Numbers
19. Dark Mode
20. Filters
21. Dad Jokes
22. Products
23. Random User
24. Cocktails
25. Slider
26. Stripe Submenus
27. Pagination
28. Wikipedia
29. Comfy Sloth

