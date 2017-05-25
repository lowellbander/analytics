const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
console.log('Listening on port ', port);
app.listen(port);
