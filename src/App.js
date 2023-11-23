import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Collapse } from 'reactstrap'
// import { FullScreen, useFullScreenHandle } from "react-full-screen";

const QuizApp = () => {
  const questions = [
    {
      "type": "Programming",
      "question": "What is the capital of Italy?",
      "options": ["Rome", "Milan", "Venice", "Florence"],
      "correctAnswer": "Rome",
      "isCode": true,
      "codeContent": `SELECT customers.customer_name, orders.order_date
FROM customers
JOIN orders ON customers.customer_id = orders.customer_id
WHERE YEAR(orders.order_date) = 2022
ORDER BY customers.customer_name;`,
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Web Development",
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Mars",
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Web Development",
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Mars",
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Programming",
      "question": "What is the largest mammal on Earth?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "correctAnswer": "Blue Whale",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Programming",
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "options": ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
      "correctAnswer": "William Shakespeare",
      "isCode": true,
      "codeContent": `javascript\nnumbers = [1, 2, 3, 4, 5]\nsquared = [num ** 2 for num in numbers]\n`,
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Web Development",
      "question": "What is the chemical symbol for gold?",
      "options": ["Go", "Gl", "Au", "Ag"],
      "correctAnswer": "Au",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Programming",
      "question": "Which gas do plants absorb from the atmosphere?",
      "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      "correctAnswer": "Carbon Dioxide",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Databases",
      "question": "What is the largest organ in the human body?",
      "options": ["Calculates the sum of all even numbers in the list.",
        "Calculates the sum of all even numbers in the list.",
        "Calculates the sum of all even numbers in the list.",
        "Calculates the sum of all even numbers in the list."],
      "correctAnswer": "Skin",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Databases",
      "question": "Who painted the 'Mona Lisa'?",
      "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      "correctAnswer": "Leonardo da Vinci",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
      "isImage": true,
      "image": require('./assets/logo512.png')
    },
    {
      "type": "Anaytical",
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "South Korea", "Thailand"],
      "correctAnswer": "Japan",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Databases",
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "CH4"],
      "correctAnswer": "H2O",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Anaytical",
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "South Korea", "Thailand"],
      "correctAnswer": "Japan",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    },
    {
      "type": "Anaytical",
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "CH4"],
      "correctAnswer": "H2O",
      "isCode": true,
      "codeContent": `let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}`,
    }
  ]

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState('');
  // const [remainingQuesTime, setRemainingQuesTime] = useState(questions[currentQuestion].time);
  const [results, setResults] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [displayQuestion, setDisplayQuestion] = useState(false)
  const [greatingScreenDisplay, setGreatingScreenDisplay] = useState(true)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [formData, setFormData] = useState({
    fullName: 'test',
    contactNo: '0000000000',
    email: 'test@somaiya.edu',
    course: '',
    rollNo: '77777777777',
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
          fetch(`https://devsemble.com/api/verify-email`, {
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
    const newResults = questions.map((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      const type = question.type
      return {
        ...question,
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

    fetch(`https://devsemble.com/api/post-results`, {
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
                    <option value="BSC.IT">BSC.IT</option>
                    <option value="MSC.IT">MSC.IT</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className="form-label">Select Year</label>
                  <select className="form-select" onChange={handleChange('year')} >
                    <option defaultValue value=''>
                      Select Year
                    </option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
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
        <h1 className="mt-5">Quiz App</h1>
        {score}
        <div>
          <CountdownCircleTimer
            isPlaying={displayQuestion}
            duration={6000}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => { handleCheckAnswers() }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
        <div className="no-select mt-5 d-flex flex-wrap justify-content-center align-items-center">
          {questions.map((question, index) => (
            <div key={index} className='card col-md-6 col-10 m-3 p-3'>
              {question.isImage ? <div className='text-center'>
                <img src={question.image} alt='Question' />
              </div> : null}
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
