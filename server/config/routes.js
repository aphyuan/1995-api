var namesController = require('./../../server/controllers/names.js');

module.exports = function(app){
  app.get('/', namesController.index);
  app.get('/new/:name/', namesController.create);
  //do remove later
  app.get('/remove/:name/', namesController.destroy);
  app.get('/:name',namesController.show);
}
