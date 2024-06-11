const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde el directorio de la app React
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.send('¡Hola desde el servidor Express!');
});

// Cualquier solicitud que no coincida con la API, se le servirá la app React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});