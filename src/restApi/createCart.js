const createCart = async (productId, token) => {
  let response = await fetch(
    `https://cart-api.teamrabbil.com/api/create-cart/${productId}`,
    {
      method: 'GET',
      headers: {
        token: token ?? localStorage.getItem('token'),
      },
    }
  );

  let data = await response.json();

  return data;
};

export default createCart;
