const express = require('express')
const welcome = require('./routes/index');
const createRoom = require('./routes/createRoom');

const app = express();

app.use(express.json());
app.use('/api', welcome);
app.use('/createRoom',createRoom);

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;

