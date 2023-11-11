import FoodCard from "../../../components/FoodCard";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const Recommends = () => {
  const { menu } = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle title="Chef Recommends" subtitle="Should Try" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommends;
