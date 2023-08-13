const removeCart = async (productId) => {
  let response = await fetch(
    `https://cart-api.teamrabbil.com/api/remove-cart/${productId}`,
    {
      method: 'GET',
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  );

  let data = await response.json();

  return data;
};

export default removeCart;
