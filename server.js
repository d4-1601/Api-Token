const Express = require('express');
require('dotenv').config()

const router = require('./router');

const app = new Express();
const PORT = process.env.PORT;

app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});