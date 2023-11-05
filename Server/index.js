import express from "express";
import mongoose from 'mongoose';
import { PORT , mongoURI } from './config.js';
import router from './routes/bookRouts.js';
import cors from 'cors';
const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handeling cors policy
//option 1 
app.use(cors());
//option 2: Allow custom origins

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['content-type'],

// })) ;
app.get('/',(req,res)=>{
    console.log(req)
    return res.status(200).send("Book store is live")
})
app.use('/books', router)
mongoose.connect(mongoURI).then(()=>{
    console.log("connected to mongoDb")
    app.listen(PORT,()=>{
       console.log("lisning to port 5555")
    })
}).catch((error)=>{
    console.log(error);
    
})