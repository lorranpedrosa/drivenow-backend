const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const cors = require('cors');

// Permitir requisições do GitHub Pages
const corsOptions = {
  origin: 'https://drivenow-presentation.github.io', // Substitua pela URL do seu GitHub Pages
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.get('/api/info', (req, res) => {
  res.json({
    systemName: 'DriveNow',
    slogan: 'A LIBERDADE AO SEU ALCANCE',
    functionalities: [
      'Cadastro de Clientes',
      'Cadastro de Veículos - Marcas e Modelos',
      'Gestão de Contratos',
      'Mapa de Reserva'
    ]
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
