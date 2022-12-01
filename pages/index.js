import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Billing from "../components/Billing";
import Business from "../components/Business";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="index">
      <Head>
        <title>Bank code by Sacha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Banner />
      <Business />
      <Billing />
      <AboutUs />
      <Footer />
    </div>
  );
}
