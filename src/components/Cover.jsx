import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 30 }}
      bgImage={img}
      bgImageAlt="Category"
      strength={-200}
    >
      <div className="hero h-[400px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[350px] md:w-[600px] bg-black bg-opacity-40 p-10">
            <h1 className="mb-2 text-5xl font-bold font-cinzel">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
Cover.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Cover;
