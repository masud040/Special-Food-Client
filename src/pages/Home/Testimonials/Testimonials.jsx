import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return (
    <div className="my-16">
      <SectionTitle title="Testimonials" subtitle="What Our Clients Say" />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[500px]"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" my-20 mx-16 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} />
              <FaQuoteLeft className="text-4xl my-5" />
              <p className=" text-sm">{review.details}</p>
              <h1 className="text-yellow-600 text-xl font-semibold uppercase my-2">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
