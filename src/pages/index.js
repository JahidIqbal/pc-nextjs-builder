import RootLayout from "@/components/Layout/RootLayout";
import AllCategories from "@/components/UI/AllCategories";
import AllProducts from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Head from "next/head";
const HomePage = ({allProducts,allCategories}) => {
  return (
    <div>
      <Head>
      </Head>
      <Banner />
      <AllProducts allProducts={allProducts}></AllProducts>
      <AllCategories allCategories={allCategories}></AllCategories>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}


export const getStaticProps=async()=>{
  const res=await fetch("http://localhost:3004/featuredProducts");
  const data=await res.json();
  const categories = await fetch('http://localhost:3004/featuredCategories');
  const categoriesdata=await categories.json();
  // console.log(categoriesdata);

  return{
    props:{
      allProducts:data,
      allCategories:categoriesdata
    },
  }
}



// export const getServerSideProps=async()=>{
//   const res=await fetch("http://localhost:3000/api/products");
//   const data=await res.json();
//   console.log(data);
//   const categories = await fetch('http://localhost:3005/FeaturedCategories');
//   const categoriesdata=await categories.json();
//   // console.log(categoriesdata);

//   return{
//     props:{
//       allProducts:data.data,
//       allCategories:categoriesdata
//     },
//   }
// }