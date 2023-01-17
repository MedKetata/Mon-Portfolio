const quizData = [ {
    question: "CSS, C Quoi ?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
}, {
    question: "C'est Quoi la capital de la france",
    a: "Paris",
    b: "Marseille",
    c: "Nice",
    d: "Madrid",
    correct: "a",
}, {
    question: "Sfax est",
    a: "En Lybie",
    b: "En Tunisie",
    c: "En Marroc",
    d: "En France",
    correct: "b",
},
{
    question: "De quel pays Beyrouth est-elle la capitale ?",
    a: "Tunisie",
    b: "Liban",
    c: "Egypte",
    d: "Algérie",
    correct: "b",
},
{
    question: "De quel pays Londres est-elle la capitale ?",
    a: "Royaume-Uni",
    b: "Andorra",
    c: "Suisse",
    d: "Espagne",
    correct: "a",
},
{
    question: "Sfax est",
    a: "En Lybie",
    b: "En Tunisie",
    c: "En Marroc",
    d: "En France",
    correct: "b",
},
{
    question: "De quel pays Bucarest est-elle la capitale ?",
    a: "Niger",
    b: "Roumanie",
    c: "Allemagne",
    d: "France",
    correct: "b",
},
{
    question: "De quel pays Zagreb est-elle la capitale ?",
    a: "Etats Unis",
    b: "Uruguay",
    c: "Suéde",
    d: "Croatie",
    correct: "d",
},
{
    question: "De quel pays Lisbonne est-elle la capitale ?",
    a: "Philippines",
    b: "Péru",
    c: "Portugal",
    d: "France",
    correct: "c",
},
{
    question: "De quel pays Séoul est-elle la capitale ?",
    a: "Corée du sud",
    b: "Iran",
    c: "Camboude",
    d: "Chine",
    correct: "a",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>Vous avez répondu à ${score}/${quizData.length} questions correctes </h2> 
                <button onclick="history.go(0)">Play Again</button> `
                // location.reload() won't work in CodePen for security reasons; } } });
        }
    }
});