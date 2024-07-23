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
          "type": "Analytical",
          "question": "Which OOP concept allows for code reuse?",
          "options": [
              "Inheritance",
              "Polymorphism",
              "Abstraction",
              "Composition"
          ],
          "correctAnswer": "Inheritance",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which OOP concept allows for objects to be treated as if they were of a different class?",
          "options": [
              "Polymorphism",
              "Inheritance",
              "Encapsulation",
              "Type Casting"
          ],
          "correctAnswer": "Type Casting",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What data type for a constant called: PI = 3.14",
          "options": [
              "string",
              "integer",
              "float",
              "date"
          ],
          "correctAnswer": "float",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What data type to store a credit card number?",
          "options": [
              "string",
              "integer",
              "float",
              "date"
          ],
          "correctAnswer": "string",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the correct syntax to write an HTML comment?",
          "options": [
              "//",
              "/* Comment */",
              "// Comment //",
              "<!-- Comment -->"
          ],
          "correctAnswer": "<!-- Comment -->",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "HTML tags with no content are called _____.",
          "options": [
              "Special tags",
              "Advanced tags",
              "Empty tags",
              "other tags"
          ],
          "correctAnswer": "Empty tags",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "When a program is executed, the ____ interacted by sending a message to one another.",
          "options": [
              "Objects",
              "Classes",
              "Operating system",
              "Memory"
          ],
          "correctAnswer": "Objects",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "____ are the predefined words that have special significance in any language.",
          "options": [
              "Variables",
              "Data types",
              "Constant",
              "Keywords"
          ],
          "correctAnswer": "Keywords",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Under which pillar of OOPS do base class and derived class relationships come?",
          "options": [
              "Polymorphism",
              "Inheritance",
              "Encapsulation",
              "Type Casting"
          ],
          "correctAnswer": "Inheritance",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Choose the incorrect option below which is not a type of constructor.",
          "options": [
              "Copy constructor",
              "Friend constructor",
              "Parameterized constructor",
              "Default constructor"
          ],
          "correctAnswer": "Friend constructor",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the result of 0110 & 1100?",
          "options": [
              "1000",
              "100",
              "",
              "1010"
          ],
          "correctAnswer": "100",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Left Shift operation is equivalent to __________",
          "options": [
              "Division by 2",
              "Multiplying by 2",
              "Adding 2",
              "Subtrating 2"
          ],
          "correctAnswer": "Multiplying by 2",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which of the following is a symbol for logical AND operator?",
          "options": [
              "||",
              "&",
              "&&",
              "##"
          ],
          "correctAnswer": "&&",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Right Shift operation >> is equivalent to _________",
          "options": [
              "Multiplying by 2",
              "Division by 2",
              "Adding 2",
              "Subtracting 2"
          ],
          "correctAnswer": "Division by 2",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which one is used for class selector in CSS?",
          "options": [
              ".",
              "$",
              "#",
              "%"
          ],
          "correctAnswer": ".",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the correct syntax for font size?",
          "options": [
              "font size: 14px;",
              "font-size: 14px;",
              "font_size: 14px;",
              "FontSize: 14px;"
          ],
          "correctAnswer": "font-size: 14px;",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "In digital electronics, what does \"BCD\" stand for?",
          "options": [
              "Binary Code Decimal",
              "Binary Coded Decimal",
              "Bit Code Decimal",
              "Byte Coded Decimal"
          ],
          "correctAnswer": "Binary Coded Decimal",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "The for statement     for(expr1;expr2;expr3) is equivalent to",
          "options": [
              "while(expr1==expr2)\n{ statement;expr3;}",
              "while(expr1!=expr2)\n{ statement;expr3;}",
              "expr1; \nwhile(expr2)\n{ statement;expr3;}",
              "while(expr1=expr2)\n{ statement;expr3;}\""
          ],
          "correctAnswer": "expr1;\nwhile(expr2)\n{ statement;expr3;}",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the 2's complement of the binary number 0101?",
          "options": [
              "1010",
              "1101",
              "1011",
              "1111"
          ],
          "correctAnswer": "1011",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the purpose of a latch in digital electronics?",
          "options": [
              "To store a single bit of data",
              "To perform arithmetic operations",
              "To decode binary numbers",
              "To invert the input signal"
          ],
          "correctAnswer": "To store a single bit of data",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What does De Morgan's first theorem state?",
          "options": [
              "(A + B)' = A' + B'",
              "(A + B)' = A'B'",
              "(AB)' = A' + B'",
              "(AB)' = A'B'"
          ],
          "correctAnswer": "(AB)' = A' + B'",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which property is used to define the text color?",
          "options": [
              "text-color",
              "color",
              "font-color",
              "fontcolor"
          ],
          "correctAnswer": "color",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which law states that A + A = A?",
          "options": [
              "Identity Law",
              "Idempotent Law",
              "Complement Law",
              "Distributive Law"
          ],
          "correctAnswer": "Idempotent Law",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which company developed JavaScript?",
          "options": [
              "Netscape",
              "Microsoft",
              "Sun Microsystems",
              "IBM"
          ],
          "correctAnswer": "Netscape",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the correct syntax for referring to an external script called \"script.js\"?",
          "options": [
              "<script href=\"script.js\">",
              "<script name=\"script.js\">",
              "<script src=\"script.js\">",
              "<script link=\"script.js\">"
          ],
          "correctAnswer": "<script src=\"script.js\">",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which CSS property is used to specify uppercase and lowercase letters in a text?",
          "options": [
              "text-transform",
              "text-case",
              "case",
              "text-casing"
          ],
          "correctAnswer": "text-transform",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is the correct way to write a JavaScript array?",
          "options": [
              "let colors = \"red\", \"green\", \"blue\";",
              "let colors = (1:\"red\", 2:\"green\", 3:\"blue\");",
              "let colors = [\"red\", \"green\", \"blue\"];",
              "let colors = {\"red\", \"green\", \"blue\"};"
          ],
          "correctAnswer": "let colors = [\"red\", \"green\", \"blue\"];",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which CSS property specifies if/how an element is displayed?",
          "options": [
              "block",
              "display",
              "element-display",
              "element-block"
          ],
          "correctAnswer": "display",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which object is the top of the scope chain in JavaScript?",
          "options": [
              "window",
              "document",
              "global",
              "scope"
          ],
          "correctAnswer": "window",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which operator is used for exponentiation in JavaScript?",
          "options": [
              "**",
              "^",
              "exp",
              "pow"
          ],
          "correctAnswer": "**",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which of the following is not an example of DBMS?",
          "options": [
              "MySQL",
              "Microsoft Acess",
              "IBM DB2",
              "Google"
          ],
          "correctAnswer": "Google",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What will the following code output? console.log(\"5\" + 3);",
          "options": [
              "\"53\"",
              "8",
              "5",
              "\"8\""
          ],
          "correctAnswer": "\"53\"",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which method converts a JSON string into a JavaScript object?",
          "options": [
              "JSON.parse()",
              "JSON.stringify()",
              "JSON.convert()",
              "JSON.toObject()"
          ],
          "correctAnswer": "JSON.parse()",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is ACID properties of DBMS Tranactions?",
          "options": [
              "Atomicity,Consistency,Isolation,Durability",
              "Atomicity,Consistency,Isolation,Database",
              "Atomicity,Consistency,Inconsistent,Durability",
              "Available,Consistency,Isolation,Durability"
          ],
          "correctAnswer": "Atomicity,Consistency,Isolation,Durability",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Select the wrong class.",
          "options": [
              "CLASS A = 1 to 126",
              "CLASS C = 192 to 220",
              "CLASS B = 128 to 191",
              "CLASS D = 224 to 239"
          ],
          "correctAnswer": "CLASS C = 192 to 220",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What does RAD stand for in software engineering?",
          "options": [
              "Real-time Application Development",
              "Rapid Application Development",
              "Rational Application Design",
              "Rapid Algorithm Design"
          ],
          "correctAnswer": "Rapid Application Development",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which type of testing is performed without any knowledge of the internal workings of the application?",
          "options": [
              "White-box testing",
              "Black-box testing",
              "Integration testing",
              "Unit testing"
          ],
          "correctAnswer": "Black-box testing",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which device is used to connect different network segments in a computer network?",
          "options": [
              "Repeater",
              "Router",
              "Bridge",
              "Modem"
          ],
          "correctAnswer": "Router",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "Which layer of the OSI model ensures the error-free transmission of data?",
          "options": [
              "Physical Layer",
              "Data Link Layer",
              "Network Layer",
              "Transport Layer"
          ],
          "correctAnswer": "Data Link Layer",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      },
      {
          "type": "Analytical",
          "question": "What is a Gantt chart used for in project management?",
          "options": [
              "To write code",
              "To design system architecture",
              "To schedule and track project tasks",
              "To document requirements"
          ],
          "correctAnswer": "To schedule and track project tasks",
          "isCode": false,
          "codeContent": "",
          "isImage": false,
          "image": ""
      }
  ]

    const selectedProgrammingQuestions = selectRandomQuestions(questions, 'Analytical', 20);
    // const selectedWebDevelopmentQuestions = selectRandomQuestions(questions, 'Web Development', 10);
    // const selectedDatabasesQuestions = selectRandomQuestions(questions, 'Databases', 10);
    // const selectedAnalyticalQuestions = selectRandomQuestions(questions, 'Analytical', 10);

    // Combine the selected questions from each type
    const combinedQuestions = [
      // ...selectedAnalyticalQuestions,
      // ...selectedWebDevelopmentQuestions,
      ...selectedProgrammingQuestions,
      // ...selectedDatabasesQuestions,
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

  const duration = 1200; // 1 hour in seconds

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
