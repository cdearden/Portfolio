const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const paths = {
  public: __dirname + '/../client/',
  index: __dirname + '/../client/index.html',
}

app.use(express.static(paths.public));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
