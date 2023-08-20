import { useEffect, useState } from 'react';
import verifyLogin from '../restApi/verifyLogin';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import createCart from '../restApi/createCart';

const OtpPage = () => {
  const [pin, setPin] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const { state } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (state && state.goto && token.length > 0) {
        createCart(state.productID, token)
          .then((res) => {
            console.log({ res });
            navigate(state.goto);
          })
          .catch((err) => {
            console.error(err);
            navigate('/');
          });
      }
    }, 2000);
  }, [token]);

  const handleVerifyLogin = () => {
    setTimeout(() => {
      verifyLogin(email, pin)
        .then((data) => {
          if (data?.msg === 'success') {
            localStorage.setItem('token', data.data);
            setToken(data.data);
            !state && navigate('/');
          }
        })
        .catch((err) => console.log('There was an error'));
    }, 2000);
  };

  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="flex items-center w-full justify-center h-screen">
          <div className="card w-8/12 card-side bg-white shadow-xl">
            <figure>
              <img
                className="h-96 w-96"
                src="/images/login-banner.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <div className="w-8/12">
                <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                <p className="mb-4 text-gray-600 text-sm">
                  4 Digit Verification PIN has been send to your email
                </p>
                <input
                  value={pin}
                  type="text"
                  placeholder="4 Digit Pin"
                  onChange={(e) => setPin(e.target.value)}
                  className="input w-full bg-white rounded-lg input-bordered"
                />
                <button
                  className="btn rounded-lg w-full my-4 btn-primary"
                  onClick={handleVerifyLogin}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
