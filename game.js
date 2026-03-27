let coins = parseInt(localStorage.getItem("coins")) || 0;
let power = parseInt(localStorage.getItem("power")) || 1;
let level = parseInt(localStorage.getItem("level")) || 1;

let enemyHp = 100;
let enemyMax = 100;

const enemies = [
  "👹 Shadow Slime",
  "🕷 Dark Spider",
  "💀 Void Warrior",
  "🔥 Hell Beast"
];

function update(){
  document.getElementById("coins").innerText = coins;
  document.getElementById("power").innerText = power;
  document.getElementById("level").innerText = level;
  document.getElementById("enemyHp").innerText = enemyHp;
}

function save(){
  localStorage.setItem("coins", coins);
  localStorage.setItem("power", power);
  localStorage.setItem("level", level);
}

function attack(){
  let crit = Math.random() < 0.2;
  let dmg = power;

  if(crit){
    dmg *= 3;
    showText("CRIT HIT 💥 " + dmg);
  } else {
    showText("-" + dmg);
  }

  enemyHp -= dmg;
  if(enemyHp <= 0){
    coins += 50 * level;
    level++;
    spawnEnemy();
  }

  save();
  update();
}

function spawnEnemy(){
  enemyHp = enemyMax + (level * 50);
  enemyMax = enemyHp;

  let e = enemies[Math.floor(Math.random()*enemies.length)];
  document.getElementById("enemy").innerText = e;
}

function upgrade(){
  if(coins >= 50){
    coins -= 50;
    power++;
    save();
    update();
  }
}

function healBoss(){
  if(coins >= 100){
    coins -= 100;
    enemyHp += 150;
    update();
  }
}

function skin(name){
  alert("Skin equipped: " + name);
}

function showText(t){
  let el = document.getElementById("damageText");
  el.innerText = t;
  setTimeout(()=> el.innerText="", 600);
}

// Telegram init
let tg = window.Telegram.WebApp;
tg.expand();

update();
spawnEnemy();
