const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {

})
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.log(err));