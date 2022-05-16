const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Este es mi test npm</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 Este Webserver esta listo. Entrar a http://localhost:${port}`));