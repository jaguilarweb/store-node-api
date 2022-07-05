import { ProductStore } from "../product";

const store = new ProductStore();

describe(" Methods Product Model defined", () => {
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

describe(" Methods Product Model working", () => {
  it('create method should add a product', async () => {
    const result = await store.create({
      id: 2,
      name: "T-shirt",
      price: 45
    });
    expect(result).toEqual({
      id: 2,
      name: "T-shirt",
      price: 45
    });
  });

  it("index method should return a list of products", async() => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 2,
        name: "T-shirt",
        price: 45
      }
    ]);
  });

  it('show method should return the correct product ', async () => {
    const result = await store.show("2")
    expect(result).toEqual({
      id: 2,
      name: "T-shirt",
      price: 45
    });
  });

  it('should have a delete method', async() => {
    await store.delete("2");
    const result = await store.index();
    expect(result).toEqual([]);
  });

});
