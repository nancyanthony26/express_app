import express from "express";
import morgan from "morgan";
import errorhandler from "errorhandler";
import cors from "cors";
import router from './router';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use('/api', router);


app.get('/', (req,res) => {
   res.send('Hello')
})


if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

export default app;





