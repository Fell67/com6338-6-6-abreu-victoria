var questionsArr = [
  {
    question: 'Who won the Super Bowl 2026?',
    answer: 'Sea Hawks',
    options: [
      'Sea Hawks',
      'Patriots',
      'Bears',
      'Seagulls'
    ]
  },
  {
    question: 'Who performed at the Super Bowl 2026?',
    answer: 'Bad Bunny',
    options: [
      'Mad Bunny',
      'Pitbull',
      'Bad Bunny',
      'Drake'
    ]
  },
  {
    question: 'Where is Bad Bunny from?',
    answer: 'Puerto Rico',
    options: [
      'Florida',
      'Puerto Rico',
      'Cuba',
      'Colombia',
    ]
  },
  {
    question: 'What was the number of the 2026 Super Bowl?',
    answer: 'LX',
    options: [
      'LX',
      'XL',
      'LIX',
      'XXL',
    ]
  },
  {
    question: 'Where was the 2026 Super Bowl?',
    answer: 'Santa Cuz, CA',
    options: [
      'Foxborough, MA',
      'San Francisco, CA',
      'Boston, MA',
      'Santa Cuz, CA',
    ]
  }
]

const quizElement = document.getElementById('quiz')
let correctAns

// Track if the answer was correct then move on to the next question
function goToTheNextQuestion(currentQuestion, answer, questionElement, optionsDivElement, timeLeftElement) {
  // If right the add to the number of correct answers
  if (currentQuestion.answer === answer) {
    correctAns++
  }

  // Remove the question elements
  quizElement.removeChild(questionElement)
  quizElement.removeChild(optionsDivElement)
  quizElement.removeChild(timeLeftElement)

  // Move on to the next question if there is any more left else end the game
  const currentQuestionIndex = questionsArr.findIndex(arrayQuestionObj => arrayQuestionObj.question === currentQuestion.question)

  if (currentQuestionIndex + 1 < questionsArr.length) {
    askQuestion(questionsArr[currentQuestionIndex + 1])
  } else {
    const score = Math.round(correctAns/questionsArr.length * 100)
    localStorage.setItem('previous-score', score + '%')
    setupTheGame()
  }
}

// Show the question to the user
function askQuestion(questionObj) {
  let timeLeft = 30 // The max time for a question is 30 seconds

  // Create the p, div, and buttons needed to display the question
  const questionElement = document.createElement('p')
  questionElement.textContent = questionObj.question
  const optionsDivElement = document.createElement('div')
  const timeLeftElement = document.createElement('p')
  timeLeftElement.textContent = timeLeft

  for (const option of questionObj.options) {
    const optionElement = document.createElement('button')
    optionElement.textContent = option
    optionsDivElement.appendChild(optionElement)
  }

  // Present the question to the user
  quizElement.appendChild(questionElement)
  quizElement.appendChild(optionsDivElement)
  quizElement.appendChild(timeLeftElement)

  // Start the timer for the question
  let intervalId = setInterval(function () {
    timeLeftElement.textContent--
    if (timeLeftElement.textContent <= 0) {
      clearInterval(intervalId)
      goToTheNextQuestion(questionObj, '', questionElement, optionsDivElement, timeLeftElement)
    }
  }, 1000)

  // Catch when an option is clicked and remove the elements
  optionsDivElement.addEventListener('click', function (e) {
    e.stopPropagation()

    // Track if the answer was correct then move on to the next question
    if (questionObj.options.includes(e.target.textContent)) {
      clearInterval(intervalId)
      goToTheNextQuestion(questionObj, e.target.textContent, questionElement, optionsDivElement, timeLeftElement)
    }
  })
}

// Create the Previous Score Element
function createPreviousScoreElement() {
  if (localStorage.getItem('previous-score') !== null) {
    const previousScoreElement = document.createElement('section')
    previousScoreElement.textContent = 'Previous Score: ' + localStorage.getItem('previous-score')
    return previousScoreElement
  }

  return undefined
}

// Create the Start Button Element
function createStartBtnElement() {
  const startQuizBtnElement = document.createElement('button')
  startQuizBtnElement.id = 'start-quiz'
  startQuizBtnElement.textContent = 'Start Quiz!'

  return startQuizBtnElement
}

function setupTheGame() {
  correctAns = 0

  // Create the start button and previous score element and add it to the DOM as needed
  const previousScoreElement = createPreviousScoreElement()
  const startQuizBtnElement = createStartBtnElement()
  if (previousScoreElement !== undefined) {
    quizElement.appendChild(previousScoreElement)  
  }
  quizElement.appendChild(startQuizBtnElement)

  // When the button is clicked start the game
  startQuizBtnElement.addEventListener('click', function (e) {
    e.stopPropagation()
    // Remove the start quiz button and the previous score text if it exists
    if (previousScoreElement !== undefined) {
      previousScoreElement.parentElement.removeChild(previousScoreElement)
    }
    startQuizBtnElement.parentElement.removeChild(startQuizBtnElement)

    // Start the game
    askQuestion(questionsArr[0])
  })
}

setupTheGame()
