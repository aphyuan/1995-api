var mongoose = require('mongoose');

//basic models
var nameSchema = new mongoose.Schema({
  name:{type:String, required:true, minlength:3}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

mongoose.model('name', nameSchema);
