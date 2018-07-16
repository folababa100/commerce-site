import uuid from 'uuid';

export const addProduct = (
  {
    name = '',
    description = '',
    seller = '',
    price = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_PRODUCTS',
  product: {
    id: uuid(),
    name,
    description,
    seller,
    price,
    createdAt
  }
})
