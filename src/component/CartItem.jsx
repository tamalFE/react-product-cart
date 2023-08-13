const CartItem = ({ product = {}, remove }) => {
  return (
    <div className="card card-side bg-white shadow-xl">
      <figure>
        <img className="w-40" src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{product.title}</h6>
        <h3 className="text-xl font-bold text-gray-700">
          Price: ${product.price}
        </h3>
        <div className="card-actions justify-end">
          <button
            onClick={() => remove(product.id)}
            className="btn btn-sm btn-primary btn-outline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
