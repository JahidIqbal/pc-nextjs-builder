import Image from "next/image";

const AllProducts = ({ allProducts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {allProducts.map((product) => (
        <div className="card bg-base-100 shadow-xl" key={product.id}>
          <figure>
            <Image
              src={product.image}
              alt="Shoes"
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.productName}</h2>
            <p>{product.category}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
