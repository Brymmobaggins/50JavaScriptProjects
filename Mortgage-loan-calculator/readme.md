# Mortgage Loan Calculator

### Preview

![Project image](./img/Screen%20Shot%202023-02-08%20at%204.24.37%20PM.png)

### Built with

- HTML
- CSS
- JavaScript
- CSS animation witj keyframes

### Key Concept

- DOM
- Events
- function
- JavaScript REGEX (Regular Expression)

### Lines of Codes

This used around 17 lines of JavaScript codes including whitespaces and comments

### What i did

I was able to retrieve values from a HTML input field. Once the values are retrieved i used them to perform a calculation. The calculation is the **_Simple interest_** that output the payment amount on a **_Mortgage_**, given its **_interest rate_**, **_Principal Amount_** and number of months to pay. The code was pretty easy.

The other thing this project looked at was JavaScript regular expression. The syntax is quite difficult to memorize, i havent spent much time and effort to learb as much as i can about regular expression, i had to navigate Regular expression documentation on [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) which was helful and well documented with Cheatsheet.

### What i learned

I learned how to JavaScript regular expression(REGEX)

```
(/\B(?=(\d{3})+(?!\d))/g, ",")

```

The regex below looks for word boundary

```
\B
```

Says what to look for 

```
?
```

looks for 3 digits in a row and add commma(,)

```
\d

```
