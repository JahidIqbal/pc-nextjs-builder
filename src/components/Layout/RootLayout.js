import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Banner from "../UI/Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
