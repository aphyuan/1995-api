//require mongoose
var mongoose = require('mongoose');
var Name = mongoose.model('name');

module.exports = {
  index: function(req, res){
    var names = Name.find({}, function(err, data){
      if(err){
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
    var names = Name.findOne({name:req.params.name}, function(err,data){
      if(err){
        res.json(err);
        return;
      }
      res.json(data);
    })
  },
  create: function(req, res){
    var name = new Name({name: req.params.name});
    name.save(function(err, data){
      if(err){
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res){
    Name.remove({name: req.params.name}, function(err){
      if(err){
        res.json(err);
        return;
      }
      res.redirect('/')
    });
  }
}
