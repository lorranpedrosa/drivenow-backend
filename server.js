const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Porta do back-end

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o transporte de e-mail com Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu-email@gmail.com', // Substitua pelo seu e-mail
    pass: 'sua-senha-de-app' // Use a senha de app gerada em https://myaccount.google.com/security
  }
});

// Rota para enviar e-mail
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'seu-email@gmail.com', // Para onde o e-mail será enviado
    subject: `Mensagem de ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error: 'Erro ao enviar o e-mail' });
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send({ message: 'E-mail enviado com sucesso!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
