import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';

const store = new ProductStore();

const index = async(_req: Request, res: Response) => {
  const products = await store.index()
  res.json(products)
}

const create = async (req: Request, res: Response) => {
  const product: Product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  }
  try {
    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (error) {
    res.status(400);
    res.json(error)
  }
}

const product_route = (app: express.Application) => {
  app.get('/products', index)
  app.post('/products', create)
}

export default product_route;