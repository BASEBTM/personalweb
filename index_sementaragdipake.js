const express = require("express");
const app = express();
app.use(express.static(__dirname + "/bolehacc"));
app.use((_, res) => {
  res.status(404);
  res.sendFile(__dirname + "/404.html");
});
console.log("LISTING STARTED")
app.listen(8080);
"";