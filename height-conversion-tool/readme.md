# Height conversion tools

## Preview

![project image](img/Screen%20Shot%202023-01-07%20at%209.43.33%20PM.png)

## What would you see 

- You would see two input boxes and a button
- The first input box takes values of inches,  the value should not be should not be greater 11 and less than 0. 
- The other input box takes the value for feet, the value should not be less than 0.
- When a user click on the button, it converts the both value to centimeter(cm) and display the results.

## Built with

- HTML
- CSS
- JavaScript
  
## What i did 

- firstly, i reference the form from the DOM as assigned it to a variable `form` and also prevented the form from default submission.
  
- Secondly, i created a function `convertToCM` . The code inside function `convertToCM` is to get the user input, convert the value to integer(number), check if the value is a number. calcute the feets, inches and return the results.
  
- lastly, i called `convertToCM` function on form event
  
## Key concept

- DOM
- Event(submit)
- Flow control (conditions)
- Built in function `parseInt()`
- Built in function `isNaN()`
  
## Lines of code 

37 lines of codes including whitespaces and comments

## New thing learned 

- I learned about the using `parseInt()` function that converts a string to integer(number). Secondly, i learned the concept of using `isNaN()` which was pretty helpful to check whether a value is a number.
