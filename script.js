// Remove all sound/image code, allow 50/50 every question

// Quiz questions
const questions = [
  {
    question: "Какво е изкуствен интелект (AI)?",
    answers: {
      A: "Система, която имитира човешки интелектуални процеси като учене и вземане на решения",
      B: "Само компютърна игра",
      C: "Вид компютърен вирус",
      D: "Машина за печатане"
    },
    correct: "A",
    explanation: "AI е система, която имитира човешки интелектуални процеси като учене и вземане на решения."
  },
  {
    question: "От какво се съкращава съкращението „AI“?",
    answers: {
      A: "Artificial Intelligence",
      B: "Automated Interface",
      C: "Advanced Integration",
      D: "Analog Input"
    },
    correct: "A",
    explanation: "AI е абревиатура от английското Artificial Intelligence."
  },
  {
    question: "Коя година се провежда лятната работилница в Dartmouth, където за първи път е предложено името „Artificial Intelligence“?",
    answers: {
      A: "1965 г.",
      B: "1956 г.",
      C: "1980 г.",
      D: "1945 г."
    },
    correct: "B",
    explanation: "През 1956 г. се провежда работилницата в Dartmouth, където се въвежда терминът AI."
  },
  {
    question: "Каква е основната цел на AI според IBM?",
    answers: {
      A: "Да симулира човешки процеси като учене, разбиране, решаване на проблеми и творчество",
      B: "Да създава игри",
      C: "Да изчислява бързо",
      D: "Да съхранява данни"
    },
    correct: "A",
    explanation: "Целта на AI е да симулира човешки процеси като учене, разбиране, решаване на проблеми и творчество."
  },
  {
    question: "Кой програмен език е най-често използван за разработка на AI приложения?",
    answers: {
      A: "Java",
      B: "Python",
      C: "C++",
      D: "PHP"
    },
    correct: "B",
    explanation: "Python е най-често използваният език за AI приложения."
  },
  {
    question: "Какво представлява машинното обучение (Machine Learning)?",
    answers: {
      A: "Обучение на машини чрез данни без явни правила",
      B: "Обучение на хора да използват компютри",
      C: "Създаване на игри",
      D: "Писане на код на ръка"
    },
    correct: "A",
    explanation: "Машинното обучение е подoбласт на AI, при която алгоритми се обучават от данни без явни правила."
  },
  {
    question: "Дайте пример за приложение на AI в смартфоните.",
    answers: {
      A: "Гласови асистенти като Siri или Google Assistant",
      B: "Калкулатор",
      C: "Часовник",
      D: "Фенерче"
    },
    correct: "A",
    explanation: "Гласовите асистенти са пример за AI в смартфоните."
  },
  {
    question: "Какво е невронна мрежа?",
    answers: {
      A: "Модел за машинно обучение, вдъхновен от човешкия мозък",
      B: "Мрежа от компютри",
      C: "Интернет връзка",
      D: "Група от хора"
    },
    correct: "A",
    explanation: "Невронната мрежа е модел за машинно обучение, вдъхновен от човешкия мозък."
  },
  {
    question: "Какво означава терминът „Big Data“?",
    answers: {
      A: "Много големи и сложни набори от данни, които изискват специализирани методи за анализ",
      B: "Голям компютър",
      C: "Бърз интернет",
      D: "Голям екран"
    },
    correct: "A",
    explanation: "Big Data са много големи и сложни набори от данни."
  },
  {
    question: "Какво е Natural Language Processing (NLP)?",
    answers: {
      A: "Област на AI, която позволява на машините да разбират и обработват човешки език",
      B: "Програма за превод",
      C: "Машинно обучение",
      D: "Вид компютърна мрежа"
    },
    correct: "A",
    explanation: "NLP е област на AI, която позволява на машините да разбират и обработват човешки език."
  },
  {
    question: "Кое от следните не е метод за машинно обучение: supervised learning, unsupervised learning или unrelated learning?",
    answers: {
      A: "Supervised learning",
      B: "Unsupervised learning",
      C: "Unrelated learning",
      D: "Всички са методи"
    },
    correct: "C",
    explanation: "Unrelated learning не съществува като термин."
  },
  {
    question: "Какво е Deep Learning?",
    answers: {
      A: "Подтип на машинното обучение, използващ многослойни невронни мрежи",
      B: "Дълбоко мислене",
      C: "Обучение на хора",
      D: "Вид база данни"
    },
    correct: "A",
    explanation: "Deep Learning е подтип на машинното обучение с многослойни невронни мрежи."
  },
  {
    question: "Какво представлява чатботът (Chatbot)?",
    answers: {
      A: "Софтуер, който симулира разговор с потребители чрез текст или глас",
      B: "Робот за почистване",
      C: "Вид компютърна мрежа",
      D: "Машина за кафе"
    },
    correct: "A",
    explanation: "Чатботът е софтуер, който симулира разговор с потребители."
  },
  {
    question: "Какво означава „Generative AI“?",
    answers: {
      A: "AI, който създава ново съдържание (текст, изображения, музика) на базата на научени модели",
      B: "AI, който само анализира данни",
      C: "AI, който управлява роботи",
      D: "AI, който се самообучава"
    },
    correct: "A",
    explanation: "Generative AI създава ново съдържание на базата на научени модели."
  },
  {
    question: "Какво е Turing Test и за какво служи?",
    answers: {
      A: "Тест, предложен от Alan Turing, за да определи дали машина може да прояви интелигентно поведение, неразличимо от човешкото",
      B: "Тест за скорост на компютъра",
      C: "Тест за памет",
      D: "Тест за сигурност"
    },
    correct: "A",
    explanation: "Turing Test определя дали машина може да прояви интелигентно поведение, неразличимо от човешкото."
  }
];

// Game state
let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById('start-quiz');

function initializeGame() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        setupIndex();
    } else if (path.includes('quiz.html')) {
        setupQuiz();
    } else if (path.includes('result.html')) {
        showResult();
    }
}

function setupIndex() {
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            localStorage.setItem('score', '0');
            localStorage.setItem('currentQuestion', '0');
            window.location.href = 'quiz.html';
        });
    }
}

function setupQuiz() {
    currentQuestion = parseInt(localStorage.getItem('currentQuestion')) || 0;
    score = parseInt(localStorage.getItem('score')) || 0;
    updateQuestion();
    updateProgress();
}

function updateQuestion() {
    const questionText = document.getElementById('question-text');
    const answers = document.querySelectorAll('.answer-btn');
    const questionNumber = document.querySelector('#question-number span');
    const jokerBtn = document.getElementById('joker-btn');
    if (questionText && answers && questionNumber) {
        const current = questions[currentQuestion];
        questionText.textContent = current.question;
        questionNumber.textContent = (currentQuestion + 1).toString();
        answers.forEach((btn, index) => {
            btn.style.display = '';
            btn.disabled = false;
            btn.classList.remove('correct', 'incorrect');
            const letter = String.fromCharCode(65 + index);
            btn.textContent = `${letter}: ${current.answers[letter]}`;
            btn.dataset.answer = letter;
            btn.onclick = handleAnswer;
        });
    }
    // Remove previous explanation if exists
    const oldExplanation = document.querySelector('.explanation');
    if (oldExplanation) oldExplanation.remove();
    // Reset 50/50 for this question
    if (jokerBtn) {
        jokerBtn.disabled = false;
        jokerBtn.style.display = 'block';
        jokerBtn.onclick = useFiftyFifty;
    }
}

function handleAnswer(e) {
    const selectedAnswer = e.target.dataset.answer;
    const correct = questions[currentQuestion].correct;
    if (selectedAnswer === correct) {
        e.target.classList.add('correct');
        score++;
        localStorage.setItem('score', score.toString());
    } else {
        e.target.classList.add('incorrect');
        document.querySelector(`[data-answer="${correct}"]`).classList.add('correct');
    }
    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
    // Show explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation';
    explanationDiv.textContent = questions[currentQuestion].explanation;
    document.getElementById('question-card').appendChild(explanationDiv);
    // Disable joker for this question
    const jokerBtn = document.getElementById('joker-btn');
    if (jokerBtn) jokerBtn.disabled = true;
    setTimeout(() => {
        currentQuestion++;
        localStorage.setItem('currentQuestion', currentQuestion.toString());
        if (currentQuestion >= questions.length) {
            window.location.href = 'result.html';
        } else {
            updateQuestion();
            updateProgress();
        }
    }, 1800);
}

function updateProgress() {
    const progress = document.getElementById('progress');
    if (progress) {
        const percentage = ((currentQuestion + 1) / questions.length) * 100;
        progress.style.width = `${percentage}%`;
    }
}

function useFiftyFifty() {
    const correct = questions[currentQuestion].correct;
    const answers = Array.from(document.querySelectorAll('.answer-btn'));
    const wrongAnswers = answers.filter(btn => btn.dataset.answer !== correct && btn.style.display !== 'none');
    let removed = 0;
    while (removed < 2 && wrongAnswers.length > 0) {
        const idx = Math.floor(Math.random() * wrongAnswers.length);
        wrongAnswers[idx].style.display = 'none';
        wrongAnswers.splice(idx, 1);
        removed++;
    }
    // Disable joker for this question
    const jokerBtn = document.getElementById('joker-btn');
    if (jokerBtn) jokerBtn.disabled = true;
}

function showResult() {
    const scoreElement = document.getElementById('score');
    const finalScore = parseInt(localStorage.getItem('score')) || 0;
    if (scoreElement) {
        scoreElement.textContent = `${finalScore}/15 верни отговора!`;
        const messageElement = document.createElement('p');
        messageElement.className = 'score-message';
        if (finalScore >= 12) {
            messageElement.textContent = 'Великолепно! Вие сте експерт по AI в България!';
        } else if (finalScore >= 8) {
            messageElement.textContent = 'Добра работа! Имате солидни познания за AI!';
        } else {
            messageElement.textContent = 'Продължавайте да учите за AI технологиите!';
        }
        scoreElement.parentNode.appendChild(messageElement);
    }
}

document.addEventListener('DOMContentLoaded', initializeGame);