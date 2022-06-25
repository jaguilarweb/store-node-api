import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});


app.get('/products', (_req: Request, res: Response) => {
    try {
        res.send('This is the index route')
    } catch(err){
        res.status(400)
        res.json(err)
    }
})

app.get('/products/:id', (_req: Request, res: Response) => {
    try {
        res.send('this is the SHOW route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})
app.post('/products', (req: Request, res: Response) => {
/*     const product: Product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    } */
    try {
        res.send('this is the CREATE route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.put('/products/:id', (req: Request, res: Response) => {
/*     const product: Product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    } */
    try {
        res.send('this it the EDIT route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.delete('/products/:id', (_req: Request, res: Response) => {
    try {
        res.send('This is the DELETE route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})


app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
