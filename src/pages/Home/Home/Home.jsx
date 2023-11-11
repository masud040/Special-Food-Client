import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import ContactNum from "../ContactNum/ContactNum";
import Recommends from "../Recommends/Recommends";
import BestSale from "../BestSale/BestSale";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Special Food | Home</title>
        </Helmet>
      </HelmetProvider>
      <Banner />
      <Category />
      <Featured />
      <PopularMenu />
      <ContactNum />
      <Recommends />
      <BestSale />
      <Testimonials />
    </div>
  );
};

export default Home;
