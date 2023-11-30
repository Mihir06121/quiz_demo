import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Collapse } from 'reactstrap'
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

const QuizApp = () => {

  


  const [selectedQuestions, setSelectedQuestions] = useState([]);
  // Function to randomly select a specified number of questions from each type
  const selectRandomQuestions = (questions, type, count) => {
    const filteredQuestions = questions.filter((question) => question.type === type);
    const selectedQuestions = [];

    while (selectedQuestions.length < count && filteredQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      selectedQuestions.push(filteredQuestions.splice(randomIndex, 1)[0]);
    }

    return selectedQuestions;
  };

  // Example: Select 5 random questions from each type
  useEffect(() => {
    // console.log(questions)
    const questions = [
      {
        "type": "Analytical",
        "question": "QAR, RAS, SAT, TAU, _____",
        "options": ["UAV", "UAT", "TAS", "TAT"],
        "correctAnswer": "UAV",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In how many different ways can the letters of the word 'OPTICAL' be arranged so that the vowels always come together?",
        "options": ["120", "540", "720", "4320"],
        "correctAnswer": "720",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "36 men can complete a piece of work in 18 days. In how many days will 27 men complete the same work?",
        "options": ["30", "12", "36", "24"],
        "correctAnswer": "24",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In a bag, there are 8 red, 7 yellow and 6 green balls. If one ball is picked up at random, what is the probability that it is neither red nor green?",
        "options": ["1/2", "1/4", "1/5", "1/3"],
        "correctAnswer": "1/3",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Ram draws one card at random from a pack of 52 cards. What is the probability that the card drawn is a face card (jack, queen and king only)?",
        "options": ["3/13", "3/15", "3/17", "1/19"],
        "correctAnswer": "3/13",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "The ratio of the total amount distributed in all the males and females as salary is 6:5. The ratio of the salary of each male and female is 2:3. Find the ratio of the no. of males and females.",
        "options": ["5:9", "9:5", "5:7", "7:5"],
        "correctAnswer": "9:5",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If the number 467X4 is divisible by 9, find the value of the digit marked as X.",
        "options": ["4", "5", "6", "7"],
        "correctAnswer": "6",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "DCXW, FEVU, GHTS, JIRQ, ?",
        "options": ["ABYZ", "LKPO", "J1RQ", "LMRS"],
        "correctAnswer": "LKPO",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If SISTER is coded as 535301, UNCLE is coded as 84670 and BOY is coded as 129. Find the code word for SON ?",
        "options": ["923", "872", "361", "524"],
        "correctAnswer": "524",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A, Band C are intelligent, A, D and E are laborious and D, C and E are honest and . A, B, and E are ambitious. Which of the following are not honest?",
        "options": ["C and A", "A and D", "A and B", "C, A and B"],
        "correctAnswer": "A and B",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Crime : Punishment : : Deed : ?",
        "options": ["Pleasure", "Hatred", "Prize", "Sin"],
        "correctAnswer": "Prize",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If the alphabets are written in the sequence of a, bb, ccc, dddd, eeeee, ffffff, …. What will be the 120th letter?",
        "options": ["s", "t", "o", "q"],
        "correctAnswer": "o",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Find the next number in the series of 3, 12, 7, 26, 15, ?",
        "options": ["34", "74", "64", "54"],
        "correctAnswer": "54",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What will be the 55th word in the arrangement of the letters of the word PERFECT?",
        "options": ["CEPFRET", "CEPFERT", "CEPERFT", "CEPRFET"],
        "correctAnswer": "CEPFERT",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Anil works for 8 straight days and rest on the 9th day. If he starts his work on Monday, then on which day he gets his 12th rest day?",
        "options": ["Thursday", "Friday", "Tuesday", "Wednesday"],
        "correctAnswer": "Wednesday",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Aman’s speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr. What is Aman’s speed against the current?",
        "options": ["10 km/hr", "12 km/hr", "10.5 km/hr", "8.5 km/hr"],
        "correctAnswer": "10 km/hr",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Rohit’s father is three times elder than Rohit. After 8 years, he would be two and a half times of Rohit’s age. After a further 8 years, how many times would he be of Rohit’s age?",
        "options": ["2.5 times", "2 times", "3 times", "3.5 times"],
        "correctAnswer": "2 times",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In a horse racing competition, there were 18 numbered 1 to 18. The organizers assigned a probability of winning the race to each horse based on horses health and training the probability that horse one would win is 1/7, that 2 would win is 1/8, and that 3 would win is 1/7.Assuming that tie is impossible. Find the chance that one of these three will win the race?",
        "options": ["22/392", "1/396", "231/561", "22/56"],
        "correctAnswer": "22/56",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A bag contains 5 red caps, 4 blue caps, 3 yellow caps and 2 green caps. If four caps are picked at random, what is the probability that 2 are red, 1 blue and 1 green?",
        "options": ["80/1001", "70/1001", "60/1001", "50/1001"],
        "correctAnswer": "80/1001",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If in a code language, COULD is written as BNTKC and MARGIN is written as LZQFHM, how will MOULDING be written in that code ?",
        "options": ["CHMFINTK", "LNKTCHMF", "LNTKCHMF", "NITKHCMF"],
        "correctAnswer": "LNTKCHMF",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "GO+TO=OUT, O+U+T=?",
        "options": ["10", "3", "8", "5"],
        "correctAnswer": "3",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the HTML <details> and <summary> elements? ",
        "options": [
          "To create dropdown menus",
          "To define a section that is initially hidden but can be revealed",
          "To structure tables with detailed information",
          "To display animated content"
        ],
        "correctAnswer": "To define a section that is initially hidden but can be revealed",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "Which HTML5 feature allows for offline web applications by caching files in the browser?",
        "options": [
          "Service Workers",
          "Offline Storage",
          "Browser Cache",
          "Local Storage"
        ],
        "correctAnswer": "Service Workers",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In HTML, what is the purpose of the defer attribute in the <script> tag?",
        "options": [
          "Delays the execution of the script until after the document is parsed",
          "Specifies that the script should run immediately",
          "Defines a deferred function",
          "Links an external stylesheet"
        ],
        "correctAnswer": "Delays the execution of the script until after the document is parsed",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the difference between the <article> and <section> elements in HTML5?",
        "options": [
          "<article> is used for standalone content, while <section> is for grouping related content.",
          "<section> is used for standalone content, while <article> is for grouping related content.",
          "There is no functional difference between them; they can be used interchangeably.",
          "<article> is used for navigation links, while <section> is for article content."
        ],
        "correctAnswer": "<article> is used for standalone content, while <section> is for grouping related content.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the CSS property will-change?",
        "options": [
          "It specifies the order in which styles should be applied.",
          "It hints to the browser that an element's property is expected to change, allowing for optimization.",
          "It controls the order of transitions and animations.",
          "It sets the initial value for a CSS property."
        ],
        "correctAnswer": "It hints to the browser that an element's property is expected to change, allowing for optimization.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What does the CSS property mix-blend-mode do?",
        "options": [
          "It blends background images.",
          "It controls the blending of an element with its parent.",
          "It specifies the order of blending for multiple elements.",
          "It adjusts the brightness of an element."
        ],
        "correctAnswer": "It controls the blending of an element with its parent.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In CSS, what is the purpose of the :not() pseudo-class?",
        "options": [
          "It selects only the first child element.",
          "It selects elements that are not of a specified type.",
          "It excludes elements that match a specified selector.",
          "It applies styles to the last element in a container."
        ],
        "correctAnswer": "It excludes elements that match a specified selector.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What does the CSS property contain: strict do?",
        "options": [
          "It enforces strict adherence to the CSS Box Model.",
          "It creates a strict grid layout.",
          "It contains an element within its parent, limiting its layout impact on the rest of the page.",
          "It strictly enforces the specificity of CSS selectors."
        ],
        "correctAnswer": "It contains an element within its parent, limiting its layout impact on the rest of the page.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the CSS property writing-mode?",
        "options": [
          "It specifies the direction of the text flow within a block-level element.",
          "It controls the mode in which text is written on the page.",
          "It determines the spacing between characters.",
          "It defines the writing style for a specific font."
        ],
        "correctAnswer": "It specifies the direction of the text flow within a block-level element.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "Crime : Punishment : : Deed : ?",
        "options": ["Pleasure", "Hatred", "Prize", "Sin"],
        "correctAnswer": "Prize",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "Which HTML5 form attribute is used to associate a label with a form element, providing accessibility benefits?",
        "options": ["aria-labelledby", "label-for", "aria-label", "id"],
        "correctAnswer": "id",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the CSS pseudo-class :nth-child(odd)?",
        "options": [
          "Selects all odd elements within their parent",
          "Selects the first child of every element",
          "Targets elements with odd values in their content",
          "Styles the last child of every element"
        ],
        "correctAnswer": "Selects all odd elements within their parent",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In CSS Grid, what does the property grid-template-areas define?",
        "options": [
          "The names of grid items",
          "The layout of grid areas in a container",
          "The spacing between grid items",
          "The width of each grid column"
        ],
        "correctAnswer": "The layout of grid areas in a container",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the CSS property object-fit?",
        "options": [
          "Adjusts the width and height of an element",
          "Sets the content of a replaced element, such as an image or video",
          "Specifies the positioning method used for an element",
          "Defines how an element's box is generated"
        ],
        "correctAnswer": "Sets the content of a replaced element, such as an image or video",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the difference between margin and padding in CSS?",
        "options": [
          "margin is the space inside an element, while padding is the space outside an element.",
          "margin is the space outside an element, while padding is the space inside an element.",
          "They are synonyms and can be used interchangeably.",
          "margin and padding are used for the same purpose."
        ],
        "correctAnswer": "margin is the space outside an element, while padding is the space inside an element.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In CSS, what does the backface-visibility property control?",
        "options": [
          "The visibility of the background image of an element",
          "Whether or not the back face of an element is visible when facing away from the screen",
          "The visibility of an element when hovering over it",
          "The visibility of a fixed-position element"
        ],
        "correctAnswer": "Whether or not the back face of an element is visible when facing away from the screen",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the JavaScript Map object?",
        "options": [
          "To store key-value pairs where the keys can be objects",
          "To create a mapping between two arrays",
          "To perform mathematical operations on arrays",
          "To store only unique values in a collection"
        ],
        "correctAnswer": "To store key-value pairs where the keys can be objects",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is a 'closure' in JavaScript?",
        "options": [
          "A method for closing the browser window",
          "A function with access to variables from its outer scope, even after the outer function has finished executing",
          "A way to hide sensitive information in the code",
          "A type of loop construct in JavaScript"
        ],
        "correctAnswer": "A function with access to variables from its outer scope, even after the outer function has finished executing",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the JavaScript Promise object?",
        "options": [
          "To handle asynchronous operations and provide a way to work with their results",
          "To store and retrieve data in the browser",
          "To create dynamic HTML content",
          "To define the structure of an object"
        ],
        "correctAnswer": "To handle asynchronous operations and provide a way to work with their results",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In JavaScript, what does the event.stopPropagation() method do?",
        "options": [
          "Prevents the default behavior of an event",
          "Stops the propagation of the event to parent elements",
          "Triggers the default behavior of an event",
          "Adds an event listener to an element"
        ],
        "correctAnswer": "Stops the propagation of the event to parent elements",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "How does the JavaScript reduce() function differ from map() and filter()?",
        "options": [
          "reduce() is used for transforming elements, while map() and filter() are used for iteration.",
          "reduce() returns a single accumulated value based on the elements of an array, while map() and filter() return new arrays.",
          "reduce() can only be used with strings, while map() and filter() work with arrays.",
          "reduce() is used for filtering elements, while map() and filter() are used for aggregation."
        ],
        "correctAnswer": "reduce() returns a single accumulated value based on the elements of an array, while map() and filter() return new arrays",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the purpose of the JavaScript DocumentFragment?",
        "options": [
          "It represents an entire HTML document.",
          "It is a container for HTML elements that can be added to the DOM without causing reflows or repaints",
          "It provides information about the current document.",
          "It is used for parsing XML documents."
        ],
        "correctAnswer": "It is a container for HTML elements that can be added to the DOM without causing reflows or repaints.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is the key difference between document.getElementById() and document.querySelector() in the DOM? ",
        "options": [
          "getElementById can only select elements by their IDs, while querySelector can select any element using CSS selectors.",
          "querySelector returns only the first matching element, while getElementById can return multiple elements.",
          "querySelector is a newer and more efficient method than getElementById.",
          "There is no significant difference between the two; they can be used interchangeably."
        ],
        "correctAnswer": "getElementById can only select elements by their IDs, while querySelector can select any element using CSS selectors.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "In the DOM, what does the method element.classList.toggle('className') do?",
        "options": [
          "It adds a new class to the element.",
          "It removes a class from the element",
          "PriIt toggles the presence of a class; if the class is present, it removes it; otherwise, it adds it.",
          "It replaces one class with another."
        ],
        "correctAnswer": "It toggles the presence of a class; if the class is present, it removes it; otherwise, it adds it.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "What is event delegation in the context of the DOM?",
        "options": [
          "It refers to the process of delegating events to specific elements in the DOM",
          "It involves delegating tasks related to event handling to external libraries.",
          "It is a method for combining multiple events into a single handler.",
          "It involves handling events on a parent element for child elements that are dynamically added."
        ],
        "correctAnswer": "It involves handling events on a parent element for child elements that are dynamically added.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Web Development",
        "question": "How does the requestAnimationFrame function differ from setTimeout for animations in the DOM?",
        "options": [
          "requestAnimationFrame is deprecated and should not be used for animations.",
          "requestAnimationFrame provides a smoother animation experience and is optimized for performance, as it syncs with the browser's repaint cycle.",
          "setTimeout is preferred for animations as it allows more precise timing control.",
          "There is no significant difference; both can be used interchangeably for animations."
        ],
        "correctAnswer": "requestAnimationFrame provides a smoother animation experience and is optimized for performance, as it syncs with the browser's repaint cycle.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "What does the following Python code snippet do?",
        "options": [
          "Calculates the sum of all even numbers in the list.",
          "Calculates the square of all even numbers in the list.",
          "Calculates the sum of all numbers in the list.",
          "Calculates the square of all numbers in the list."
        ],
        "correctAnswer": "Calculates the square of all even numbers in the list.",
        "isCode": true,
        "codeContent": `numbers = [1, 2, 3, 4, 5]
  squared = [num ** 2 for num in numbers if num % 2 == 0]
      `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "In JavaScript, what will be the output of the following code?",
        "options": [
          "15",
          "14",
          "5",
          "[1, 2, 3, 4, 5]"
        ],
        "correctAnswer": "15",
        "isCode": true,
        "codeContent": `let numbers = [1, 2, 3, 4, 5];
  let num = 0;
  
  for (let i = 0; i < numbers.length; i++) {
      num += numbers[i];
  }
  
  console.log(num);
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "What is the purpose of the following C code snippet?",
        "options": [
          "Calculates the sum of the first 10 even numbers.",
          "Prints numbers from 0 to 9.",
          "Calculates the sum of the first 10 natural numbers.",
          "Calculates the sum of the first 10 odd numbers."
        ],
        "correctAnswer": "Calculates the sum of the first 10 natural numbers.",
        "isCode": true,
        "codeContent": `int i, n = 0;
  for (i = 0; i < 10; i++) {
      n += i;
  }
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "In Python, what does the following code snippet do?",
        "options": [
          "Calculates the square of all numbers in the list.",
          "Calculates the sum of all even numbers in the list.",
          "Calculates the cube of all numbers in the list.",
          "Calculates the product of all numbers in the list."
        ],
        "correctAnswer": "Calculates the square of all numbers in the list.",
        "isCode": true,
        "codeContent": `numbers = [1, 2, 3, 4, 5]
  foo = [num ** 2 for num in numbers]
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "In JavaScript, what does the following code snippet do?",
        "options": [
          "Prints the numbers in the console.",
          "Doubles each number in the array.",
          "Finds the sum of the numbers.",
          "Check if all numbers are even."
        ],
        "correctAnswer": "Doubles each number in the array.",
        "isCode": true,
        "codeContent": `let arr = [1, 2, 3, 4, 5];
  let yoo = arr.map(num => num * 2);    
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "In JavaScript, what does the following code snippet do?",
        "options": [
          "Filters out all even numbers from the array.",
          "Doubles each number in the array.",
          "Calculates the sum of the numbers.",
          "Checks if all numbers are prime."
        ],
        "correctAnswer": "Calculates the sum of the numbers.",
        "isCode": true,
        "codeContent": `let numbers = [1, 2, 3, 4, 5];
  let foo = numbers.reduce((t, num) => t + num, 0);
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "What is the output of the following JavaScript code snippet?",
        "options": [
          "1 3 5",
          "2 4",
          "1 2 3 4 5",
          "3 4"
        ],
        "correctAnswer": "1 3 5",
        "isCode": true,
        "codeContent": `for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
  }
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "In a binary tree with 31 nodes, what is the minimum height it can have if it is perfectly balance",
        "options": [
          "31",
          "16",
          "15",
          "5"
        ],
        "correctAnswer": "15",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "You are given an array of integers: [3, 7, 1, 9, 2]. What is the average (mean) of these numbers?",
        "options": [
          "5",
          "4.4",
          "4",
          "3.5"
        ],
        "correctAnswer": "4.4",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": `What is the result of the expression "5" + 3 in JavaScript?`,
        "options": [
          `“53”`,
          "8",
          `”8”`,
          "53"
        ],
        "correctAnswer": `“53”`,
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": `What is the value of result in JavaScript: let result = (5 > 2) ? "true" : "false";?`,
        "options": [
          `"true"`,
          `"false"`,
          "true",
          "false"
        ],
        "correctAnswer": `"true"`,
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "What is the output of this JavaScript code?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "1",
        "isCode": true,
        "codeContent": `function mysteryFunction(x, y) {
    return (x ** y) % 7;
  }
  
  console.log(mysteryFunction(2, 3));
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Programming",
        "question": "What is the output of this JavaScript code?",
        "options": [
          "12",
          "6",
          "3",
          "NaN"
        ],
        "correctAnswer": "12",
        "isCode": true,
        "codeContent": `function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(3, 4));    
        `,
        "isImage": false,
        "image": ""
      },
    
    
    
      {
        "type": "Databases",
        "question": "Consider the following SQL query:",
        "options": [
          "Retrieves the customer names and order dates for all customers who placed orders in 2022, sorted by customer name.",
          "Retrieves the customer names and order dates for all customers.",
          "Retrieves the customer names and order dates for all customers who placed orders in 2022, sorted by order date.",
          "Deletes all orders placed in 2022."
        ],
        "correctAnswer": "Retrieves the customer names and order dates for all customers who placed orders in 2022, sorted by customer name.",
        "isCode": true,
        "codeContent": `SELECT customers.customer_name, orders.order_date
  FROM customers
  JOIN orders ON customers.customer_id = orders.customer_id
  WHERE YEAR(orders.order_date) = 2022
  ORDER BY customers.customer_name;
        `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Consider the following MongoDB query:",
        "options": [
          "Finds the total quantity of products in each category and sorts them by total quantity in descending order, only including categories with a total quantity of 1,000 or more.",
          "Deletes products in categories with a total quantity less than 1,000.",
          "Finds the total quantity of products in each category and sorts them by total quantity in ascending order, only including categories with a total quantity of 1,000 or more.",
          "Counts the number of products in each category."
        ],
        "correctAnswer": "Finds the total quantity of products in each category and sorts them by total quantity in descending order, only including categories with a total quantity of 1,000 or more.",
        "isCode": true,
        "codeContent": `db.products.aggregate([
      {
          $group: {
              _id: "$category",
              totalQuantity: { $sum: "$quantity" }
          }
      },
      {
          $match: { totalQuantity: { $gte: 1000 } }
      },
      {
          $sort: { totalQuantity: -1 }
      }
  ])
      `,
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": `In MongoDB, which query is used to find documents where the "status" field is either "active" or "pending"?`,
        "options": [
          `db.collection.find({ status: "active", status: "pending" })`,
          `db.collection.find({ status: { $or: ["active", "pending"] } })`,
          `db.collection.find({ status: "active" || "pending" })`,
          `db.collection.find({ status: { $in: ["active", "pending"] } })`,
        ],
        "correctAnswer": `db.collection.find({ status: { $in: ["active", "pending"] } })`,
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "In MongoDB, what is the purpose of the $redact stage in an aggregation pipeline?",
        "options": [
          "It restricts the content of a document based on specified conditions.",
          "It reverts the order of elements in an array.",
          "It replaces specific values in a document.",
          "It calculates the difference between two fields.",
        ],
        "correctAnswer": "It restricts the content of a document based on specified conditions.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": `In SQL, what is a common use case for the "CASE" statement?`,
        "options": [
          "To create temporary tables.",
          "To filter rows based on conditions.",
          "To define the primary key.",
          "To perform conditional operations and produce calculated values.",
        ],
        "correctAnswer": "To perform conditional operations and produce calculated values.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": `What does the term "sharding" refer to in MongoDB?`,
        "options": [
          "The process of backing up data",
          "The process of splitting a large dataset across multiple servers",
          "The process of indexing documents for faster queries",
          "The process of creating nested documents",
        ],
        "correctAnswer": "The process of splitting a large dataset across multiple servers",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "In MongoDB, what is the role of an aggregation pipeline?",
        "options": [
          "To manage the database server's configuration",
          "To compress and store data efficiently",
          "To replicate data across multiple servers",
          "To transform and process data within the database",
        ],
        "correctAnswer": "To transform and process data within the database",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "What is the primary advantage of using a document-oriented database like MongoDB over a traditional relational database?",
        "options": [
          "Strict schema enforcement",
          "Support for complex joins",
          "Flexible schema design",
          "ACID compliance",
        ],
        "correctAnswer": "Flexible schema design",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Which normalization form is based on the transitive dependency?",
        "options": [
          "1NF",
          "2NF",
          "3NF",
          "BCNF",
        ],
        "correctAnswer": "3NF",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Which of the following operators is used to compare a value to a list of literal values that have been specified?",
        "options": [
          "ANY",
          "BETWEEN",
          "ALL",
          "IN",
        ],
        "correctAnswer": "BETWEEN",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "What is a table joined with itself called?",
        "options": [
          "JOIN",
          "Outer Join",
          "None",
          "Self Join",
        ],
        "correctAnswer": "Self Join",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Which of the following commands is used to delete a trigger in SQL?",
        "options": [
          "DROP",
          "DELETE",
          "ALTER",
          "NONE",
        ],
        "correctAnswer": "DROP",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "_________ command makes the updates performed by the transaction permanent in the database?",
        "options": [
          "Rollback",
          "Commit",
          "Trucate",
          "Delete",
        ],
        "correctAnswer": "Commit",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Which type of JOIN is used to returns rows that do not have matching values?",
        "options": [
          "NATURAL JOIN",
          "Equi Join",
          "Outer Join",
          "All of the above",
        ],
        "correctAnswer": "Outer Join",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Shared locks are applied while performing",
        "options": [
          "Read",
          "Write",
          "Both A & B",
          "None",
        ],
        "correctAnswer": "Read",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "Which of the following is the correct order of a SQL statement?",
        "options": [
          "SELECT, GROUP BY, WHERE, HAVING",
          "SELECT, WHERE, GROUP BY, HAVING",
          "SELECT, HAVING, WHERE, GROUP BY",
          "SELECT, WHERE, HAVING, GROUP BY",
        ],
        "correctAnswer": "SELECT, WHERE, GROUP BY, HAVING",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
    
      {
        "type": "Databases",
        "question": "What is the need for our query to execute successfully on an existing view?",
        "options": [
          "What is the need for our query to execute successfully on an existing view?",
          "The specified table must be in the same database or schema.",
          "We must have a SELECT privilege on the view.",
          "We should have a SELECT privilege only on the specified table.",
        ],
        "correctAnswer": "We must have a SELECT privilege on the view.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      }
    ]
    const selectedProgrammingQuestions = selectRandomQuestions(questions, 'Programming', 10);
    const selectedWebDevelopmentQuestions = selectRandomQuestions(questions, 'Web Development', 10);
    const selectedDatabasesQuestions = selectRandomQuestions(questions, 'Databases', 10);
    const selectedAnalyticalQuestions = selectRandomQuestions(questions, 'Analytical', 10);

    // Combine the selected questions from each type
    const combinedQuestions = [
      ...selectedAnalyticalQuestions,
      ...selectedWebDevelopmentQuestions,
      ...selectedProgrammingQuestions,
      ...selectedDatabasesQuestions,
    ];

    // Set the selected questions in the state
    setSelectedQuestions(combinedQuestions);
  }, []);

  const [results, setResults] = useState(Array(selectedQuestions.length).fill(''));
  const [score, setScore] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [displayQuestion, setDisplayQuestion] = useState(false)
  const [greatingScreenDisplay, setGreatingScreenDisplay] = useState(true)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(selectedQuestions.length).fill(''));
  const [formData, setFormData] = useState({
    fullName: 'test',
    contactNo: '1010101010',
    email: 'test@somaiya.edu',
    course: '',
    rollNo: '12121212121',
    year: '',
    error: '',
    errorMessage: '',
  })

  const { fullName, email, contactNo, rollNo, course, year, error, errorMessage } = formData

  // const screen1 = useFullScreenHandle();
  // const screen2 = useFullScreenHandle();

  // const reportChange = useCallback((state, handle) => {
  //   if (handle === screen1) {
  //     console.log('Screen 1 went to', state, handle);
  //   }
  // }, [screen1]);

  const emailRegex = /^[A-Za-z0-9._%+-]+@somaiya\.edu$/;
  const rollReg = /^(?:\d{2}([-.])\d{3}\1\d{3}\1\d{3}|\d{11})$/

  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
      // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
      if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.shiftKey === 'U'.charCodeAt(0))
      )
        return false;
    };
  }, [])



  // const handleCheckAnswer = () => {

  //   if (selectedAnswer === questions[currentQuestion].correctAnswer) {
  //     // Handle correct answer logic, e.g., increment score
  //     setScore(score + 1)
  //   } else {
  //     // Handle incorrect answer logic
  //   }

  //   // Move to the next question
  //   handleNextQuestion();
  // };

  const handleSubmit = ({ fullName, email, contactNo, rollNo, course, year }) => {
    if (rollReg.test(rollNo)) {
      if (emailRegex.test(email)) {
        if (fullName === '' || email === '' || contactNo === '' || rollNo === '' || course === '' || year === '') {
          setFormData({ ...formData, error: 'Empty Fields', errorMessage: 'All fields Required' });
        } else {
          let data = {
            rollNo: rollNo
          }
          fetch(`http://localhost:8000/api/verify-email`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(response => {
            response.json().then(r => {
              console.log(r)
              if (r.status) {
                setGreatingScreenDisplay(false)
                setDisplayQuestion(true)
              }
              if (r.status === false) {
                setFormData({ ...formData, error: 'Test Registered', errorMessage: 'Test with this Roll No already registered' });
              }
            })
          }).catch(err =>
            console.log(err)
          )
        }
      } else {
        setFormData({ ...formData, error: 'Email Invalid', errorMessage: 'Please use a Valid Somaiya Email Id' });
      }
    } else {
      setFormData({ ...formData, error: 'RollNo Invalid', errorMessage: 'Please use a Valid Roll No' });
    }
  }

  const handleChange = name => event => {
    setFormData({ ...formData, error: '', errorMessage: '', [name]: event.target.value });
  };

  const handleChangeNew = (index, selectedAnswer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleCheckAnswers = () => {
    const newResults = selectedQuestions.map((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      const type = question.type
      const isCode = question.isCode
      const codeContent = question.codeContent
      return {
        ...question,
        isCode,
        codeContent,
        type,
        selectedAnswer,
        isCorrect,
      };
    });

    setResults(newResults);
    // Calculate the score if needed
    const newScore = newResults.filter((result) => result.isCorrect).length;
    setScore(newScore);
    console.log(newScore, score)
    console.log("New Results", newResults[0])
    console.log(results)

    const data = {
      fullName: fullName,
      email: email,
      contactNo: contactNo,
      course: course,
      year: year,
      rollNo: rollNo,
      appearedResults: newResults,
      score: newScore
    }

    fetch(`http://localhost:8000/api/post-results`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      response.json().then(r => {
        console.log(r)
        if (r.success) {
          setDisplayQuestion(false)
          setSubmitSuccess(true)
        }
      })
    }).catch(err =>
      console.log(err)
    )
  };

  const duration = 3600; // 1 hour in seconds

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <div className="container-fluid" style={{ userSelect: 'none' }}>
      {/* <FullScreen handle={screen1} onChange={reportChange}> */}
      <Collapse isOpen={greatingScreenDisplay}>
        <div style={{ height: '100vh', background: 'white' }}>
          <div className='text-center display-1'>
            Test
          </div>
          <div className='container-fluid row d-flex flex-wrap justify-content-center align-items-center'>
            <div className='col-md-8 col-10 '>
              <form className='w-100'>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    value={fullName}
                    onChange={handleChange('fullName')}
                    className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    value={email}
                    onChange={handleChange('email')}
                    type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact No</label>
                  <input
                    value={contactNo}
                    onChange={handleChange('contactNo')}
                    type='tel'
                    className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Roll No (Please fill your 11 digit Roll No)</label>
                  <input
                    value={rollNo}
                    onChange={handleChange('rollNo')}
                    type='tel'
                    className="form-control" />
                </div>
                <div className='mb-3'>
                  <label className="form-label">Select Course</label>
                  <select className="form-select" onChange={handleChange('course')}>
                    <option defaultValue value=''>
                      Select Course
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="Data Science">Data Science</option>
                    <option value="BSC.IT">BSC.IT</option>
                    <option value="BSC.CS">BSC.CS</option>
                    <option value="MSC.IT">MSC.IT</option>
                    <option value="MSC.CS">MSC.CS</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className="form-label">Select Year</label>
                  <select className="form-select" onChange={handleChange('year')} >
                    <option defaultValue value=''>
                      Select Year
                    </option>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Part 1">Part 1</option>
                    <option value="Part 2">Part 2</option>
                  </select>
                </div>
                <div className='text-center'>
                  {error !== '' ? <div className='text-danger'><b>{errorMessage}</b></div> : null}
                </div>
              </form>
              <button className="btn btn-primary col-12"
                onClick={() => {
                  handleSubmit({ fullName, email, contactNo, rollNo, course, year })
                }}>Submit</button>
              {/* <button onClick={screen1.enter}>
              Enter fullscreen
            </button> */}
            </div>
          </div>
        </div>
      </Collapse>
      <Collapse isOpen={submitSuccess}>
        <div className='text-center'>
          <h1>
            THANK YOU!!
          </h1>
        </div>
      </Collapse>
      <Collapse isOpen={displayQuestion}>
        <div className='m-5 fixed-top' style={{zIndex: '-1'}}>
          <h1 className="">Quiz App</h1>
          <div>
            <CountdownCircleTimer
              isPlaying={displayQuestion}
              duration={duration}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => { handleCheckAnswers() }}
            >
              {/* {({ remainingTime }) => remainingTime} */}
              {({ remainingTime }) => formatTime(remainingTime)}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="no-select mt-5 d-flex flex-wrap justify-content-center align-items-center">
          {selectedQuestions.map((question, index) => (
            <div key={index} className='card col-md-6 col-10 m-3 p-3'>
              {question.isImage ? <div className='text-center'>
                <img src={question.image} alt='Question' />
              </div> : null}
              <p className='h4'>{index+1})</p>
              <p className="h3">{question.question}</p>
              {question.isCode ? <div>
                <pre><code>{question.codeContent}</code></pre>
              </div> : null}
              <div className="d-flex flex-wrap justify-content-around align-items-center">
                {question.options.map((option) => (
                  <li key={option} className="list-group-item col-md-4 col-12 border p-1 m-1">
                    <input
                      className=''
                      id={option}
                      type="radio"
                      name={`answer-${index}`}
                      value={option}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleChangeNew(index, option)}
                    />
                    <label className='' for={option}>{option}</label>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div align="center" className='py-5'>
          <button className="btn btn-primary" onClick={() => handleCheckAnswers()}>
            Submit
          </button>
        </div>
      </Collapse>
      {/* </FullScreen> */}
    </div>
  );
};

export default QuizApp;
