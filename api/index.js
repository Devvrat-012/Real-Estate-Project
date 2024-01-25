import express from "express";

const port = 3000;
const app = express();

app.listen(port, ()=>{
    console.log(`Your app is running on the port ${port}`)
})