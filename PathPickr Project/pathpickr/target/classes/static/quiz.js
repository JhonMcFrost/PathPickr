let currentQuestion = 0;
let selectedTag = "";

let score = {
  tech: 0,
  education: 0,
  creative: 0,
  management: 0
};

const questions = [
  {
    question: "What type of tasks do you enjoy the most?",
    options: [
      { text: "Solving technical problems", tag: "tech" },
      { text: "Helping and guiding people", tag: "education" },
      { text: "Designing and creating visuals", tag: "creative" },
      { text: "Managing projects and teams", tag: "management" }
    ]
  },
  {
    question: "Which environment suits you best?",
    options: [
      { text: "Fast-paced and tech-oriented", tag: "tech" },
      { text: "Educational and nurturing", tag: "education" },
      { text: "Creative and expressive", tag: "creative" },
      { text: "Organized and goal-driven", tag: "management" }
    ]
  },
  {
    question: "Choose a preferred tool:",
    options: [
      { text: "Code editor", tag: "tech" },
      { text: "Whiteboard", tag: "education" },
      { text: "Sketchpad", tag: "creative" },
      { text: "Spreadsheet", tag: "management" }
    ]
  }
];

const questionBox = document.getElementById("questionBox");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(index) {
  const q = questions[index];
  progress.textContent = `Question ${index + 1} of ${questions.length}`;
  questionBox.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options
        .map(
          opt =>
            `<button class="option" onclick="selectOption(this, '${opt.tag}')">${opt.text}</button>`
        )
        .join("")}
    </div>
  `;
}

function selectOption(btn, tag) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(o => o.classList.remove("selected"));
  btn.classList.add("selected");
  selectedTag = tag;
}

nextBtn.addEventListener("click", () => {
  if (!selectedTag) {
    alert("Please select an option.");
    return;
  }

  // Count selected tag
  score[selectedTag]++;

  currentQuestion++;
  selectedTag = "";

  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    // Store results and redirect
    localStorage.setItem("careerScore", JSON.stringify(score));
    window.location.href = "result.html";
  }
});

// Initial load
loadQuestion(currentQuestion);
