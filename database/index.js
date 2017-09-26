var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var PetSchema = new Schema({
	name: String,
	species:String,
	description :String,
	image :String,
	username :String,
	email :String,
	number :Number
});

var PetInfo = mongoose.model('petInfo', PetSchema);
module.exports = PetInfo;