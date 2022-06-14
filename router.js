const Express = require('express');
const { getAll } = require('./controllers/controller.js');

const router = Express.Router();

router.get('/testing', getAll);

module.exports = router;