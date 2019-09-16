import express from 'express';
const app = express();
import config from './server/config/environment';
import initializeDB from './server/config/seed';
import mongoose from 'mongoose';
const connecString = config.typeOfProd().mongo.uri;
import registerRoutes from './server/routes';
require('dotenv').config();

mongoose.connect(connecString, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Product database connected successfully.");
    initializeDB();
})
.catch((err)=>{
    console.log(err);
});

//Middlware
app.use(express.json());

registerRoutes(app);

app.listen(config.all(),()=>{
    console.log("Server is running on port " + config.all());
})