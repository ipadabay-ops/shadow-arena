let hp = 100;
let coins = 0;
let level = 1;
let power = 1;

const hpEl = document.getElementById("hp");
const coinsEl = document.getElementById("coins");
const levelEl = document.getElementById("level");
const powerEl = document.getElementById("power");
const btn = document.getElementById("attackBtn");
const char = document.getElementById("char");

btn.addEventListener("click", attack);

function attack() {
    // анимация
    char.style.transform = "scale(1.2)";
    setTimeout(() => char.style.transform = "scale(1)", 100);

    let dmg = Math.floor(Math.random() * power) + 1;
    hp -= dmg;

    if (hp <= 0) {
        coins += 50;
        level++;
        power++;
        hp = 100 + level * 20;
    }

    update();
}

function update() {
    hpEl.innerText = hp;
    coinsEl.innerText = coins;
    levelEl.innerText = level;
    powerEl.innerText = power;
}

update();
