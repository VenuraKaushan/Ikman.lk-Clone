import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import dbConnect from './configs/dbConfig.js';

//initialized express
const app = express();

//server port 
const PORT = process.env.PORT || 6001;

//CORS [allow the request from frontend port 5173]
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

//accept JSONs
app.use(express.json({ limit: "100mb" }));

//config urlEncoded middleware
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
    console.log(`${req.method} =====> URL: ${req.url}`);
    next();
})

//root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to IKMANDOTLK");
})


app.listen(PORT, () => {
    console.log(`🚀💀 Server is started on port ${PORT}!`);
    dbConnect();
})