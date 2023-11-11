import { Parallax } from "react-parallax";
import chefService from "../../../assets/home/chef-service.jpg";
const Featured = () => {
  return (
    <div className="my-16">
      <Parallax
        blur={{ min: -40, max: 50 }}
        bgImage={chefService}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[400px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" md:w-4/6 mx-auto bg-white text-neutral p-10  ">
              <h1 className="mb-5 text-5xl font-semibold font-cinzel">
                Bistro Boss
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Featured;
