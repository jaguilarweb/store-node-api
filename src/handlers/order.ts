import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';
import jwt from 'jsonwebtoken';

const store = new OrderStore();

const index = async(_req: Request, res: Response) => {
  const orders = await store.index();
  res.json(orders);
}

const show = async(req: Request, res: Response) => {
  const order = await store.show(req.params.id);
  res.json(order);
}

const create = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization!;
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET!);
  } catch(err) {
      res.status(401);
      res.json('Access denied, invalid token');
      return
  }

  const order: Order = {
    id: parseInt(req.body.id),
    status: req.body.status,
    user_id: parseInt(req.body.user_id)
  }
  try {
    const newOrder = await store.create(order);
    res.json(newOrder);
  } catch (error) {
    res.status(400);
    res.json(error)
  }
}

const update = async (req: Request, res: Response) => {
  const order: Order = {
    id: parseInt(req.params.id),
    status: req.body.status,
    user_id: parseInt(req.body.user_id)
  }

  try {
    const editProduct = await store.edit(order);
    res.json(editProduct);
  } catch (error) {
    res.status(400);
    res.json(error)
  }
}

const addProduct = async(req: Request, res: Response)=> {
  const orderId: string = req.params.id
  const productId: string = req.body.productId
  const quantity: number = parseInt(req.body.quantity)

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId);
    res.json(addedProduct)
  } catch (error) {
    res.status(400)
    res.json(error)
  }
}

const destroy = async (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization!
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(token, process.env.TOKEN_SECRET!)
  } catch(err) {
    res.status(401)
    res.json('Access denied, invalid token')
    return
  }

  try {
      const deleted = await store.delete(req.params.id)
      res.json(deleted)
  } catch (error) {
      res.status(400)
      res.json({ error })
  }
}

const order_route = (app: express.Application) => {
  app.get('/orders', index)
  app.get('/orders/:id', show)
  app.patch('/orders/:id', update)
  app.post('/orders', create)
  app.delete('/orders/:id', destroy)
  //Add product
  app.post('/orders/:id/products', addProduct)

}

export default order_route;
