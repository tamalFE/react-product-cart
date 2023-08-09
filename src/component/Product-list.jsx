import { fetchProducts } from '../restApi/fetchProducts';
import Loader from './Loader';
import Product from './Product';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // Decide what to render
  let output;

  if (error) {
    output = <div>There is an Error</div>;
  } else if (products?.length > 0) {
    output = products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  } else {
    output = <div>There is no Products!</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {(output = products?.length > 0 ? output : <Loader />)}
      </div>
    </div>
  );
};

export default ProductList;
