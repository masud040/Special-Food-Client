import PropTypes from "prop-types";
const SectionTitle = ({ title, subtitle, center }) => {
  return (
    <div
      className={
        center
          ? "text-center md:w-4/12 mx-auto"
          : "text-center md:w-4/12 mx-auto my-8"
      }
    >
      <p className="text-yellow-600 mb-4">---{subtitle}---</p>
      <h1 className="border-y-4 py-2 text-3xl uppercase font-semibold font-inter">
        {title}
      </h1>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionTitle;
