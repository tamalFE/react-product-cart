const userLogin = async (email) => {
  let response = await fetch('https://cart-api.teamrabbil.com/api/user-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserEmail: email,
    }),
  });

  let data = await response.json();

  return data;
};

export default userLogin;
