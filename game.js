let player = {
  level: 1,
  hp: 100,
  maxHp: 100,
  xp: 0,
  gold: 0,
  inventory: []
};

function updateUI() {
  document.getElementById("stats").innerText =
    Lvl ${player.level} | XP ${player.xp} | Gold ${player.gold};

  document.getElementById("hpFill").style.width =
    (player.hp / player.maxHp) * 100 + "%";
}

function log(text) {
  document.getElementById("screen").innerHTML = `
    <h2>${text}</h2>
    <div id="hpBar"><div id="hpFill"></div></div>
  `;
  updateUI();
}

/* ⚔ FIGHT */
function fight() {
  let dmg = Math.floor(Math.random() * 25);
  let xp = Math.floor(Math.random() * 20);

  player.hp -= dmg;
  player.xp += xp;
  player.gold += 10;

  if (player.xp >= 100) {
    player.level++;
    player.xp = 0;
    player.maxHp += 20;
    player.hp = player.maxHp;
  }

  log(`⚔ You fought! -${dmg} HP +${xp} XP`);
  updateUI();
}

/* 🧰 CHEST */
function chest() {
  let items = ["Sword", "Shield", "Bow", "Potion"];
  let item = items[Math.floor(Math.random() * items.length)];

  player.inventory.push(item);

  log(`🧰 You got ${item}`);
  updateUI();
}

/* 🛒 SHOP */
function shop() {
  if (player.gold >= 20) {
    player.gold -= 20;
    player.hp = player.maxHp;
    log("🛒 Full heal bought!");
  } else {
    log("❌ Not enough gold");
  }
  updateUI();
}

/* 👹 BOSS */
function boss() {
  let win = Math.random() > 0.5;

  if (win) {
    player.level++;
    player.gold += 50;
    log("👹 Boss defeated!");
  } else {
    player.hp -= 30;
    log("👹 Boss hit you!");
  }

  updateUI();
}

/* 🎮 NAV */
function tab(type) {
  if (type === "inv") {
    log("🎒 " + player.inventory.join(", "));
  }

  if (type === "char") {
    log(`🧍 Level ${player.level} HP ${player.hp}`);
  }

  if (type === "world") {
    log("🌍 Worlds: Forest / Desert / Ice / Shadow");
  }

  if (type === "pvp") {
    log(player.level >= 5 ? "⚔ PvP UNLOCKED" : "🔒 PvP at level 5");
  }
}

updateUI();
