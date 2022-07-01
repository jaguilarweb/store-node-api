import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import product_route from './handlers/product';
import user_route from './handlers/user';
import order_route from './handlers/order';


const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', function (_req: Request, res: Response) {
    res.send('Hello World!')
})

// routes
product_route(app)
user_route(app)
order_route(app)



app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
