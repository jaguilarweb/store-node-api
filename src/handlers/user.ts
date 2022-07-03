import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import {OrderStore} from '../models/order';

import jwt from 'jsonwebtoken';

const store = new UserStore();
const orderStore = new OrderStore();

const index = async(_req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
}

const show = async(req: Request, res: Response) => {
  const user = await store.show(req.params.id);
  res.json(user);
}

const update = async (req: Request, res: Response) => {
  const user: User = {
    id: parseInt(req.params.id),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
  }

  try {
    const editUser = await store.edit(user);
    res.json(editUser);
  } catch (error) {
    res.status(400);
    res.json(error)
  }
}

const create = async (req: Request, res: Response) => {
  const user: User = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  }

  try {
    const newUser = await store.create(user);
    const token = jwt.sign({user: newUser}, process.env.TOKEN_SECRET!);
    res.json(token);
  } catch (error) {
    res.status(400);
    res.json(error)
  }
}

const authenticate = async (req: Request, res: Response) => {
  try {
    const u = await store.authenticate(req.body.lastname, req.body.password);
    const token = jwt.sign({user: u}, process.env.TOKEN_SECRET!);
    res.json(token);

  } catch (error) {
    res.status(401);
    res.json({error});
  }
}

const showByUser = async(req: Request, res: Response) => {
  const orderByUser = await orderStore.orderByUser(req.params.id);
  res.json(orderByUser);
}

const destroy = async (req: Request, res: Response) => {
  const deleted = await store.delete(req.params.id);
  res.json(deleted);
}

const user_route = (app: express.Application) => {
  app.get('/users', index)
  app.get('/users/:id', show)
  app.patch('/users/:id', update)
  app.post('/users', create)
  app.post('/users/authenticate', authenticate)
  app.delete('/users/:id', destroy)
    //Show by user
    app.post('/users/:id/orders', showByUser)
}

export default user_route;
