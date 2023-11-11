import useMenu from "./useMenu";

const useAllData = () => {
  const { menu } = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return { pizza, dessert, salad, soup, drinks, offered };
};

export default useAllData;
