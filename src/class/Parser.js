class Parser {
  static productsData(req) {
    const { title, description, price, thumbnail, code, stock, status, category } = req.body;

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
}
