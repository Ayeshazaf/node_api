const express=require('express');
const mongoose=require('mongoose');
const app=express();

//route
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/blog',(req,res)=>{
    res.send('Hello World blog');
});



mongoose.connect('mongodb+srv://ayeshazafar5789:12345678admin@cluster0.8p8xy.mongodb.net/NODE-API')
.then(()=>{
    console.log('Database connected');
    app.listen(3000,()=>{
        console.log('Server is running at port 3000');
    })
}).catch((err)=>{
    console.log('Database connection error');
})