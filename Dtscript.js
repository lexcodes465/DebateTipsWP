const tips = [
  {
    theme: "Education",
    tip: "Every student should have equal access to quality education, regardless of their background. Frame arguments around fairness and state responsibility."
  },
  {
    theme: "Environment",
    tip: "Climate change policies should balance economic growth and sustainability. Use cost-benefit and stakeholder perspectives."
  },
  {
    theme: "Social Issues",
    tip: "When debating social policies, highlight how they affect vulnerable communities. Always bring in local context (e.g. B40, Orang Asli)."
  }
];

const tipsList = document.getElementById("tips-list");

tips.forEach((item) => {
  const card = document.createElement("div");
  card.className = "tip-card";

  card.innerHTML = `
    <h3>${item.theme}</h3>
    <p>${item.tip}</p>
  `;

  tipsList.appendChild(card);
});
