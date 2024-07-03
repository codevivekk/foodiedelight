import express from 'express';
import connect from './database/conn.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import resturantRouter from './router/resturant.router.js';


const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
};

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors(corsOptions));
app.use(resturantRouter)
const port = process.env.PORT || 8080;



connect().then(() => {
    try{
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    }catch(error){
        console.log("Can't connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database Connection...!")
})

