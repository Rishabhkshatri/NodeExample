const http = require("http");
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
}).listen(3000,()=>{
	console.log("I am running");
}); 