const verifyLogin = async (email, pin) => {
  let response = await fetch(
    'https://cart-api.teamrabbil.com/api/verify-login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserEmail: email,
        OTP: pin,
      }),
    }
  );

  let data = await response.json();

  return data;
};

export default verifyLogin;
