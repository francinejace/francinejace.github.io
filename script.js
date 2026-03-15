let currentQuestion = 0;
let score = 0;
let mode = "review";
let selectedAnswers = {};

function startQuiz(selectedMode) {

    mode = selectedMode;

    document.querySelector(".mode-select").style.display = "none";
    document.getElementById("quizArea").style.display = "block";

    loadQuestion();
}

function loadQuestion() {

    const q = questions[currentQuestion];
    const box = document.getElementById("questionBox");

    box.innerHTML = "";

    const title = document.createElement("h3");
    title.innerText = (currentQuestion + 1) + ". " + q.q;
    box.appendChild(title);

    if (q.type === "multi") {

        q.choices.forEach((choice, i) => {

            const label = document.createElement("label");
            label.style.display = "block";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            checkbox.onchange = () => handleMultiAnswer(i, checkbox);

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + choice));

            box.appendChild(label);
        });

    } else {

        q.choices.forEach((choice, i) => {

            const btn = document.createElement("button");
            btn.innerText = choice;

            btn.onclick = () => handleSingleAnswer(i, btn);

            box.appendChild(btn);
        });

    }

    updateProgress();
}

function handleSingleAnswer(index, btn) {

    selectedAnswers[currentQuestion] = [index];

    const q = questions[currentQuestion];

    if (mode === "review") {

        if (q.answer.includes(index)) {

            btn.classList.add("correct");
            score++;

        } else {

            btn.classList.add("wrong");
        }

        showExplanation(q.explanation);
    }

    updateScore();
}

function handleMultiAnswer(index, checkbox) {

    if (!selectedAnswers[currentQuestion]) {
        selectedAnswers[currentQuestion] = [];
    }

    if (checkbox.checked) {
        selectedAnswers[currentQuestion].push(index);
    } else {
        selectedAnswers[currentQuestion] =
            selectedAnswers[currentQuestion].filter(a => a !== index);
    }

    if (mode === "review") {

        const q = questions[currentQuestion];

        const correct =
            JSON.stringify([...selectedAnswers[currentQuestion]].sort()) ===
            JSON.stringify([...q.answer].sort());

        if (correct) {
            score++;
        }

        showExplanation(q.explanation);
        updateScore();
    }
}

function showExplanation(text) {

    document.getElementById("explanationText").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updateScore() {

    document.getElementById("scoreBox").innerText = "Score: " + score;
}

function updateProgress() {

    const percent = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress").style.width = percent + "%";
}

document.getElementById("nextBtn").onclick = () => {

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
};

document.getElementById("prevBtn").onclick = () => {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};
