import { OrderStore } from '../order';
import { UserStore } from '../user';

const store = new OrderStore();
const userStore = new UserStore();

describe(" Methods Order Model defined", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a edit method', () => {
    expect(store.edit).toBeDefined();
  });
  
  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

});

describe(" Methods Order Model working", () => {

  beforeAll(async () => {
    await userStore.create({
      id: 1,
      firstname: "Fabian",
      lastname: "Romero",
      password: "password123"
    });
  });

  it('create method should add a Order', async () => {
    const result = await store.create({
      id: 1,
      status: "Active",
      user_id: 1
    });
    expect(result).toEqual({
      id: 1,
      status: "Active",
      user_id: 1
    });
  });

  it("index method should return a list of orders", async() => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        status: "Active",
        user_id: 1
      }
    ]);
  });


  it('show method should return the correct order ', async () => {
    const result = await store.show("1")
    expect(result).toEqual({
      id: 1,
      status: "Active",
      user_id: 1
    });
  });

  it('should have a delete method', async() => {
    await store.delete("1");
    const result = await store.index();
    expect(result).toEqual([]);
  });

  afterAll(async () => {
    await userStore.delete("1");
  });

});



