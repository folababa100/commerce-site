export default (products, { text, sortBy }) => {
  return products.filter(product => {
    const textMatch = product.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'createdAt') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'title') {
      return a.title < b.title ? 1 : -1;
    }
  })
}
