
var ObjectModel = require('../models/object.model');
module.exports = function(app){
    app.get('/',(req,res)=>{
        res.render('layout');
    });

    app.post('/create',function(req,res){
        if (!req.body.name || !req.body.point || !req.body.mssv){
            res.json({err:1,data:{}});
            return;
        }
        var object = new ObjectModel({
            name:req.body.name,
            point:req.body.point,
            hash:req.body.hash,
            tokenId:req.body.mssv,
        });
        object.save(function(value){
            if (value){
                res.json({err:2,data:{}});
            } else {
                res.json({err:0,data:value});
            }
        });
    });

    app.post('/update',function(req,res){
        if (!req.body.name || !req.body.point || !req.body.mssv){
            res.json({err:1,data:{}});
            return;
        }
        console.log(req.body.name,req.body.point,req.body.mssv);
       ObjectModel.updateOne({tokenId:req.body.mssv},{$set:{name:req.body.name,point:req.body.point}}).then(function(value){
           res.json({err:0,data:value});
       });
    });

    app.get('/token/:tokenId',function(req,res){
        if (!req.params.tokenId){
            res.json({err:1,data:{}});
            return;
        }
        ObjectModel.findOne({tokenId:req.params.tokenId}).then(function(value){
            if(!value){
                res.json({err:2,data:{}});
                return;
            }
            res.json({err:0,data:value});
        });
    });
}