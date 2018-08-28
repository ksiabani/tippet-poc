const api = require('express').Router() // eslint-disable-line new-cap
const Renderer = require('./renderer')
const fs = require('fs');

// set global CORS
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// index route
api.get('/', (req, res) => {
  const render = new Renderer('app/views/index')
  render()
    .then(html => res.send(html))
    .catch(err => res.send({ status: 500, message: err }))
})

api.post('/mydata', function (req, res) {
  const obj = {
    banner: []
  };
  obj.banner.push(req.body);
  fs.writeFile (__dirname + "/../../src/data/data.json", JSON.stringify(obj), function(err) {
      if (err) throw err;
      res.send('OK')
    }
  );
});

module.exports = api
