import Link from "next/link";

const AllCategories = ({ allCategories }) => {
    return (
        <div>
      <h1 className="text-center text-5xl mt-4 ">Featured Categories</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
      {allCategories.map((category) => (
        <div className="card shadow-xl" key={category.name}>
          <div className="card-body">
          <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    );
};

export default AllCategories;