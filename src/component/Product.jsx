import { useNavigate } from 'react-router-dom';
import createCart from '../restApi/createCart';

const Product = ({ product }) => {
  const { id, title, image, short_des, price } = product || {};

  const navigate = useNavigate();

  const handleAddCart = () => {
    createCart(id)
      .then((data) => {
        if (data?.msg === 'success') {
          alert('The cart wsa added 😊');
        } else {
          navigate(`/login?productID=${id}`, { state: { goto: '/cart-list' } });
        }
      })
      .catch((err) => console.log('There was an error!'));
  };

  return (
    <div className="card w-100 bg-white shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{title}</h6>
        <p className="text-sm text-gray-400">{short_des}</p>
        <h6 className="font-bold">Price: ${price}</h6>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-outline btn-primary"
            onClick={handleAddCart}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
