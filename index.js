const express = require('express');
const app = express();

// my server port number
const PORT = 3000;

app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.render()
});

app.listen(PORT, function () {
  console.log(`app running on http://localhost:${PORT}/`)
});
