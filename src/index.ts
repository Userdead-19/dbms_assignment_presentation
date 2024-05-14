import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import cors from "cors";
import morgan from 'morgan';
const ApiRouter = require('./Router/ApiRouter');
dotenv.config();



mongoose.connect(process.env.MONGOURL || '').then(() => {
    console.log('Connected to mongoDB');
}).catch((err) => {
    console.log('Error connecting to mongoDB');
    console.log(err);
}
);
const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*'
}))

app.use("/api", ApiRouter)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port ' + 3000);
});