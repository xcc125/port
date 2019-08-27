const express=require('express');
const bodyParse=require('body-parser');
const userRouter=require('./router/user');
var app=express();
app.listen(8080);
app.use(express.static('public'));
app.use(bodyParse.urlencoded({
    extended:false
}));
app.use('/user',userRouter)
