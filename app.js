const express = require("express");
const app = express();

const PORT = 8000

app.listen(PORT, (error) => {
    if (error) console.log(error);
    console.log("listening");
  });