const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const salonesRoutes = require('./routes/salonesRoutes');
const inmueblesRoutes = require('./routes/inmueblesRoutes');
const personalRoutes = require('./routes/personalRoutes');
const eventosRoutes = require('./routes/eventosRoutes')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/salones', salonesRoutes);
app.use('/inmuebles', inmueblesRoutes);
app.use('/personal', personalRoutes);
app.use('/eventos', eventosRoutes);

module.exports = app;