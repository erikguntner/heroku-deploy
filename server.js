const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// BOdyparser middleware
app.use(bodyParser.json());

// DB congic
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected....'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items);

//Serve static assets if we're in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on ${port}`));
