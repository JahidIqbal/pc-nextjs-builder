const Category = ({category}) => {
  return (
    <div className="product-card">
      <h2>{category.productName}</h2>
      <p>Price: {category.price}</p>
    </div>
  );
};

export default Category;
