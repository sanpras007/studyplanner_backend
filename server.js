const {createuser,readuser} = require('./userModule');
const http = require('http');

http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    switch(req.url){
        case "/readuser":
            readuser(req,res);
            break;
        case "/readSpecificUser":
            break;
        default:
            res.write("no route to found");
            res.end();
            break;
    }
}).listen(4000,()=>console.log("server connected to port 4000"));