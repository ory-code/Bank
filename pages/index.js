
import Banner from "../components/Banner";
import Billing from "../components/Billing";
import Business from "../components/Business";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="index" >
     <NavBar/>
     <Banner/>
     <Business/>
     <Billing/>
    </div>
  );
}
