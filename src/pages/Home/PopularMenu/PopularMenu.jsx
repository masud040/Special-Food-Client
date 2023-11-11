import Menu from "../../../components/Menu";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const { menu } = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-16">
      <SectionTitle title="From our menu" subtitle="Check it out" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((item) => (
          <Menu key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="uppercase font-semibold text-lg btn border-0 border-b-4 border-gray-800 ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
