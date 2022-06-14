const Express = require('express');

const router = Express.Router();

router.get('/testdata', (req, res) => {
  res
    .status(200)
    .send('Good Morning')
    .end();
});

module.exports = router;