const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyper>"],
        answer: 1
    },
    {
        question: "CSS is used for?",
        options: [
            "Structuring content",
            "Styling web pages",
            "Programming logic",
            "Database management"
        ],
        answer: 1
    },
    {
        question: "Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "size"],
        answer: 2
    },
    {
        question: "JavaScript is a ___ language.",
        options: ["Markup", "Styling", "Programming", "Query"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "**", "##"],
        answer: 1
    },
    {
        question: "Which HTML tag is used to display images?",
        options: ["<image>", "<img>", "<src>", "<pic>"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JS?",
        options: ["int", "var", "string", "float"],
        answer: 1
    },
    {
        question: "Which language runs in the browser?",
        options: ["Python", "C++", "Java", "JavaScript"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        questionEl.innerText = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
        document.querySelector(".options").style.display = "none";
        nextBtn.style.display = "none";
    }
};

loadQuestion();