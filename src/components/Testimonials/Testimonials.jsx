import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "I recently purchased this product, and I must say, it exceeded my expectations.The quality is top-notch, and I can feel the attention to detail in its design. It's been a game-changer in my daily routine, I highly recommend it to anyone considering a purchase!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Shahab-uddin-ghori",
    text: "I was skeptical at first, but after using this product for a few weeks, I can confidently say it's worth every penny. It delivers on its promises and has truly transformed my experience. The functionality is excellent, and I've noticed significant improvements in my workflow since I started using it.",

    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Zohaib Shah",
    text: "This product has been a lifesaver for me. The features are incredibly useful, and it's user-friendly, making it accessible even for beginners. I appreciate how it simplifies tasks and saves me so much time. If you're looking for something reliable and effective, I can't recommend it enough!",

    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Babar Azam",
    text: "I was impressed by the customer service that accompanied my purchase. The team was responsive and helpful, ensuring I had all the information I needed. The product itself is fantastic, and it works as described. It's clear that this company values its customers and stands behind its products.",

    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Testimonials provide valuable insights from customers, showcasing
            their experiences and satisfaction, helping businesses build trust
            and credibility with potential clients.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
