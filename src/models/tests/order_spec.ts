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

  it('should have an edit method', () => {
    expect(store.edit).toBeDefined();
  });
  
  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

});

describe(" Methods Order Model working", () => {

  beforeAll(async () => {
    await userStore.create({
      id: 4,
      firstname: "Fabian",
      lastname: "Romero",
      password: "password123"
    });
  });

  it('create method should add an Order', async () => {
    const result = await store.create({
      id: 2,
      status: "Active",
      user_id: 4
    });
    expect(result).toEqual({
      id: 2,
      status: "Active",
      user_id: 4
    });
  });

  it("index method should return a list of orders", async() => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 2,
        status: "Active",
        user_id: 4
      }
    ]);
  });

  it('show method should return the correct order ', async () => {
    const result = await store.show("2")
    expect(result).toEqual({
      id: 2,
      status: "Active",
      user_id: 4
    });
  });

  it('should have a delete method', async() => {
    await store.delete("2");
    const result = await store.index();
    expect(result).toEqual([]);
  });

  afterAll(async () => {
    await userStore.delete("4");
  });

});
