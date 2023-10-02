import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {Collapse} from 'reactstrap'
const QuizApp = () => {
  const questions = [
    {
      "question": "What is the capital of Italy?",
      "options": ["Rome", "Milan", "Venice", "Florence"],
      "correctAnswer": "Rome"
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Venus", "Mars", "Jupiter", "Saturn"],
      "correctAnswer": "Mars"
    },
    {
      "question": "What is the largest mammal on Earth?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "correctAnswer": "Blue Whale"
    },
    {
      "question": "Who wrote the play 'Romeo and Juliet'?",
      "options": ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
      "correctAnswer": "William Shakespeare"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": ["Go", "Gl", "Au", "Ag"],
      "correctAnswer": "Au"
    },
    {
      "question": "Which gas do plants absorb from the atmosphere?",
      "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      "correctAnswer": "Carbon Dioxide"
    },
    {
      "question": "What is the largest organ in the human body?",
      "options": ["Liver", "Heart", "Skin", "Lungs"],
      "correctAnswer": "Skin"
    },
    {
      "question": "Who painted the 'Mona Lisa'?",
      "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      "correctAnswer": "Leonardo da Vinci"
    },
    {
      "question": "Which country is known as the Land of the Rising Sun?",
      "options": ["China", "Japan", "South Korea", "Thailand"],
      "correctAnswer": "Japan"
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "CH4"],
      "correctAnswer": "H2O"
    }
  ]
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
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
    email: 'test@gmail.com',
    course: '',
    year:'',
    error: '',
    errorMessage: '',
  })

  const {fullName, email, contactNo, course, year, error, errorMessage} = formData

  const emailRegex = /\S+@\S+\.\S+/;

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

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      // startTimer();
    }
  };

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

  const handleSubmit = ({fullName, email, contactNo, course, year}) => {
    if (emailRegex.test(email)) {
      if (fullName === ''|| email === '' || contactNo === '' || course === '' || year === '') {
        setFormData({ ...formData, error: 'Empty Fields', errorMessage: 'All fields Required' });
      } else {
        setGreatingScreenDisplay(false)
        setDisplayQuestion(true)
      }
    } else {
      setFormData({ ...formData, error: 'Email Invalid', errorMessage: 'Please use a Valid Email' });
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
      return {
        ...question,
        selectedAnswer,
        isCorrect,
      };
    });

    setResults(newResults);
    // Calculate the score if needed
    const newScore = newResults.filter((result) => result.isCorrect).length;
    setScore(newScore);
    console.log("New Results", newResults[0])
    console.log(results)

    const data = {
      fullName: fullName,
      email: email, 
      contactNo: contactNo, 
      course: course, 
      year: year, 
      appearedResults: newResults, 
      score: score    
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


  return (
    <div className="container-fluid" style={{ userSelect: 'none' }}>
      
      <Collapse isOpen={greatingScreenDisplay}>
        <div  style={{ height: '100vh'}}>
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
                className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                value={email}
                onChange={handleChange('email')}
                type="email" className="form-control"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Contact No</label>
              <input
                value={contactNo}
                onChange={handleChange('contactNo')}
                type='tel'
                className="form-control"/>
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
              handleSubmit({fullName, email, contactNo, course, year})
            }}>Submit</button>
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
            duration={30}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {handleCheckAnswers()}}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
        <div className="no-select mt-5 d-flex flex-wrap justify-content-center align-items-center">
          {questions.map((question, index) => (
            <div key={index} className='card col-md-6 col-10 m-3 p-3'>
              <p className="h3">{question.question}</p>
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
    </div>
  );
};

export default QuizApp;
