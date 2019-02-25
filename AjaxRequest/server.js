const http = require("http");
const fs = require("fs");
const readPage = require('./readPage');

http.createServer((req,res)=>{
	if(req.url === '/Menu1Content'){
		var datastr = "";

		readPage.read('./Header.html').then((value)=>{
			datastr = datastr+value;
			return readPage.read("."+req.url+".html");
		},(err)=>{console.log(err)}).then((value)=>{
			datastr = datastr+value;
			return readPage.read("./Footer.html");
		},(err)=>{console.log(err)}).then((value)=>{
			datastr = datastr+value;
			res.writeHead(200,{
				'Content-Type': 'text/html'
				});
			res.write(datastr);
			res.end();
		},(err)=>{console.log(err)});
	}
	else if(req.url === '/Menu2Content'){
		var datastr = "";

		readPage.read('./Header.html').then((value)=>{
			datastr = datastr+value;
			return readPage.read("."+req.url+".html");
		},(err)=>{console.log(err)}).then((value)=>{
			datastr = datastr+value;
			return readPage.read("./Footer.html");
		},(err)=>{console.log(err)}).then((value)=>{
			datastr = datastr+value;
			res.writeHead(200,{
				'Content-Type': 'text/html'
				});
			res.write(datastr);
			res.end();
		},(err)=>{console.log(err)});		
	}
	else if(req.url === '/AjaxContent'){
		let body = "";
		req.on('data',(chunk)=>{
			body+=chunk;
		}).on('end',()=>{
		    const data = JSON.parse(body);
		    console.log(body);
	        res.writeHead(200,{
			  'Content-Type': 'text/html'
			});
			res.write("<h1 style='text-align: center;'>Ajax Content "+data.menuType+"</h1>");
		    res.end();
		});
	}
}).listen(3000,()=>{
	console.log("I am running");
}); 