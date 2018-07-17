import productsReducer from '../../reducers/products';
import products from '../fixtures/products';

test('should set default state', () => {
  const state = productsReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove product with id', () => {
  const action = {
    type: 'REMOVE_PRODUCTS',
    id: products[0].id
  }
  const state = productsReducer(products, action)
  expect(state).toEqual([products[1], products[2]])
})

test('should not remove product if id not found', () => {
  const action = {
    type: 'REMOVE_PRODUCTS',
    id: -1
  }
  const state = productsReducer(products, action);
  expect(state).toEqual(products)
})

test('should add a product', () => {
  const product = {
    id: '100',
    name: 'Samsung Phone',
    description: 'Best phone in the world',
    seller: 'Folababa',
    price: 100,
    createdAt: 100
  }
  const action = {
    type: "ADD_PRODUCTS",
    product
  }
  const state = productsReducer(products, action);
  expect(state).toEqual([...products, product])
})

test('should a edit product', () => {
  const name = 'Infinix Phone';
  const action = {
    type: 'EDIT_PRODUCTS',
    id: products[0].id,
    updates: {
      name
    }
  }
  const state = productsReducer(products, action);
  expect(state[0].name).toBe(name)
})

test('should not edit product if id is not found', () => {
  const name = 'Infinix Phone';
  const action = {
    type: 'EDIT_PRODUCTS',
    id: -1,
    updates: {
      name
    }
  }
  const state = productsReducer(products, action);
  expect(state).toEqual(products)
})

