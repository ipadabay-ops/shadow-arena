let coins = 0;
let power = 1;
let level = 1;

let enemyHp = 100;
let enemyMax = 100;

function update(){
  document.getElementById("coins").innerText = coins;
  document.getElementById("power").innerText = power;
  document.getElementById("level").innerText = level;

  let percent = (enemyHp / enemyMax) * 100;
  document.getElementById("enemyHpBar").style.width = percent + "%";
}

function attack(){
  let char = document.getElementById("char");
  char.classList.add("hit");

  setTimeout(()=>char.classList.remove("hit"),100);

  let dmg = Math.floor(Math.random() * power) + 1;

  enemyHp -= dmg;

  if(enemyHp <= 0){
    coins += 50;
    level++;
    enemyMax += 50;
    enemyHp = enemyMax;
  }

  update();
}

update();
