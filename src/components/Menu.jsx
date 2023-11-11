import PropTypes from "prop-types";
const Menu = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex gap-5">
      <img
        className="w-20 h-20 rounded-e-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-lg font-cinzel font-semibold">{name}-----</h3>
        <p className="text-sm">{recipe}</p>
      </div>
      <p className="text-yellow-500 font-semibold text-lg">${price}</p>
    </div>
  );
};
Menu.propTypes = {
  item: PropTypes.object,
};
export default Menu;
