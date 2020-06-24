import express from 'express';
const app = express();
import config from './config/environment';
import initializeDB from './config/seed';
import mongoose from 'mongoose';
const connecString = config.getConstants().mongo.uri;
import registerRoutes from './routes';
import cors from 'cors';
require('dotenv').config();

mongoose.connect(connecString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Product database connected successfully.");
    initializeDB();
})
.catch((err)=>{
    console.log(err);
});

//Middlware
app.use(cors());
app.use(express.json());

registerRoutes(app);

app.listen(config.getPort(),()=>{
    console.log("Server is running on port " + config.getPort());
})