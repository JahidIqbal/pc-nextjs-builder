import RootLayout from "@/components/Layout/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Banner from "@/components/UI/Banner";
import Head from "next/head";
const HomePage = ({allProducts}) => {
  return (
    <div>
      <Head>
      </Head>
      <Banner />
      <AllProducts allProducts={allProducts}></AllProducts>
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
  console.log(data);

  return{
    props:{
      allProducts:data
    },
  }
}