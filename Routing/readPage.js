const fs = require('fs');

exports.read=(filePath)=>{
	return new Promise((resolve,reject)=>{
		fs.readFile(filePath,(err,data)=>{
			if(err) reject(err);
			resolve(data);
		});
	});
}