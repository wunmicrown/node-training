"use strict";

require('dotenv').config();

const http = require('http');
const express = require('express');
const multer = require("multer");

// Multer for form-data and file uploads;

const app = express();
const port = process.env.port || 4400;

const server =http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) =>{
    return res.status(200).json({message: 'Tada!'})
})

app.post("/signup", (req,res)=>{
    console.log(req.header('content-type'));
    console.log(req.body);
    console.log(JSON.stringify(req.body));
    return res.status(200).json({message: 'Signup successful!'})
})

app.post("/login", multer().none(),  (req,res)=>{
    console.log(req.body.name);
    console.log(JSON.stringify(req.body));
    return res.status(200).json({message: 'Login successful!'})
})

// server.timeout = 120_000;

server.listen(port, () =>{
    console.log(process.env.port);
    console.log(`App is live and running on port ${port}`);
})
