const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",  
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",   
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",    
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",  
  },
]


const btnSubmit = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const labelAnswer_a = document.getElementById('label-answer-a');
const labelAnswer_b = document.getElementById('label-answer-b');
const labelAnswer_c = document.getElementById('label-answer-c');
const labelAnswer_d = document.getElementById('label-answer-d');
const container = document.querySelector('.container');

const correctAnswer = ['d', 'b', 'a', 'b'];


let currentQuiz = 0;
let score = 0;

const changeQuiz = () => {
  answerEls.forEach(answerEl => answerEl.checked = false);

  questionEl.innerText = quizData[currentQuiz].question;
  labelAnswer_a.innerText = quizData[currentQuiz].a;
  labelAnswer_b.innerText = quizData[currentQuiz].b;
  labelAnswer_c.innerText = quizData[currentQuiz].c;
  labelAnswer_d.innerText = quizData[currentQuiz].d;
}

const getSelectedAnswer = () => {
  let answerSelected;

  answerEls.forEach(answerEl => {  
    if(answerEl.checked) {
      answerSelected = answerEl.id;
    }
  })

  return answerSelected.substring(answerSelected.length -1);
}


btnSubmit.addEventListener('click', (e) => { 
  e.preventDefault();

  const answer = getSelectedAnswer();

  if(answer === correctAnswer[currentQuiz]) {
    score++
  }

  currentQuiz++

  if(currentQuiz < quizData.length) {
    changeQuiz();
  } else {
    container.innerHTML = `
      <h2 class="result">You answered ${score}/${quizData.length} questions correctly</h2>
      <button class="btn" onclick="location.reload()">Reload</button>
    `;
  }
});