import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import product_route from './handlers/product';
import user_route from './handlers/user';
import order_route from './handlers/order';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various)
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', function (_req: Request, res: Response) {
    res.status(200).send('Welcome, enjoy the api!')
})

/* app.get('/test-cors', cors(corsOptions), function(req, res, next){
    res.json({msg: 'This is CORS_enabled with middleware'})
}) */

// routes
product_route(app)
user_route(app)
order_route(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
