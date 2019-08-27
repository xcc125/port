const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.post('/reg',function(req,res){
    var obj=req.body;
    if(!obj.uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    if(!obj.email){
        res.send({code:403,msg:'email required'});
        return;
    }
    if(!obj.phone){
        res.send({code:404,msg:'phone required'})
    }
    pool.query('insert into xz_user set ?',[obj],function(err,result){
        if(err) throw err;
        console.log(result);
        res.send({code:200,msg:'register suc'})
    })
})
module.exports=router;

