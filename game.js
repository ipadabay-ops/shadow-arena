let player = {
level:1,
xp:0,
hp:100,
gold:0,
world:1,
inventory:[],
equip:{weapon:"None"},
rarity:["Common","Rare","Epic","Legendary"]
};

function update(){
document.getElementById("stats").innerText =
Lvl ${player.level} | XP ${player.xp}/100 | HP ${player.hp} | World ${player.world};
}

function fight(){
let dmg = Math.floor(Math.random()*25);
player.hp -= dmg;
player.xp += 15;

if(player.xp>=100){
player.level++;
player.xp=0;
player.world = Math.min(4, Math.floor(player.level/10)+1);
alert("LEVEL UP!");
}

if(player.hp<=0){
player.hp=100;
alert("You died!");
}

show("You fought and took "+dmg+" damage");
update();
}

function openChest(){
let items=["Sword","Axe","Bow","Staff"];
let rar = player.rarity[Math.floor(Math.random()*player.rarity.length)];
let item = rar+" "+items[Math.floor(Math.random()*items.length)];
player.inventory.push(item);
show("Got: "+item);
}

function shop(){
player.gold+=10;
show("Shop: +10 gold (test)");
}

function boss(){
let hp=100+player.level*20;
let fight = Math.floor(Math.random()*hp);
show("Boss fight! Damage: "+fight);
}

function tab(t){
show("Opened: "+t);
}

function show(t){
document.getElementById("screen").innerText=t;
}

update();
