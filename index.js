let nomePersonagem = "";
let xpPersonagem = 0;
let nivelPersonagem = "";

nomePersonagem = prompt("Digite o nome do personagem:");
xpPersonagem = parseInt(prompt("Digite o seu XP:"));

if(xpPersonagem < 1001)
  nivelPersonagem = "Ferro";
else if (xpPersonagem > 1000 && xpPersonagem < 2001)
  nivelPersonagem = "Bronze";
else if (xpPersonagem > 2000 && xpPersonagem < 5001)
  nivelPersonagem = "Prata";
else if (xpPersonagem > 5000 && xpPersonagem < 7001)
  nivelPersonagem = "Ouro";
else if (xpPersonagem > 7000 && xpPersonagem < 8001)
  nivelPersonagem = "Platina";
else if (xpPersonagem > 8000 && xpPersonagem < 9001)
  nivelPersonagem = "Ascendente";
else if (xpPersonagem > 9000 && xpPersonagem < 10001)
  nivelPersonagem = "Imortal";
else if (xpPersonagem > 10000)
  nivelPersonagem = "Radiante";

console.log("O herói de nome " + nomePersonagem + " está no nível de " + nivelPersonagem );
