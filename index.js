import express from "express";

const app = express()

app.listen(5001,()=> console.log('Api is running in 5001'))

app.get('/',(req,res) => {
    res.json('api is running')
})