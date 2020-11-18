import express from 'express';
import data from './data'
const app = express();
app.get("/api/products",(req,res)=>{
    res.send(data.featuredProd);
});

app.listen(8080, ()=> {console.log("server started at http://localhost:8080")})