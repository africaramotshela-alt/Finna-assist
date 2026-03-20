require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/donations', require('./routes/donations'));

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(process.env.PORT || 5000, () => console.log('Server running')))
.catch(err => console.log(err));
