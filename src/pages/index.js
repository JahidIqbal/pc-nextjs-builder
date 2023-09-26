import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Head from "next/head";
const HomePage = () => {
  return (
    <div>
      <Head>
      </Head>
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