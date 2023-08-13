const fetchCartList = async () => {
  let response = await fetch('https://cart-api.teamrabbil.com/api/cart-list', {
    method: 'GET',
    headers: {
      token: localStorage.getItem('token'),
    },
  });

  let data = await response.json();

  return data;
};

export default fetchCartList;
