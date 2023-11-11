import banner from "../../../assets/menu/banner3.jpg";
import Cover from "../../../components/Cover";
import useAllData from "../../../hooks/useAllData";

import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Menu = () => {
  const { pizza, dessert, salad, soup, offered } = useAllData();

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Special Food | Menu</title>
        </Helmet>
      </HelmetProvider>
      <Cover
        img={banner}
        title="Our Menu"
        subtitle="WOULD YOU LIKE TO TRY DISH?"
      />
      <div>
        <SectionTitle title="Today's Offer" subtitle="Don't miss" />
        <MenuCategory items={offered} />
      </div>
      <MenuCategory
        img={dessertBg}
        items={dessert}
        title="DESSERTS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={pizzaBg}
        items={pizza}
        title="PIZZA"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={saladBg}
        items={salad}
        title="SALAD"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={soupBg}
        items={soup}
        title="SOUPS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default Menu;
