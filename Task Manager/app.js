const express = require('express');
const {connectToMongodb} = require('./connection');

const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require("./middlewares/error-handler")

const PORT = process.env.PORT || 3000;

//connection

connectToMongodb('mongodb://localhost:27017/task-manager-app').then(()=>{console.log("MongoDB Connected")}).catch((err)=>{console.log(err)})


//middleware
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get('/home', (req, res) => {
//     res.send("Task Manager app")
// })

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, console.log(`Server started at port ${PORT}`));

