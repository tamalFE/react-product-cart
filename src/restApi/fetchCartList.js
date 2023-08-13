const fetchCartList = async () => {
  let response = await fetch('https://cart-api.teamrabbil.com/api/cart-list');

  let object = await response.json();

  return object.data;
};

export default fetchCartList;
