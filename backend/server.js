const connectDB = require('./config/db');
const cors = require('cors');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,  { cors: { origin: '*' } });
const port = process.env.PORT || 5000;
app.use(express.json({extended:false}));
app.use(cors({credentials:true, origin:"*"}));

connectDB();
 
app.get('/', (req,res)=>{
  res.send('API running');
});

app.use('/api/common',require('./routes/api/common'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

// const PORT = process.env.PORT || 5000;

// io.on('connection', () =>{
//     console.log('a user is connected')
// })
// console.log(io)
// app.listen(PORT,()=>{
//     console.log(`Server started on ${PORT}`);
// });

http.listen(5000, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

// const socket_server = s_server.listen(5000, () => {
//   console.log('listening on *:5001');
// });


// const io = socketio.listen(socket_server);

// io.on("message",(msg)=>{
//   console.log("msg",msg)
// })

