const express = require("express");

const app = express();

app.get("/", (request, response, next) => {
  response.send(`
<!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <title>Mon Site</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Home</h1>
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
      <h1>About Us</h1>
      <img src="luffy.png">
    </body>
  </html>`);
});

app.get("/luffy.png", function (request, response, next) {
  response.sendFile(__dirname + "/public/image/luffy.png");
});

app.listen(3000, () => console.log());
app.use(express.static("public"));
