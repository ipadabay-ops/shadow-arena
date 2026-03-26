let player = {
  level: 1,
  hp: 100,
  maxHp: 100,
  xp: 0,
  gold: 0,
  inventory: []
};

const rarities = ["Common", "Rare", "Epic", "Legendary"];
const items = ["Sword", "Axe", "Bow", "Staff", "Armor"];

function updateUI() {
  document.getElementById("stats").innerText =
    Lvl ${player.level} | XP ${player.xp} | Gold ${player.gold};

  document.getElementById("hpFill").style.width =
    (player.hp / player.maxHp) * 100 + "%";
}

/* 💥 DAMAGE EFFECT */
function hitEffect() {
  document.body.classList.add("hit");
  setTimeout(() => document.body.classList.remove("hit"), 300);
}

/* ⚔ FIGHT */
function fight() {
  let dmg = Math.floor(Math.random() * 25);
  let xp = Math.floor(Math.random() * 20);

  player.hp -= dmg;
  player.xp += xp;
  player.gold += 10;

  hitEffect();

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
function openChest() {
  let item = items[Math.floor(Math.random() * items.length)];
  let rarity = rarities[Math.floor(Math.random() * rarities.length)];

  player.inventory.push(`${rarity} ${item}`);

  log(`🧰 You got: ${rarity} ${item}`);
  updateUI();
}

/* 🛒 SHOP */
function shop() {
  if (player.gold >= 30) {
    player.gold -= 30;
    player.hp = player.maxHp;
    log("🛒 Full heal bought!");
  } else {
    log("❌ Not enough gold!");
  }
  updateUI();
}

/* 👹 BOSS */
function boss() {
  let bossHp = 80;
  let dmg = Math.floor(Math.random() * 40);

  bossHp -= dmg;

  if (bossHp <= 0 || Math.random() > 0.5) {
    player.level++;
    player.gold += 100;
    log("👹 Boss defeated! +1 Level +100 Gold");
  } else {
    player.hp -= 40;
    log("👹 Boss hit you!");
  }

  updateUI();
}

/* 🌍 WORLDS */
function tab(name) {
  if (name === "world") {
    log("🌍 Worlds: Forest | Desert | Ice | Shadow Realm");
  }

  if (name === "inv") {
    log("🎒 Inventory: " + player.inventory.join(", "));
  }

  if (name === "char") {
    log(`🧍 Level ${player.level} | HP ${player.hp}/${player.maxHp}`);
  }

  if (name === "pvp") {
    if (player.level >= 5) {
      log("⚔ PvP UNLOCKED!");
    } else {
      log("🔒 PvP unlocks at level 5");
    }
  }
}

function log(text) {
  document.getElementById("screen").innerHTML = `
    <h2>${text}</h2>
  `;
}

updateUI();
