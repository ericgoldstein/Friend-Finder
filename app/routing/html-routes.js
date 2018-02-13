var path = require('path');

module.exports = function(app) {
// // Basic route that sends the userto the home page
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  //route to display the survey page - survery.html)
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // If no matching route is found default to home
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};