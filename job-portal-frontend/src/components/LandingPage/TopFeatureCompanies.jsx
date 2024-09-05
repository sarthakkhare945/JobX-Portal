import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import companyimage1 from "../../assets/top_companies_1.png";
import companyimage2 from "../../assets/top_company_img_2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopFeatureCompanies = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-white-100 py-12 md:py-20 px-4 md:px-6 w-full">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top Feature Companies
          </h2>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            y: {
              type: "spring",
              stiffness: 60,
            },
            opacity: {
              duration: 0.2,
            },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              <div className="w-full h-full">
                <img
                  src={companyimage1}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full">
                <img
                  src={companyimage2}
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopFeatureCompanies;
