import Image from "next/image";
import Link from "next/link";

const AllProducts = ({ allProducts }) => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-4 ">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
      {allProducts.map((product) => (
        <div className="card bg-base-100 shadow-xl" key={product.id}>
          <figure
            style={{
              position: "relative",
              width: "100%", // Adjust as needed
              paddingBottom: "75%", // 4:3 aspect ratio (adjust as needed)
              borderRadius: "5px",
            }}
          >
            <Image
              src={product.image}
              alt="Shoes"
              layout="fill"
              objectFit="cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.productName}</h2>
            <p>{product.category}</p>
            <p>Price:{product.price}</p>
            <p>Status:{product.status}</p>
            <p>Rating :{product.rating}</p>
            <div className="card-actions justify-end">
             <Link href=""></Link> <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllProducts;
