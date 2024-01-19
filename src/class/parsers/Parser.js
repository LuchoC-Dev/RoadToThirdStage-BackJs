class Parser {
  static productsData(body) {
    const { title, description, price, thumbnail, code, stock, status, category } = body;
    return {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      status: status,
      category: category,
    };
  }

  static cartsData(body) {
    const { products } = body;
    return {
      products: products,
    };
  }
}

export default Parser;
