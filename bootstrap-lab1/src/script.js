const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir automáticamente todo lo de /public
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    let htmlPath = path.join(__dirname, '../public/index.html');
    console.log(`Cargado HTML en ${htmlPath}`);
    res.sendFile(htmlPath);
});

app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.join(__dirname), "../public/favicon.ico");
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});