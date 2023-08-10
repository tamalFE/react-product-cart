const fetchProducts = async () => {
  let response = await fetch(
    'https://cart-api.teamrabbil.com/api/product-list'
  );

  let object = await response.json();

  return object.data;
};

export default fetchProducts;
