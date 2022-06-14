const Express = require('express');
const Jwt = require('jsonwebtoken');
require('dotenv').config()

const router = require('./router');

const app = new Express();
const PORT = process.env.PORT || 3006;

app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Hey running on http://127.0.0.1:${PORT}`);
});