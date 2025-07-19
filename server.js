import express from 'express';
import http from 'http'
import next from 'next'
import cors from 'cors'
import { socketsetup } from './socket';
const port = 3000
const nextapp= next();
const handle=nextapp.getRequestHandler();
(async()=>{
await nextapp.prepare();                      //compiles pages and  gets ready for requests.
const app = express();  
app.use(cors());
app.all('*',(req,res)=>{                     //forwards to next js api such as get post update and so on
    return handle(req,res);
})
const httpserver=http.createServer(app);    //http server to attach express with socket.io in same server
const io=socketsetup(httpserver);           //pass http server to socket.js



httpserver.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
})();