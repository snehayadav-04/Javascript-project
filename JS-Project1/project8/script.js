const questions =[
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
    question: "Which is smallest continent in the world?",
    answers: [
        {text:"Asia", correct: false},
        {text:"Australia", correct: true},
        {text:"Europe", correct: false},
        {text:"Africa", correct: false},
    ]
    },
    {
        question: "Who was the founder of Maurya Empire?",
    answers: [
        {text:"Chandragupta Maurya", correct: True},
        {text:"Ashoka", correct: false},
        {text:"Harsha", correct: false},
        {text:"Kanishka", correct: false},
    ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score= 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    });
}
startQuiz() 