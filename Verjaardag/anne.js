document.getElementById('startButton').addEventListener('click', startTreasureHunt);

const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const clueContainer = document.getElementById('clue');
const imageContainer = document.getElementById('imageContainer');
const questions = [
    {
        question: 'Welke rivier stroomt door Porto?',
        options: ['Seine', 'Rijn', 'Douro', 'Tanges'],
        answer: 'Douro'
    },
    {
        question: 'Wat is het eerste priemgetal na 23?',
        options: ['31', '25', '37', '29'],
        answer: '29'
    },
    {
        question: 'Wie schreef "De ontdekking van de hemel"?',
        options: ['W.F. Hermans', 'Harry Mulisch', 'Abdelkader Benali', 'Cees Nooteboom'],
        answer: 'Harry Mulisch'
    }
];

let currentQuestionIndex = 0;

function startTreasureHunt() {
    startButton.textContent = 'Volgende Hint';
    startButton.disabled = true;

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        renderQuestion(currentQuestion);
    } else {
        clueContainer.textContent = 'Je hebt het cadeau al gevonden!';
        imageContainer.innerHTML = '<img src="clear_picture.jpg" alt="">';
    }
}

function renderQuestion(question) {
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <form id="questionForm">
            ${question.options.map((option, index) => `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label>
            `).join('<br>')}
            <br>
            <button type="button" onclick="submitAnswer()">Submit Answer</button>
        </form>
    `;
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            showClueAndImage();
            currentQuestionIndex++;
            startButton.disabled = false;
        } else {
            alert('Fout antwoord');
        }
    } else {
        alert('Kies een antwoord');
    }
}

function showClueAndImage() {
    clueContainer.textContent = `Clue ${currentQuestionIndex + 1}: ${getClueText(currentQuestionIndex)}`;
    imageContainer.innerHTML = `<img src="img/Treasure_Hunt_${currentQuestionIndex + 1}.jpg" alt="Zoomed In Picture">`;
}

function getClueText(index) {
    // Add your clue text for each question index
    const clues = [
        'Links van de televisie...',
        'In het zakelijke gedeelte van het huis...',
        'Achter het gordijntje...'
    ];

    return clues[index];
}
