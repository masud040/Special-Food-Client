import PropTypes from "prop-types";
import Cover from "../../../components/Cover";
import Menu from "../../../components/Menu";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, subtitle, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} subtitle={subtitle} />}
      <div className="my-16">
        <div className="grid md:grid-cols-2 gap-6 ">
          {items.map((item) => (
            <Menu key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to={`/shop/${title ? title : "SALAD"}`}>
            <button className="btn uppercase border-0 text-lg border-b-4 border-gray-900">
              Order Your Favorite Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.node,
};

export default MenuCategory;
