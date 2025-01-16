import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation=useNavigation();
  const location=useLocation();
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Home;
