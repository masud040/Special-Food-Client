import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./bestSale.css";
const BestSale = () => {
  return (
    <div className="featured hero  my-16 text-white">
      <div className="hero-overlay bg-opacity-50"></div>
      <div>
        <SectionTitle title="Best sale" subtitle="check it out" />
        <div className="flex flex-col md:flex-row gap-8 items-center px-14  pb-12">
          <img className="w-[300px] mx-auto flex-1" src={featured} alt="" />
          <div className="text-white flex-1 text-center md:text-start">
            <h5 className="text-xl  font-semibold">November 11, 2023</h5>
            <h5 className="text-xl  font-semibold">WHERE CAN I GET SOME?</h5>
            <p className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nobis debitis ratione voluptates quia esse velit minima. Earum eum
              ut, voluptatum molestiae aliquid nulla non iure beatae incidunt
              eveniet veniam architecto est, vero quisquam consectetur
              consequuntur maxime adipisci enim delectus!
            </p>
            <button className="btn btn-ghost border-0 border-b-4 border-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSale;
