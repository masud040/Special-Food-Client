import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, recipe, image } = item || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions mt-3">
          <button className="btn uppercase text-yellow-600 font-semibold text-lg border-0 border-b-4 border-yellow-700 hover:bg-gray-700 duration-1000 transition-all">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
