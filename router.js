module.exports = app => {

    const application = require('./routes/aplication.js');

    app.use('/', application);

}