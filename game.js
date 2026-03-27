<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shadow Arena</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>🌑 SHADOW ARENA</header>

<div class="game">

  <!-- Enemy -->
  <div class="enemy">
    <div id="enemyName">👹 Shadow</div>
    <div class="hp-bar">
      <div id="enemyHpBar"></div>
    </div>
  </div>

  <!-- Character -->
  <div class="character" id="char">
    🧑‍🎤
  </div>

  <!-- Attack -->
  <button class="attack-btn" onclick="attack()">⚔️ ATTACK</button>

  <!-- Stats -->
  <div class="stats">
    💰 <span id="coins">0</span> |  
    ⭐ <span id="level">1</span> |  
    ⚔️ <span id="power">1</span>
  </div>

</div>

<script src="game.js"></script>
</body>
</html>
