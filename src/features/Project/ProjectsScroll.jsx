import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import ProjectsData from "./ProjectsData";

function ProjectsScroll() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className="swiper-container w-full h-80 overflow-hidden">
      <div className="swiper-wrapper">
        {ProjectsData.map((project, index) => (
          <div
            key={index}
            className="swiper-slide flex justify-center items-center py-4"
          >
            <a
              href={project.href}
              className="block w-60 h-60 overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.imgSrc}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
              <p className="text-center mt-2">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsScroll;
