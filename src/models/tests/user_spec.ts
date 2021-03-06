import { UserStore } from "../user";

const store = new UserStore();

describe(" Methods User Model defined", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });
  
  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

});

describe(" Methods User Model working", () => {

  it('create method should add a user', async () => {

    const result = await store.create({
      id: 5,
      firstname: "Fabian",
      lastname: "Romero",
      password: "password123"
    });
    expect(result).toEqual({
      id: 5,
      firstname: "Fabian",
      lastname: "Romero",
      password: result.password
    });
  });

  it("index method should return a list of users", async() => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 5,
        firstname: "Fabian",
        lastname: "Romero",
        password: result[0].password
      }
    ]);
  });


  it('show method should return the correct user ', async () => {
    const result = await store.show("5")
    expect(result).toEqual({
      id: 5,
      firstname: "Fabian",
      lastname: "Romero",
      password: result.password
    });
  });

  it('should have a delete method', async() => {
    await store.delete("5");
    const result = await store.index();
    expect(result).toEqual([]);
  });

});
