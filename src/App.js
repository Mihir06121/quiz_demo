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
        "question": "What are the values of the following Python expressions? ",
        "options": [
          "512, 64, 512",
          "512, 512, 512",
          "64, 512, 64",
          "64, 64, 64"
        ],
        "correctAnswer": "512, 64, 512",
        "isCode": true,
        "codeContent": "2**(3**2)\n(2**3)**2\n2**3**2",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What will be the output of the following Python code?",
        "options": [
          "12",
          "224",
          "None",
          "Error"
        ],
        "correctAnswer": "12",
        "isCode": true,
        "codeContent": "class tester:\n    def __init__(self, id):\n        self.id = str(id)\n    id='224'\n>>>temp = tester(12)\n>>>print(temp.id)",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What will be the output of the following Python code if the input entered is 6?",
        "options": [
          "Bye (printed once)",
          "No output",
          "Invalid (printed once)",
          "Bye (printed infinite number of times)"
        ],
        "correctAnswer": "Bye (printed infinite number of times)",
        "isCode": true,
        "codeContent": "valid = False\nwhile not valid:\n    try:\n        n = int(input('Enter a number'))\n        while n % 2 == 0:\n            print('Bye')\n        valid = True\n    except ValueError:\n        print('Invalid')",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "During the execution of following code, what will be the response, we get -",
        "options": [
          "KeyError",
          "IndexError",
          "ValueError",
          "typeError"
        ],
        "correctAnswer": "KeyError",
        "isCode": true,
        "codeContent": "import pandas as pd\ns =pd.Series([1,2,3,4,5],index= ['a','b','c','d','e'])\nprint(s['f'])",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Compare the following two Python codes shown below and state the output if the input entered in each case is -5? ",
        "options": [
          "ValueError, NameError",
          "AttributeError, ValueError",
          "NameError, TypeError",
          "TypeError, ValueError"
        ],
        "correctAnswer": "ValueError, NameError",
        "isCode": true,
        "codeContent": "CODE 1\nimport math\nnum=int(input('Enter a number of whose factorial you want to find'))\nprint(math.factorial(num))\n\nCODE 2\nnum=int(input('Enter a number of whose factorial you want to find'))\nprint(math.factorial(num))",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which AI technique is used for detecting fraudulent transactions in banking systems?",
        "options": [
          "Natural Language Processing (NLP)",
          "Decision Trees",
          "Neural Networks",
          "K-means Clustering"
        ],
        "correctAnswer": "Neural Networks",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "The _____ is something that you can obtain under contract from your vendor.",
        "options": [
          " SoS",
          "PoS",
          "QoS",
          "RoS"
        ],
        "correctAnswer": "QoS",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does the term “phishing” refer to in cybersecurity?",
        "options": [
          "A social engineering technique to gain unauthorized access to a network",
          "A type of malware that spreads through email attachments",
          "A method to encrypt data during transmission",
          "A technique to detect vulnerabilities in a system"
        ],
        "correctAnswer": "A social engineering technique to gain unauthorized access to a network",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which component would you choose to add physics to a 2D GameObject?",
        "options": [
          "Transform",
          "Rigidbody",
          "Rigidbody 2D",
          "Transform 2D"
        ],
        "correctAnswer": "Rigidbody 2D",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is ANR in Android?",
        "options": [
          "Application Not Responding",
          "Activity Not Running",
          "Android Not Responding",
          "Application Not Running"
        ],
        "correctAnswer": "Application Not Responding",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "React is a ____.",
        "options": [
          "Web development Framework",
          "JavaScript Library",
          "jQuery",
          "Web Server"
        ],
        "correctAnswer": "JavaScript Library",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the role of Deep Learning in AI applications?",
        "options": [
          "To simulate deep thinking in computers",
          "To process large amounts of data with neural networks",
          "To predict natural disasters",
          "To perform validation"
        ],
        "correctAnswer": "To process large amounts of data with neural networks",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the term used to describe a cybersecurity attack that involves guessing passwords or encryption keys through exhaustive trial-and-error?",
        "options": [
          "Ransomware attack",
          "Phishing attack",
          "Brute-force attack",
          "injection attack"
        ],
        "correctAnswer": "Brute-force attack",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which type of machine learning is feedback-based machine learning?",
        "options": [
          "Semi-supervised Machine learning",
          "Unsupervised Machine learning",
          "Supervised Machine learning",
          "Reinforcement Machine learning"
        ],
        "correctAnswer": "Reinforcement Machine learning",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is Blockchain?",
        "options": [
          "A currency",
          "A ledger",
          "A type of currency",
          "A distributed ledger on a peer-to-peer network"
        ],
        "correctAnswer": "A distributed ledger on a peer-to-peer network",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "MQTT Stands for:",
        "options": [
          "Mass Query Telemetry Transport",
          "Message Queuing Telemetry Transport",
          "Message Query Text Transport",
          "Mass Queuing Text Transport"
        ],
        "correctAnswer": "Message Queuing Telemetry Transport",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Washing machine is a Robot. True or false?",
        "options": [
          "TRUE",
          "FALSE",
          "",
          ""
        ],
        "correctAnswer": "TRUE",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which of the following is used to handle background operations in Android?",
        "options": [
          "Activity",
          "BroadcastReceiver",
          "Service",
          "ContentProvider"
        ],
        "correctAnswer": "Service",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which method is used to insert a single document into a MongoDB collection?",
        "options": [
          "db.collection.insertOne()",
          "db.collection.insert()",
          "db.collection.addOne()",
          "db.collection.create()"
        ],
        "correctAnswer": "db.collection.insertOne()",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Scalability is prioritized over latency in jobs such as _____.",
        "options": [
          "HBase",
          "HDFS",
          "Hive",
          "Mapreduce"
        ],
        "correctAnswer": "Hive",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the purpose of the man-in-middle attack?",
        "options": [
          "To steal sensitive data from the target system",
          "To overload the target system's resources",
          "To deceive the user into clicking on a malicious link",
          "To intercept and tamper with communication between two parties"
        ],
        "correctAnswer": "To intercept and tamper with communication between two parties",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the purpose of a confusion matrix in machine learning?",
        "options": [
          "To display the distribution of data points",
          "To visualize feature importance",
          "To evaluate the performance of a classification model",
          "To preprocess categorical data"
        ],
        "correctAnswer": "To evaluate the performance of a classification model",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which statement is required to define a class component?",
        "options": [
          "extends React.Components",
          "imports React.Components",
          "extends React.Component",
          "imports React.Component"
        ],
        "correctAnswer": "extends React.Component",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which version of Android introduced Adaptive Battery and Adaptive Brightness features?",
        "options": [
          "Android 8.0 Oreo",
          "Android 9.0 Pie",
          "Android 10",
          "Android 11"
        ],
        "correctAnswer": "Android 9.0 Pie",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which type of testing is responsible for testing how stable the software is built?",
        "options": [
          "Recover testing",
          "Regression testing",
          "Smoke testing",
          "Unit testing"
        ],
        "correctAnswer": "Smoke testing",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is the code name for Android 10?",
        "options": [
          "Nougat",
          "Pie",
          "Q",
          "R"
        ],
        "correctAnswer": "Q",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What is data encryption standard (DES)?",
        "options": [
          "block cipher",
          "stream cipher",
          "bit cipher",
          "byte cipher"
        ],
        "correctAnswer": "block cipher",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In the context of neural networks, what is a \"epoch\"?",
        "options": [
          "One forward and backward pass of all the training examples",
          "The total number of neurons in a layer",
          "The learning rate of the model",
          "A specific layer in the network"
        ],
        "correctAnswer": "One forward and backward pass of all the training examples",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which version of Android removed the dessert-themed naming convention?",
        "options": [
          "Android 9.0 Pie",
          "Android 10",
          "Android 11",
          "Android 12"
        ],
        "correctAnswer": "Android 10",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which of the following is an example of a VR headset?",
        "options": [
          "Oculus Rift",
          "Google Glass",
          "Apple Watch",
          "Fitbit"
        ],
        "correctAnswer": "Oculus Rift",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "A game based on which animated franchise propelled augmented reality (AR) into the mainstream in recent years?",
        "options": [
          "Pokemon",
          "Fortnite",
          "Super Mario",
          "World of Warcraft"
        ],
        "correctAnswer": "Pokemon",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Key loggers are form of",
        "options": [
          "Spyware",
          "Shoulder surfing",
          "Trojan",
          "Social engineering"
        ],
        "correctAnswer": "Spyware",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which technology is often combined with VR to enhance the sense of interaction with the environment?",
        "options": [
          "Artificial Intelligence (AI)",
          "Blockchain",
          "Haptic feedback",
          "Cloud computing"
        ],
        "correctAnswer": "Haptic feedback",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In MongoDB, what is a 'schema'?",
        "options": [
          "A predefined structure for data",
          "A query language for the database",
          "A tool for data replication",
          ""
        ],
        "correctAnswer": "A predefined structure for data",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does the \"webpack\" command do?",
        "options": [
          "\r\nA module bundler",
          "Runs react local development server.",
          "Transpiles all the Javascript down into one file",
          "Compiler"
        ],
        "correctAnswer": "\r\nA module bundler",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which blockchain component is responsible for creating and adding new blocks to the chain?",
        "options": [
          "Wallet",
          "Node",
          "Transaction",
          "Miner"
        ],
        "correctAnswer": "Miner",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "What does the grep command do?",
        "options": [
          "Finds a file by name",
          "Searches inside a file for a string",
          "Replaces strings in a file",
          "Lists all files in a directory"
        ],
        "correctAnswer": "Searches inside a file for a string",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Wireshark is a ____________ tool.",
        "options": [
          "network protocol analysis",
          "network connection security",
          "connection analysis",
          "defending malicious packet-filtering"
        ],
        "correctAnswer": "network protocol analysis",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "Which component of blockchain ensures the security and integrity of data?",
        "options": [
          "Nodes",
          "Hash functions",
          "Consensus mechanisms",
          "Smart contracts"
        ],
        "correctAnswer": "Hash functions",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      },
      {
        "type": "Analytical",
        "question": "In Which type of testing discrete units are combined and tested as a group?",
        "options": [
          "Unit testing",
          "Accountability testing",
          "Integration testing",
          "Reliability testing"
        ],
        "correctAnswer": "Integration testing",
        "isCode": false,
        "codeContent": "",
        "isImage": false,
        "image": ""
      }
    ]

    const selectedProgrammingQuestions = selectRandomQuestions(questions, 'Analytical', 15);
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
