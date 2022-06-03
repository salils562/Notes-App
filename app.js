const http=require('http');
const fs=require('fs');
const port=80;
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html');
  if(req.url==='/'){
      res.statusCode=202;
      const home=fs.readFileSync('index.html');
      res.end(home);
  }
  else if(req.url==='/about'){
      res.statusCode=202;

      const about=fs.readFileSync('about.html');
      res.end(about);
  }
  else{
      res.statusCode=404;
      res.end('<h1>Server not found</h1>');
  }
});
server.listen(port,()=>{
    console.log('listening on port: 80 ');
})