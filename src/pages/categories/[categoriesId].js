import { useRouter } from 'next/router';
import Category from './Category';

const CategoriesDetailsPage = ({ category }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    // <div>
    //   <h1>{category.name}</h1>
    //   <ul>
    //     {category.products.map((product) => (
    //       <li key={product.id}>
    //         {product.productName} - Price: {product.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <h1>{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {category.products.map((cat) => (
          <Category key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetailsPage;

export async function getStaticPaths() {
  const categories = [1,2,3,4,5,6,7];
  const paths = categories.map((categoryId) => ({
    params: { categoriesId: categoryId.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log(params)
  const { categoriesId } = params;

  // Fetch category data based on categoriesId from your JSON data
  const res = await fetch(`http://localhost:3004/featuredCategories/${categoriesId}`);
  const category = await res.json();

  return {
    props: {
      category,
    },
  };
}
