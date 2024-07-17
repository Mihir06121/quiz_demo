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

    const questions = [
      {
        "type": "Databases",
        "question": "Which SQL clause is used to filter the rows returned by a query?",
        "options": ["WHERE", "SELECT", "GROUP BY", "FILTER BY"],
        "correctAnswer": "WHERE",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following is a valid SQL statement to create a new table?",
        "options": ["CREATE NEW TABLE table_name (column1 datatype, column2 datatype);", "CREATE TABLE table_name (column1 datatype, column2 datatype);", "CREATE DATABASE table_name (column1 datatype, column2 datatype);", "CREATE NEW table_name (column1 datatype, column2 datatype);"],
        "correctAnswer": "CREATE TABLE table_name (column1 datatype, column2 datatype);",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Imagine a library database with two tables related by authors and their books.Which type of join would you use to find all book titles in the library, along with the names of the authors who wrote them? If a book doesn't have an assigned author yet, you want to include the book title and 'Unknown Author' in the results.",
        "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        "correctAnswer": "LEFT JOIN",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following use cases is best suited for a NoSQL database?",
        "options": ["Banking systems requiring strong consistency", "E-commerce platforms with complex relational data", "Real-time analytics with large volumes of unstructured data", "ERP systems with structured data and complex queries"],
        "correctAnswer": "Real-time analytics with large volumes of unstructured data",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "What is the primary purpose of indexing in databases?",
        "options": ["To ensure data integrity", "To improve query performance", "To enforce foreign keys", "To back up data"],
        "correctAnswer": "To improve query performance",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following is a correct MongoDB query to find all documents in a collection named 'products' where the 'price' is greater than 100?",
        "options": ["db.products.find({ price: { $gt: 100 } })", "db.products.findAll({ price: { $gt: 100 } })", "db.products.search({ price: { $gt: 100 } })", "db.products.query({ price: { $gt: 100 } })"],
        "correctAnswer": "db.products.find({ price: { $gt: 100 } })",
        "isCode": true,
        "codeContent": "db.products.find({ price: { $gt: 100 } })",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which keyword is used in SQL to sort the result set?",
        "options": ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
        "correctAnswer": "ORDER BY",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "In a relational database, what is a primary key?",
        "options": ["A unique identifier for each record in a table", "A field that allows null values", "A field that links two tables together", "A field used for sorting data"],
        "correctAnswer": "A unique identifier for each record in a table",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "What does ACID stand for in the context of database transactions?",
        "options": ["Accuracy, Consistency, Integrity, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Integrity, Durability", "Accuracy, Consistency, Indexing, Dictionary"],
        "correctAnswer": "Atomicity, Consistency, Isolation, Durability",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following SQL commands is used to modify existing records in a table?",
        "options": ["ALTER", "MODIFY", "UPDATE", "CHANGE"],
        "correctAnswer": "UPDATE",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "What is the purpose of the transaction management module in a DBMS?",
        "options": ["To ensure data consistency and integrity", "To handle input/output operations", "To manage file storage", "To provide concurrency control and recovery mechanisms, ensuring the ACID properties of transactions"],
        "correctAnswer": "To ensure data consistency and integrity",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which type of database is typically used for applications requiring complex transactions and ACID compliance?",
        "options": ["NoSQL", "SQL", "Key-value store", "Document store"],
        "correctAnswer": "SQL",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "In which scenario is a NoSQL database more appropriate than a SQL database?",
        "options": ["When data is highly relational and structured", "When flexible schema design is required", "When strict ACID transactions are necessary", "When complex SQL queries and joins are needed"],
        "correctAnswer": "When flexible schema design is required",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following is a characteristic of NoSQL databases?",
        "options": ["Fixed schema", "Highly structured data", "Flexible schema", "Requires complex joins"],
        "correctAnswer": "Flexible schema",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "In MongoDB, which data format is used to store documents?",
        "options": ["XML", "JSON", "CSV", "YAML"],
        "correctAnswer": "JSON",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Database Management Systems",
        "question": "Consider a collection named products that stores information about products in a store. The collection has documents with fields like name, price, and category.\n Query: ",
        "options": [
          "{ \"name\": \"Hat\", \"price\": 8 }{ \"name\": \"Shirt\", \"price\": 15 }{ \"name\": \"Trousers\", \"price\": 20 }",
          "{ \"_id\": \"prod1\", \"name\": \"Shirt\", \"price\": 15 }{ \"_id\": \"prod3\", \"name\": \"Trousers\", \"price\": 20 }",
          "{ \"name\": \"Shirt\", \"price\": 15, \"category\": \"Clothing\" }{ \"name\": \"Hat\", \"price\": 8, \"category\": \"Accessories\" } { \"name\": \"Trousers\", \"price\":20, \"category\": \"Clothing\" }{ \"name\": \"Scarf\", \"price\": 5, \"category\": \"Accessories\" }",
          "{ \"name\": \"Shirt\", \"price\": 15 }{ \"name\": \"Trousers\", \"price\": 20 }"
        ],
        "correctAnswer": "{ \"name\": \"Shirt\", \"price\": 15 }{ \"name\": \"Trousers\", \"price\": 20 }",
        "isCode": true,
        "codeContent": "db.products.find({ price: { $gt: 10 } }, { name: 1, price: 1 }).sort({ price: 1 });\n Data:{ \"_id\": \"prod1\", \"name\": \"Shirt\", \"price\": 15, \"category\": \"Clothing\" }\n { \"_id\": \"prod2\", \"name\": \"Hat\", \"price\": 8, \"category\": \"Accessories\" }\n { \"_id\": \"prod3\", \"name\": \"Trousers\", \"price\": 20, \"category\": \"Clothing\" }\n { \"_id\": \"prod4\", \"name\": \"Scarf\", \"price\": 5, \"category\": \"Accessories\" }",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "Which of the following is a property of a 'transaction' in a DBMS?",
        "options": ["It can be divided into smaller parts", "It must be completed entirely or not at all", "It is not recoverable in case of a failure", "It does not ensure data consistency"],
        "correctAnswer": "It must be completed entirely or not at all",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "The DBMS acts as an interface between ________________ and ________________ of an enterprise-class system.",
        "options": ["Data and the DBMS", "Application and SQL", "Database application and the database", "The user and the software"],
        "correctAnswer": "Database application and the database",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "For designing a normal RDBMS which of the following normal form is considered adequate?",
        "options": ["4NF", "3NF", "2NF", "5NF"],
        "correctAnswer": "3NF",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Databases",
        "question": "A system is in a ______ state if there exists a set of transactions such that every transaction in the set is waiting for another transaction in the set.",
        "options": ["Idle", "Waiting", "Deadlock", "Ready"],
        "correctAnswer": "Deadlock",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },

      {
        "type": "Analytical",
        "question": "Which number should come next in the series: 2, 3, 5, 8, 12, 17, ...?",
        "options": ["21", "23", "24", "25"],
        "correctAnswer": "23",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A man walks 5 km north, then turns right and walks 3 km. Then, he turns left and walks 2 km. Finally, he turns left again and walks 3 km. How far is he from the starting point?",
        "options": ["5 km", "6 km", "7 km", "8 km"],
        "correctAnswer": "5 km",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?",
        "options": ["Father", "Brother", "Uncle", "Grandfather"],
        "correctAnswer": "Uncle",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Pointing to a photograph, a woman says, This man's son's sister is my mother-in-law. How is the woman's husband related to the man in the photograph?",
        "options": ["Grandson", "Son", "Son-in-law", "Grandfather"],
        "correctAnswer": "Grandson",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Complete the series: 3, 9, 27, ?, 243",
        "options": ["54", "81", "72", "108"],
        "correctAnswer": "81",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If South-East becomes North, North-East becomes West and so on, what will West become?",
        "options": ["North-East", "North-West", "South-East", "South-West"],
        "correctAnswer": "South-East",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If A + B means A is the sister of B; A - B means A is the brother of B; A * B means A is the daughter of B, then what does P * Q - R mean?",
        "options": ["P is the daughter of Q and Q is the brother of R", "P is the sister of Q and Q is the brother of R", "P is the daughter of Q and Q is the sister of R", "P is the daughter of Q and Q is the daughter of R"],
        "correctAnswer": "P is the daughter of Q and Q is the brother of R",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "If 'X' means '+' and '/' means '-', what is the value of 20 X 5 / 2?",
        "options": ["25", "10", "30", "23"],
        "correctAnswer": "23",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A clock shows the time as 3:30. What will be the angle between the minute hand and the hour hand?",
        "options": ["65 degrees", "75 degrees", "90 degrees", "105 degrees"],
        "correctAnswer": "75 degrees",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In a class of 60 students, the average age is 12 years. The average age of 25 girls is 11 years. What is the average age of the boys?",
        "options": ["12 years", "13 years", "14 years", "15 years"],
        "correctAnswer": "13 years",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which one of the following is not a leap year?",
        "options": ["1600", "1992", "1700", "2016"],
        "correctAnswer": "1700",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A train running at a speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "options": ["120 meters", "150 meters", "180 meters", "200 meters"],
        "correctAnswer": "150 meters",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Tom puts on his socks before he puts on his shoes. He puts on his shirt before he puts on his jacket. Tom puts on his shoes before he puts on his shirt. If the first two statements are true, the third statement is",
        "options": ["true", "false", "cannot be determined"],
        "correctAnswer": "cannot be determined",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Fact 1: Robert has four vehicles. Fact 2: Two of the vehicles are red. Fact 3: One of the vehicles is a minivan. If the first three statements are facts, which of the following statements must also be a fact? I: Robert has a red minivan. II: Robert has three cars. III: Robert's favorite color is red.",
        "options": ["I only", "II only", "II and III only", "None of the statements is a known fact."],
        "correctAnswer": "None of the statements is a known fact.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Two criminals (C1 and C2) and two police officers (P1 and P2) need to cross a river on a small raft that can only hold a maximum of two people at a time. They cannot leave a criminal alone without a police officer on either side of the river for security reasons. What is the minimum number of one-way trips the raft needs to make to safely transport all four people across the river, following the safety rule?",
        "options": ["3 trips", "4 trips", "5 trips", "6 trips"],
        "correctAnswer": "5 trips",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "When my parents married their age was in a ratio 11:10 (father’s age : mother’s age). This year they celebrated their 15th anniversary. If the total of their ages at their silver jubilee anniversary will be 113, find my father’s age now.",
        "options": ["40 years", "33 years", "48 years", "42 years"],
        "correctAnswer": "48 years",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "T and E are sisters. The ratio of their ages when their brother was born was 6:5. The ratio of their ages when their brother was 12 years was 10:9. Find the age of T when her brother got married at the age of 28.",
        "options": ["45, 42 years", "44, 41 years", "46, 43 years", "47, 44 years"],
        "correctAnswer": "46, 43 years",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A tech company has 8 open positions - 2 in software engineering, 3 in data analysis, and 3 in project management. If the company can only hire 5 people, how many unique hiring combinations are possible?",
        "options": ["45", "36", "55", "27"],
        "correctAnswer": "36",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A computer science student needs to take 6 core courses and 4 elective courses from a list of 10 core courses and 8 elective courses. How many unique course schedules are possible?",
        "options": ["280", "5,040", "3,360", "14,700"],
        "correctAnswer": "14,700",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A bag contains 5 red balls, 3 green balls, and 2 blue balls. Two balls are randomly drawn from the bag without replacement. What is the probability that the two balls drawn are of different colors?",
        "options": ["3/5", "7/10", "4/5", "9/10"],
        "correctAnswer": "9/10",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },

      {
        "type": "Web Development",
        "question": "What is the purpose of the return statement?",
        "options": ["To terminate the program", "To pass control back to the calling function", "To print output to the screen", "To declare a variable"],
        "correctAnswer": "To pass control back to the calling function",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Which of the following is not a data type in JavaScript?",
        "options": ["String", "Number", "Boolean", "Character"],
        "correctAnswer": "Character",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What is the output of the following JavaScript code?",
        "options": ["null", "undefined", "object", "number"],
        "correctAnswer": "object",
        "isCode": true,
        "codeContent": "console.log(typeof(null));",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What does AJAX stand for?",
        "options": ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Application JavaScript and XML", "Asynchronous JSON and XML"],
        "correctAnswer": "Asynchronous JavaScript and XML",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Which method is used to write HTML output in JavaScript?",
        "options": ["document.write()", "console.log()", "window.alert()", "document.output()"],
        "correctAnswer": "document.write()",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What is the result of the following code?",
        "options": ["a = 6, b = 12", "a = 7, b = 11", "a = 7, b = 12", "a = 6, b = 11"],
        "correctAnswer": "a = 7, b = 12",
        "isCode": true,
        "codeContent": "int a = 5; int b = ++a + a++;",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What is the primary advantage of a B-tree over a binary search tree?",
        "options": ["Faster insertion", "Better memory utilization", "Balances itself automatically", "More efficient for large data sets stored on disk"],
        "correctAnswer": "More efficient for large data sets stored on disk",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What is the output of the following code? If x has the value 30 and y has the value 8, which one of the following is the output resulting from this code executing?",
        "options": ["one", "one two four", "one two", "one two three four"],
        "correctAnswer": "one two",
        "isCode": true,
        "codeContent": "if (x > 10) {\n  print(\"one\");\n  if (y < 10) {\n      print(\"two\");\n  }\n}\nif (x < 20) {\n  print(\"three\");\n  if (y > 5) {\n     print(\"four\");\n  }\n}",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["120", "150", "155", "180"],
        "correctAnswer": "180",
        "isCode": true,
        "codeContent": "x = 5\n\t\t\ty = x * (x + 1)\n\t\t\tz = x * y + y\n\t\t\tprint(z)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["1 2", "2 1", "Error", "Undefined"],
        "correctAnswer": "2 1",
        "isCode": true,
        "codeContent": "a = 1\n\t\tb = 2\n\t\ta, b = b, a\n\t\tprint(a, b)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        "correctAnswer": "[1, 2, 3, 4]",
        "isCode": true,
        "codeContent": "a = [1, 2, 3]\n\t\tb = a\n\t\tb.append(4)\n\t\tprint(a)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Find the output.",
        "options": ["-8 -125", "8 125", "4 25", "8 1 0 27 125"],
        "correctAnswer": "-8 -125",
        "isCode": true,
        "codeContent": "def print_numbers(numbers):\n    for num in numbers:\n        if num < 0:\n            print(num * num * num)\n\nnumbers = [-2, 1, 0, 3, -5]\nprint_numbers(numbers)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following Java code?",
        "options": ["ArrayIndexOutOfBoundsException", "NullPointerException", "Syntax error", "No error"],
        "correctAnswer": "ArrayIndexOutOfBoundsException",
        "isCode": true,
        "codeContent": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = new int[5];\n        System.out.println(arr[5]);\n    }\n}",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What is the error in the following code?",
        "options": ["Missing semicolon", "Syntax error", "Variable sum is not initialized", "No error"],
        "correctAnswer": "Syntax error",
        "isCode": true,
        "codeContent": "public class Main {\n    public static void main(String[] args) {\n       int a = 10;\n       int b = 20;\n       int sum = a + b;\n       System.out.println(\"Sum: \" + sum);\n    }\n}",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["14", "15", "16", "Undefined"],
        "correctAnswer": "15",
        "isCode": true,
        "codeContent": "int a = 5;\nint b = 10;\nint c = a + b++;\nSystem.out.println(c);",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["2 1 3", "1 2 3", "2 2 3", "2 1 4"],
        "correctAnswer": "2 1 4",
        "isCode": true,
        "codeContent": "int a = 1;\nint b = 2;\nint c = ++a + b--;\nSystem.out.println(a + \"\\t\" + b + \"\\t\" + c);",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["40", "41", "44", "43"],
        "correctAnswer": "44",
        "isCode": true,
        "codeContent": "int a = 10;\nint b = a++ + ++a + --a + a--;\nSystem.out.println(b);",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "What will be the output of the following code?",
        "options": ["4 2 2", "5 2 2", "4 3 2", "4 2 1"],
        "correctAnswer": "4 2 2",
        "isCode": true,
        "codeContent": "int a = 5;\nint b = 3;\nint c = a-- - --b;\nSystem.out.println(a + \" \" + b + \" \" + c);",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Find the error in the following code.",
        "options": ["Function definition is missing a colon (:)", "Function is missing a return statement", "Variable result is not defined inside the function", "Non of the above"],
        "correctAnswer": "Non of the above",
        "isCode": true,
        "codeContent": "def calculate_area(length, width):\n    area = length * width\n    return area\n\nresult = calculate_area(5, 3)\nprint(\"Area:\", result)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Find the output of the following code.",
        "options": ["Prints all numbers in the list", "Prints all even numbers in the list, doubled", "Prints all odd numbers in the list, doubled", "Prints the sum of all even numbers"],
        "correctAnswer": "Prints all odd numbers in the list, doubled",
        "isCode": true,
        "codeContent": "numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    if num % 2 != 0:\n        print(num * 2)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Find the error in the following code.",
        "options": ["String slicing is incorrect for reversal", "Missing variable declaration for reversed_string", "Should use a loop to iterate through the string", "None of the above"],
        "correctAnswer": "None of the above",
        "isCode": true,
        "codeContent": "my_string = \"Hello World!\"\nreversed_string = my_string[::-1]\nprint(reversed_string)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Web Development",
        "question": "Find the output of the following code.",
        "options": ["Prints \"X is greater\"", "Prints \"Y is greater or equal\"", "Throws an error", "Prints nothing"],
        "correctAnswer": "Prints \"Y is greater or equal\"",
        "isCode": true,
        "codeContent": "x = 10\ny = 20\n\nif x > y:\n    print(\"X is greater\")\nelse:\n    print(\"Y is greater or equal\")",
        "isImage": false,
        "image": ""
      },

      {
        "type": "Programming",
        "question": "Which of the following is a non-preemptive CPU scheduling algorithm?",
        "options": ["First Come First Serve (FCFS)", "Round Robin (RR)", "Shortest Job Next (SJN)", "Longest Remaining Time (LRT)"],
        "correctAnswer": "Longest Remaining Time (LRT)",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Which of the following is a characteristic of a real-time operating system?",
        "options": ["High throughput", "Predictable response times", "User-friendly interface", "Extensive multitasking"],
        "correctAnswer": "Predictable response times",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is a deadlock in an operating system?",
        "options": ["A situation where two or more processes are unable to proceed because each is waiting for the other to release a resource", "A process that has terminated", "A type of interrupt", "A memory management technique"],
        "correctAnswer": "A situation where two or more processes are unable to proceed because each is waiting for the other to release a resource",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What does the term 'paging' refer to in the context of Programming?",
        "options": ["Dividing the physical memory into fixed-size blocks", "Dividing the logical memory into fixed-size blocks", "Moving processes from primary memory to secondary memory", "A type of process scheduling"],
        "correctAnswer": "Dividing the logical memory into fixed-size blocks",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Which command is used to give file execution rights in a Linux system?",
        "options": ["chmod -x", "chmod +x", "chmod+x", "chmod-x"],
        "correctAnswer": "chmod +x",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Which of the following is not a type of operating system architecture?",
        "options": ["Microkernel", "Monolithic kernel", "Hybrid kernel", "Macro kernel"],
        "correctAnswer": "Macro kernel",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the main purpose of the bootloader in an operating system?",
        "options": ["To load the operating system into memory at startup", "To manage user accounts", "To handle system errors", "To manage file systems"],
        "correctAnswer": "To load the operating system into memory at startup",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the function of the swap space in an operating system?",
        "options": ["To extend the physical memory by using disk space", "To store temporary files", "To manage network traffic", "To handle device drivers"],
        "correctAnswer": "To extend the physical memory by using disk space",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the main purpose of a system call in an operating system?",
        "options": ["To manage the execution of processes", "To provide a way for user programs to request services from the kernel", "To allocate and deallocate memory for processes", "To handle interrupts from hardware devices"],
        "correctAnswer": "To provide a way for user programs to request services from the kernel",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the primary purpose of synchronization in concurrent programming?",
        "options": ["To increase the execution speed of processes", "To prevent race conditions", "To allocate memory efficiently", "To improve the user interface"],
        "correctAnswer": "To prevent race conditions",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Which of the following is a synchronization mechanism used in multithreading?",
        "options": ["Semaphore", "Thread", "Fork", "Join"],
        "correctAnswer": "Semaphore",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "In a producer-consumer problem, which synchronization mechanism can be used to ensure proper execution?",
        "options": ["Mutexes", "Semaphores", "Monitors", "All of the above"],
        "correctAnswer": "All of the above",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the purpose of a mutex in concurrent programming?",
        "options": ["To speed up the execution of processes", "To allocate resources to processes", "To ensure that only one thread accesses a critical section at a time", "To synchronize the execution of different programs"],
        "correctAnswer": "To ensure that only one thread accesses a critical section at a time",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is the main difference between TCP and UDP?",
        "options": ["TCP is connectionless, UDP is connection-oriented", "TCP is connection-oriented, UDP is connectionless", "TCP provides unreliable data transfer, UDP provides reliable data transfer", "TCP is used for streaming media, UDP is used for web browsing"],
        "correctAnswer": "TCP is connection-oriented, UDP is connectionless",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Message passing system allows processes to __________",
        "options": ["communicate with each other without sharing the same address space", "communicate with one another by resorting to shared data", "share data", "name the recipient or sender of the message"],
        "correctAnswer": "communicate with each other without sharing the same address space",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "The Dining Philosophers problem highlights the need for synchronization in Programming. Traditionally, a solution involves ensuring only one philosopher picks up both chopsticks at a time. In an alternative approach, which statement is most likely to prevent deadlocks without restricting access to both chopsticks simultaneously?",
        "options": ["Each philosopher always picks up the left chopstick first.", "Each philosopher picks up the chopsticks closest to them first.", "Philosophers can only eat if their neighbors are thinking.", "A designated philosopher always has priority to access the chopsticks."],
        "correctAnswer": "Each philosopher always picks up the left chopstick first.",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What will happen if a non-recursive mutex is locked more than once?",
        "options": ["Starvation", "Deadlock", "Aging", "Signaling"],
        "correctAnswer": "Deadlock",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "Semaphores are mostly used to implement __________",
        "options": ["System calls", "IPC (Inter Process Communication) mechanisms", "System protection", "None of the mentioned"],
        "correctAnswer": "IPC (Inter Process Communication) mechanisms",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "A process is thrashing if __________",
        "options": ["it is spending more time paging than executing", "it is spending less time paging than executing", "page fault occurs", "swapping cannot take place"],
        "correctAnswer": "it is spending more time paging than executing",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "The data structure used for file directory is called __________",
        "options": ["mount table", "hash table", "file table", "process table"],
        "correctAnswer": "hash table",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "If we preempt a resource from a process, the process cannot continue with its normal execution and it must be __________",
        "options": ["aborted", "rolled back", "terminated", "queued"],
        "correctAnswer": "rolled back",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "What is an interrupt vector?",
        "options": ["It is an address that is indexed to an interrupt handler", "It is a unique device number that is indexed by an address", "It is a unique identity given to an interrupt", "None of the mentioned"],
        "correctAnswer": "It is an address that is indexed to an interrupt handler",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Programming",
        "question": "A parent process calling _____ system call will be suspended until children processes terminate.",
        "options": ["wait", "fork", "exit", "exec"],
        "correctAnswer": "wait",
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
    fullName: '',
    contactNo: '',
    email: '',
    course: '',
    rollNo: '',
    year: '',
    error: '',
    errorMessage: '',
  })

  const { fullName, email, contactNo, rollNo, course, year, error, errorMessage } = formData

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

  const handleSubmit = ({ fullName, email, contactNo, rollNo, course, year }) => {
    console.log({ fullName, email, contactNo, rollNo, course, year })
    if (rollReg.test(rollNo)) {
      if (emailRegex.test(email)) {
        if (fullName === '' || email === '' || contactNo === '' || rollNo === '' || course === '' || year === '') {
          setFormData({ ...formData, error: 'Empty Fields', errorMessage: 'All fields Required' });
        } else {
          let data = {
            rollNo: rollNo
          }
          fetch(`https://attendease-sksc.somaiya.edu/api_v1/verify-email`, {
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

    fetch(`https://attendease-sksc.somaiya.edu/api_v1/post-results`, {
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
            Developers-Cell Test
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
        <div className='m-5 fixed-top' style={{ zIndex: '-1' }}>
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
              <p className='h4'>{index + 1})</p>
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
                    <label style={{ wordBreak: 'break-word' }} className='' for={option}>{option}</label>
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
