

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/messages', require('./routes/messages'));

mongoose.connect(process.env.MONGO_URI)
.then(()=> app.listen(process.env.PORT || 5000, ()=>console.log("Server running")))
.catch(err=>console.log(err));
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');

app.use(helmet());
app.use(xss());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use('/api/payfast', require('./routes/payfast'));
