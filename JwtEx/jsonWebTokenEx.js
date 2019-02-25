const express = require("express");
const cookie_parser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
// secrete key
const secrete_key = "Secrete key";
// user list
const site_user = [
	{user: "abc", password: "123"},
	{user: "xyz", password: "456"}
];
app.get('/singIn/:user.:password',(req,res)=>{
	// get the user credential
	let user_obj = req.params
	// check whether the user is valid user or not
	let is_valid_user = false;
	for(i in site_user){
		if(site_user[i]["user"] == user_obj["user"]
			&& site_user[i]["password"] == user_obj["password"]){
			is_valid_user = true;
		}
	}

	if(is_valid_user){
		// generate the token and send the response
		jwt.sign(user_obj,secrete_key,(err,token)=>{
			if(err){
				res.send('Something Went Wrong');
			}
			else{
				res.setHeader('Set-Cookie',"token="+token);
				res.send('User has successfully singed in');
			}
		});
	}else{
		res.send('Invalid User name and password');
	}
});

// parse the cookie
app.use(cookie_parser());
// middleware to varify the token
app.use((req,res,next)=>{
	let Cookie = req.cookies.token;
	// varify the token
	jwt.verify(Cookie,secrete_key,(err,decoded)=>{
		if(err){
			res.send('Unauthorized User');
		}
		else{
			next();
		}
	});
});

app.get('/access',(req,res)=>{
	res.send('accessed');
});

app.listen(8080,()=>{console.log('running')});