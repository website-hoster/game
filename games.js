const library = [
  { id: 'arena', name: '⚔️ Arena — 2P Action', desc: 'Fast WASD vs Arrows battle', file: 'games/arena/index.html' },
  { id: 'platformer', name: '🕹️ Platformer', desc: 'Collect gems and reach the flag', file: 'games/platformer/index.html' },
  { id: 'shooter', name: '🔫 Shooter', desc: 'Top-down shooter (mouse + WASD)', file: 'games/shooter/index.html' },
  { id: 'runner', name: '🏃 Runner', desc: 'Endless runner — space to jump', file: 'games/runner/index.html' },
  { id: 'match3', name: '💎 Match-3', desc: 'Polished match-3 puzzle', file: 'games/match3/index.html' }
];

const grid = document.getElementById('gallery');
library.forEach(g=>{
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="thumb">${g.name.split(' ')[0]}</div>
    <h3>${g.name}</h3>
    <p>${g.desc}</p>
    <div class="row">
      <button class="play" onclick="playGame('${g.file}')">Play</button>
      <button class="info" onclick="showInfo('${g.id}')">Info</button>
    </div>
  `;
  grid.appendChild(card);
});
function playGame(file){ location.href = file; }
function showInfo(id){ const g = library.find(x=>x.id===id); alert(g.name + '\n\n' + g.desc); }
