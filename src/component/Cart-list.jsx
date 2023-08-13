import { useEffect, useState } from 'react';
import fetchCartList from '../restApi/fetchCartList';
import CartItem from './CartItem';
import removeCart from '../restApi/removeCart';

const CartList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartList()
      .then((data) => {
        if (data?.msg === 'success') {
          setItems(data?.data);
        }
      })
      .catch((err) => console.log('There was an error'));
  });

  const handleRemoveCart = (productID) => {
    removeCart(productID)
      .then((data) => {
        if (data?.msg === 'success') {
          // remove that item from my local store: items

          const remainingItem = items.filter(
            (item) => item.product.id !== productID
          );

          setItems(remainingItem);
        }
      })
      .catch((err) => console.log('There was an Error'));
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {items.map((item) => (
              <CartItem
                key={item?.id}
                product={item?.product}
                remove={handleRemoveCart}
              />
            ))}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: $1,000</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
