import express from 'express';
const app = express();
import config from '../environment';
import initializeDB from './seed';
import register_routes from './routes';
import cors from 'cors';
require('dotenv').config();

app.use(cors());
app.use(express.json());

register_routes(app);

app.listen('3000',()=>{
    console.log("Server is now running on port 3000");
    initializeDB();
});