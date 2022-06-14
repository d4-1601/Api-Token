const axios = require('axios');
const DataModel = require('../models/model.js');

const TOKEN = process.env.BEARERTOKEN;

async function onSubmit(res) {
  const output = res.data.data;
  const result = await DataModel.insertMany(output)
};

const postData = axios({
  method: 'POST',
  url: 'http://54.221.58.163/api/channels',
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  }
})
  .then((response) => {
    onSubmit(response)
  })
  .catch((err) => {
    console.log(err);
  })

const getAll = async (req, res) => {
  try {
    const allData = await DataModel.find({});
    res.status(200).send(allData);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

module.exports = { getAll };