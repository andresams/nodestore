const debug = require('debug')('app');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  debug(`NodeJS Express server running on port ${server.address().port}`);
});
