const express = require("express");
const app = express();

const PORT = 8000

app.listen(PORT, (error) => {
    if (error) return LOGGER.error(error.meesage);
    LOGGER.appStarted(PORT, host);
  });