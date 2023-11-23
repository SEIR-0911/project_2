const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = new FormData(form);

  const goalData = {};
  payload.forEach((value, key) => {
    goalData[key] = value;
  });

  fetch("/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goalData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.message, data.goal);

      renderGoal(data.goal);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});

function renderGoal(goal) {
  const goalsContainer = document.getElementById("goals-container");

  const goalElement = document.createElement("div");
  goalElement.innerHTML = `<p>${goal.title}</p><p>${
    goal.level
  }</p><p>${new Date(goal.date).toDateString()}</p>`;

  goalsContainer.appendChild(goalElement);
}
