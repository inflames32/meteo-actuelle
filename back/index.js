require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const PORT = process.env.PORT || 5050;
const app = express();

// const corsOptions = {
//   credentials: true,
//   origin: 'http://meteo-actuelle.surge.sh'
// }

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));
// app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1) // erase when front is on prod mode

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'My secret',
  cookie: {
    sameSite: "none",
    secure: "none",
  }
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  //res.setHeader('Access-Control-Allow-Origin', 'http://meteo-actuelle.surge.sh');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.urlencoded({ extented: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});
