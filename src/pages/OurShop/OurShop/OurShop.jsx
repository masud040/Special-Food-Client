import Cover from "../../../components/Cover";
import shopBanner from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useAllData from "../../../hooks/useAllData";
import ShopCategory from "../ShopCategory/ShopCategory";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
const OurShop = () => {
  const categories = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"];
  const { category } = useParams();
  const initialTabIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  const { pizza, dessert, salad, soup, drinks } = useAllData();
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Special Food | Shop</title>
        </Helmet>
      </HelmetProvider>
      <Cover
        img={shopBanner}
        title="Our Shop"
        subtitle="WOULD YOU LIKE TO TRY A DISH?"
      />

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="text-center my-12 font-bold"
      >
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <ShopCategory items={salad} />
        </TabPanel>
        <TabPanel>
          <ShopCategory items={pizza} />
        </TabPanel>
        <TabPanel>
          <ShopCategory items={soup} />
        </TabPanel>
        <TabPanel>
          <ShopCategory items={dessert} />
        </TabPanel>
        <TabPanel>
          <ShopCategory items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
