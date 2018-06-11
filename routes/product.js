var express = require('express');
var router = express.Router();
var mongo = require("mongoose");  
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });


var Schema = mongo.Schema;  
  
var productsSchema = new Schema({      
 name: { type: String   },       
 category: { type: String   },
 date: { type: String },
 cost:{type: Number}   
},{ versionKey: false });  
   
  
var model = mongo.model('products', productsSchema);  
  
router.post("/saveProduct",function(req,res){   
    console.log(req.body);
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, category: req.body.category, date: req.body.date, cost:req.body.cost},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
})  
  
  
// router.post("/deleteUser",function(req,res){      
//     model.remove({ _id: req.body.id }, function(err) {    
//      if(err){    
//          res.send(err);    
//      }    
//      else{      
//             res.send({data:"Record has been Deleted..!!"});               
//         }    
//  });    
//    })  
  
  
  
 
router.get("/getProducts",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
 
module.exports = router;