const resultBox = document.getElementById("careerResult");

const score = JSON.parse(localStorage.getItem("careerScore"));

if (!score) {
  resultBox.innerHTML = "No data found. Please take the quiz first.";
} else {
  // Find top tag
  const topCareer = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  const recommendations = {
    tech: {
      title: "💻 Tech Enthusiast",
      career: "Recommended Careers: Software Developer, Data Analyst, IT Specialist",
      skills: "Recommended Skills: Programming, Databases, Networking",
      courses: "Suggested Courses: Web Development, Python, Cybersecurity"
    },
    education: {
      title: "📚 Educator & Mentor",
      career: "Recommended Careers: Teacher, Counselor, Academic Coach",
      skills: "Recommended Skills: Communication, Instructional Design",
      courses: "Suggested Courses: Educational Psychology, Training Facilitation"
    },
    creative: {
      title: "🎨 Creative Visionary",
      career: "Recommended Careers: Graphic Designer, UI/UX Designer, Animator",
      skills: "Recommended Skills: Design Tools, Typography, Storytelling",
      courses: "Suggested Courses: Adobe Suite, Design Thinking"
    },
    management: {
      title: "📊 Strategic Leader",
      career: "Recommended Careers: Project Manager, Business Analyst, Team Lead",
      skills: "Recommended Skills: Leadership, Organization, Problem-Solving",
      courses: "Suggested Courses: Project Management, Business Strategy"
    }
  };

  const data = recommendations[topCareer];

  resultBox.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.career}</p>
    <p><strong>Skills to Learn:</strong> ${data.skills}</p>
    <p><strong>Courses to Take:</strong> ${data.courses}</p>
  `;
}
