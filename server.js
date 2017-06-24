/**
 * Created by Administrator on 2017/6/25.
 */
var express=require('express');
var app=express();
app.get('/api/profile',function (req,res) {
  res.json({name:"xiongwei",content:"I love you"})
});
app.listen(8000,function () {
  console.log("server is running at port 8000")
});
