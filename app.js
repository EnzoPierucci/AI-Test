// librerie
const express = require('express');
const bodyParser = require('body-parser');

// app Express
const app = express();
const port = 3000; // Porta  server 

// Configuriamo body-parser per analizzare i dati delle richieste JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definiamo una  risposta per le richieste GET alla radice
app.get('/', (req, res) => {
  res.send('Benvenuto! Sono il tuo assistente personale.');
});

// Definiamo una rotta per gestire le richieste POST di ricerca
app.post('/search', (req, res) => {
  const query = req.body.query; // Otteniamo il testo della ricerca dall'utente

  // Qui andremo ad eseguire la ricerca utilizzando un motore di ricerca (da implementare)
  
  const searchResults = `Hai cercato: "${query}"`;
  res.send(searchResults);
});

//server 
app.listen(port, () => {
  console.log(`Il server è in esecuzione su http://localhost:${port}`);
});
