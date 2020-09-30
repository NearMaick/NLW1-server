import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Maick',
    'Enilda',
    'Tia Neuza',
    'Tia Davi'
  ]);
});

app.listen(3333);
