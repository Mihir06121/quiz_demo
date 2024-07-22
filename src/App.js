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
        "question": "Which company's logo is a red and yellow logo with a stylized letter \"M\" made up of two arches?",
        "options": [
          "McDonald's",
          "Microsoft",
          "Mozilla",
          "Monster Energy"
        ],
        "correctAnswer": "McDonald's",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the name of the first web browser developed in 1990?",
        "options": [
          "Internet Explorer",
          " Mozilla Firefox",
          "Google Chrome",
          "WorldWideWeb"
        ],
        "correctAnswer": "WorldWideWeb",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which company's logo is a blue and white logo with a stylized letter \"T\" made up of two birds?",
        "options": [
          "Twitter",
          "Tumblr",
          "TikTok",
          "Twitch"
        ],
        "correctAnswer": "Twitter",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who is credited with inventing the first practical computer?",
        "options": [
          "Charles Babbage",
          "Ada Lovelace",
          "Alan Turing",
          "John Atanasoff"
        ],
        "correctAnswer": "Charles Babbage",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In what year did Netflix adopt its current logo design?",
        "options": [
          "2007",
          "2012",
          "2014",
          "2016"
        ],
        "correctAnswer": "2014",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which website is known for its online video streaming?",
        "options": [
          "YouTube",
          "Netflix",
          "Amazon Prime",
          "Hulu"
        ],
        "correctAnswer": "YouTube",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which website is known for its online software development platform?",
        "options": [
          "GitHub",
          "Stack Overflow",
          "Microsoft",
          "Apple"
        ],
        "correctAnswer": "GitHub",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which website is known for its online blogging platform?",
        "options": [
          "WordPress",
          "Blogger",
          "Medium",
          "Tumblr"
        ],
        "correctAnswer": "WordPress",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the purpose of a web application firewall (WAF)?",
        "options": [
          "To protect web applications from cyber threats",
          "To improve web application performance",
          "To monitor web application traffic",
          "To develop web applications"
        ],
        "correctAnswer": "To protect web applications from cyber threats",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does ISP stand for?",
        "options": [
          "Internet Service Provider",
          "Internet Service Process",
          "Internet Service Program",
          "Internet Service Platform"
        ],
        "correctAnswer": "Internet Service Provider",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does USB stand for?",
        "options": [
          "Universal Serial Bus",
          "Universal System Bus",
          "Universal Service Bus",
          "Universal Storage Bus"
        ],
        "correctAnswer": "Universal Serial Bus",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does GIS stand for?",
        "options": [
          "Geographic Information System",
          "Graphic Information System",
          "General Information System",
          "Global Information System"
        ],
        "correctAnswer": "Geographic Information System",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does PDF stand for?",
        "options": [
          "Portable Document Format",
          "Personal Document Format",
          "Professional Document Format",
          "Protected Document Format"
        ],
        "correctAnswer": "Portable Document Format",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who is the CEO of Microsoft?",
        "options": [
          "Satya Nadella",
          "Bill Gates",
          "Steve Ballmer",
          "John W. Thompson"
        ],
        "correctAnswer": "Satya Nadella",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who is the CEO of Amazon?",
        "options": [
          "Jeff Bezos",
          "Andy Jassy",
          "Werner Vogels",
          "Tom Taylor"
        ],
        "correctAnswer": "Jeff Bezos",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who founded Microsoft?",
        "options": [
          "Bill Gates and Paul Allen",
          "Steve Jobs and Steve Wozniak",
          "Larry Ellison and Bob Miner",
          "Marc Andreessen and Jim Clark"
        ],
        "correctAnswer": "Bill Gates and Paul Allen",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who founded HP (Hewlett-Packard), the company that developed the first handheld calculator?",
        "options": [
          "Bill Hewlett and Dave Packard",
          "Bill Gates and Paul Allen",
          "Steve Jobs and Steve Wozniak",
          "Larry Ellison and Bob Miner"
        ],
        "correctAnswer": "Bill Hewlett and Dave Packard",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does OTP stand for?",
        "options": [
          "One-Time Password",
          "One-Touch Payment",
          "Online Transaction Processing",
          "Open Technology Protocol"
        ],
        "correctAnswer": "One-Time Password",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which of the following is a feature of Instagram Stories?",
        "options": [
          "Permanent posting",
          "24-hour disappearance",
          "Ability to share with individual users",
          "email"
        ],
        "correctAnswer": "24-hour disappearance",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the purpose of the GPU (Graphics Processing Unit)?",
        "options": [
          "To process graphics and video",
          "To process audio and sound",
          "To process data and calculations",
          "To store data and programs"
        ],
        "correctAnswer": "To process graphics and video",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the term for a program that can run on multiple operating systems?",
        "options": [
          "Cross-platform",
          "Open-source",
          "Closed-source",
          "Proprietary"
        ],
        "correctAnswer": "Cross-platform",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the term for a program that is free to download and use, but requires payment for advanced features?",
        "options": [
          "Freeware",
          "Shareware",
          "Open-source",
          "Trialware"
        ],
        "correctAnswer": "Shareware",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which software is used for editing and manipulating images?",
        "options": [
          "Adobe Photoshop",
          "Microsoft Word",
          "Google Chrome",
          "Mozilla Firefox"
        ],
        "correctAnswer": "Adobe Photoshop",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the term for a program that provides real-time protection against malware and viruses?",
        "options": [
          "Antivirus software",
          "Firewall software",
          "Encryption software",
          "Backup software"
        ],
        "correctAnswer": "Antivirus software",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the name of the founder of Snapchat?",
        "options": [
          "Evan Spiegel",
          "Mark Zuckerberg",
          "Jack Dorsey",
          "Kevin Systrom"
        ],
        "correctAnswer": "Evan Spiegel",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is a repository in GitHub?",
        "options": [
          "A collection of files and folders",
          "A single file or project",
          "A collaboration tool for teams",
          "A version control system"
        ],
        "correctAnswer": "A collection of files and folders",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is Wikipedia?",
        "options": [
          "A social media platform",
          "A news website",
          "A free online encyclopedia",
          "A blog hosting site"
        ],
        "correctAnswer": "A free online encyclopedia",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the name of Zoom's virtual meeting space?",
        "options": [
          "Virtual Room",
          "Meeting Space",
          "Virtual Office",
          "Zoom Room"
        ],
        "correctAnswer": "Zoom Room",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is full form of YAHOO ?",
        "options": [
          "Yet Another Hierarchical Officio Oracular",
          "Yahoo Another Hierarchical Officious Oracle",
          "Yet Another Hierarchical Officious Oracular",
          "Yet Another Hierarchical Officious Oracle"
        ],
        "correctAnswer": "Yet Another Hierarchical Officious Oracle",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is meaning of docx",
        "options": [
          "Document copied and xeroxed",
          "Document extended",
          "Draft extended",
          "Draft copied and xeroxed"
        ],
        "correctAnswer": "Document extended",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the process of extracting insights from data called?",
        "options": [
          "Data analysis",
          "Data mining",
          "Data visualization",
          "Data science"
        ],
        "correctAnswer": "Data science",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the name of Amazon's virtual assistant?",
        "options": [
          "Alexa",
          "Echo",
          "Dot",
          "siri"
        ],
        "correctAnswer": "siri",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "How much storage space does Google Drive offer for free?",
        "options": [
          "1 GB",
          "5 GB",
          "15 GB",
          "20 GB"
        ],
        "correctAnswer": "15 GB",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is ChatGPT?",
        "options": [
          "A chatbot developed by Google",
          "A language model developed by OpenAI",
          "A virtual assistant developed by Amazon",
          "A messaging platform developed by Facebook"
        ],
        "correctAnswer": "A language model developed by OpenAI",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which of the following games is exclusive to the PlayStation platform?",
        "options": [
          "Fortnite",
          "Minecraft",
          "God of War",
          "Grand Theft Auto"
        ],
        "correctAnswer": "God of War",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is Meta AI?",
        "options": [
          "A social media platform",
          "A artificial intelligence laboratory",
          "A virtual reality headset",
          "A messaging app"
        ],
        "correctAnswer": "A artificial intelligence laboratory",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is full form of BMP ?",
        "options": [
          "Bit Map",
          "Byte Map",
          "Byte Map Process",
          "Bit Map Process"
        ],
        "correctAnswer": "Bit Map",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which website is known for its online music streaming?",
        "options": [
          "Spotify",
          "Apple Music",
          "samsung Music",
          "MTv"
        ],
        "correctAnswer": "spotify",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": " Which website is known for its online sports news platform?",
        "options": [
          "ESPN",
          "Fox Sports",
          "CBS Sports",
          "NBC Sports"
        ],
        "correctAnswer": "ESPN",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Who is the CEO of Google?",
        "options": [
          "Sundar Pichai",
          "Jeff Bezos",
          "Mark Zuckerberg",
          "Satya Nadella"
        ],
        "correctAnswer": "Sundar Pichai",
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
