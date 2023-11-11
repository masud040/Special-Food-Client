import PropTypes from "prop-types";
import FoodCard from "../../../components/FoodCard";
const ShopCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};
ShopCategory.propTypes = {
  items: PropTypes.array,
};

export default ShopCategory;
