import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <div className="product-card border border-gray-200 p-4 rounded-md shadow-md mb-4">
      <figure
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "75%",
          borderRadius: "5px",
        }}
      >
        <Image
          src={category.image}
          alt="Shoes"
          layout="fill"
          objectFit="cover"
        />
      </figure>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
        {category.productName}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Price:{category.price}
      </p>
      <p className="text-gray-600 dark:text-gray-400">{category.status}</p>
      <p className="text-gray-600 dark:text-gray-400">
        Rating: {category.rating}
      </p>
    </div>
  );
};

export default Category;
