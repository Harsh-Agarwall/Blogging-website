const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://cloudst:qOxafJzd99AWz4ty@cluster1.b3s4zil.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', require('./routes/auth'));
app.use('/posts', require('./routes/posts'));

app.listen(5000, () => console.log('Server running on port 5000'));
