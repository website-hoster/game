function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function play(url) {
  const frame = document.getElementById("game-frame");
  frame.src = url;
  frame.style.display = "block";
  frame.scrollIntoView({ behavior: "smooth" });
}

// Optional: live search
document.getElementById("search").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const match = card.innerText.toLowerCase().includes(term);
    card.style.display = match ? "block" : "none";
  });
});
