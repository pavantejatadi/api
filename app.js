var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");
app.get("/results",function(req,res){
	var search=req.query.search;
	var url="https://api.covid19api.com/summary";
	request(url,function(error,response,body){
		if(!error && response.statusCode==200)
			{
				var data=JSON.parse(body);
				console.log(data.totalResults);
				res.render("results",{data:data});
			}
	})
});
app.get("/",function(req,res){
	res.render("form");

});
app.listen(3000,function()
		  {console.log("sre")});	
