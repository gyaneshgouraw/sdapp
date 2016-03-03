var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var myschema = new Schema({ data:Schema.Types.Mixed});

module.exports = mongoose.model('DataCollection', myschema);



