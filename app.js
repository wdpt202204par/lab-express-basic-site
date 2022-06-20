const express = require("express");

const app = express();

app.get("/home", (request, response, next) => {
  response.send(`
  <!DOCTYPE html>
    <head>
      <meta charset="UTF-8" />
      <title>Mon Site</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <h1> CAPITAINE DES MUGIWARA !</h1>
      <img src="mugi.png">
      <ul>
      <li><a href="about">Monkey D. Luffy</a></li>
      <li><a href="works"</a>Les Mugiwara</li>
      <li><a href="gear"</a>Gear</li>
      </ul>
    </body>
  </html>`);
});

app.get("/about", (request, response, next) => {
  response.send(`
    <!DOCTYPE html>
      <head>
        <meta charset="UTF-8" />
        <title>Mon Site</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Monkey D. Luffy</h1>
        <img src="luffy.png">
        <div>
      <p>
      Monkey D. Luffy surnommé de manière récurrente Luffy au chapeau de paille (Mugiwara no Rufi),
      <br>est un personnage de fiction et principal protagoniste de la franchise japonaise One Piece 
      <br>créée par Eiichirō Oda. Il est intronisé en tant que garçon ayant un corps élastique, 
      <br>une faculté qu'il a développée après avoir mangé un fruit du démon1. 
      <br>Il est le fondateur et le capitaine de l'équipage de Chapeau de paille. 
      <br>Son rêve de toujours est de devenir le roi des pirates en trouvant le trésor légendaire, 
      <br>le One Piece, laissé par le défunt roi des pirates, Gol D. Roger. Selon lui, 
      <br>le roi des pirates est l'homme le plus libre du monde. 
      <br>Après l'attaque sur Onigashima, il est considéré comme étant l'un des Quatre Empereurs.
      </p>
    </div>
      </body>
    </html>`);
});

app.get("/works", (request, response, next) => {
  response.send(`
    <!DOCTYPE html>
      <head>
        <meta charset="UTF-8" />
        <title>Mon Site</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1> LES MUGIWARA !</h1>
        <img src="team.png">
        <div>
        <p>
        L'Équipage du Chapeau de Paille (麦わらの一味, Mugiwara no Ichimi) est un équipage pirate originaire d'East Blue, 
        <br>bien que leurs membres proviennent de différentes régions. 
        <br>Ils sont l'accent principal et les protagonistes de l'anime et du manga One Piece, 
        <br>et sont dirigés par le protagoniste principal, Monkey D. Luffy. 
        <br>Les "Chapeaux de Paille" se nomment ainsi d'après le Chapeau de Paille de Luffy, 
        <br>qui lui fut donné par Shanks le Roux, et sont d'abord appelés "Pirates au Chapeau de Paille" par Smoker à Alabasta.
        <br>L'équipage naviguait sur le Vogue Merry, leur premier navire d'équipage pirate, jusqu'à l' Arc Water Seven.
        <br>Après l'Arc Enies Lobby, ils reçurent un nouveau navire, le Thousand Sunny. 
        <br>L'équipage est composé actuellement de 10 membres dont la prime totale est de Symbole Berry.gif4.661.000.100.
        </p>
      </div>
        
      </body>
    </html>`);
});

app.get("/gear", (request, response, next) => {
  response.send(`
    <!DOCTYPE html>
      <head>
        <meta charset="UTF-8" />
        <title>Mon Site</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1> Gear !</h1>
        <img src="g2.jpeg">
        <img src="g3.jpeg">
        <img src="g4Sk.jpeg">
        <img src="g5.png">
      </body>
    </html>`);
});

app.get("/mugi.png", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/mugi.png");
});

app.get("/luffy.png", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/luffy.png");
});

app.get("/team.png", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/team.png");
});

app.get("/g2.jpeg", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/g2.jpeg");
});

app.get("/g3.jpeg", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/g3.jpeg");
});

app.get("/g4Sk.jpeg", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/g4Sk.jpeg");
});

app.get("/g5.png", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/g5.png");
});

app.listen(3000, () => console.log());
app.use(express.static("public"));
