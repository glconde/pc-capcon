fetch("awesome.json")
  .then((res) => res.json())
  .then((people) => {
    const container = document.getElementById("team");
    people.forEach((person) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${person.image}" alt="${person.name}" class="profile-img" />
        <h3>${person.name}</h3>
        <div class="links">
          <a href="${person.linkedin}" target="_blank">LinkedIn</a>
          <a href="${person.github}" target="_blank">GitHub</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Error loading people:", err);
  });
