const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const indexRouter = require('./routes/index');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
