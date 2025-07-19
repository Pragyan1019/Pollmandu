const { Server }= require('socket.io');
const { cors }=require('cors')
module.exports=function(httpserver){        //accepting http server request and bind http server with socket.io
const io = new Server(httpserver,{
        path:'/socket.io/',
        cors : {origin: 'http://localhost:3000'}                 //allows cross origin request from any origin
        })


    io.on('connection', (socket) => {
  console.log('a user connected');


socket.on('disconnect',() => {
  console.log('a user disconnected');
});
socket.on('error',()=>{
console.log("Error occured:",error);
})
});
return io;
};