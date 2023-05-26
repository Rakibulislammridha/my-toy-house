import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./ImageGallery.css";
import AOS from "aos";

const images = [
  "https://img.freepik.com/premium-vector/superhero-watching-building-city-night-view_18591-17904.jpg?w=740",
  "https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg?w=740&t=st=1684355444~exp=1684356044~hmac=344ee26f1ed2960accbecd996b65e258680a876a74c1a6a201c5e350fd777ac9",
  "https://img.freepik.com/premium-photo/individual-standing-before-crimson-ring-light-fantasy-concept-illustration-painting-generative-ai_743201-10822.jpg?w=1060",
  "https://img.freepik.com/premium-photo/space-battle-spaceships-are-fighting-shooting-from-laser-guns-explosions-sparks-destroyed-spaceship-3d-illustration_86390-8413.jpg?w=900",
  "https://img.freepik.com/premium-photo/mysterious-superhero-wearing-blue-cape-mask-generative-ai_410516-70593.jpg?w=900",
  "https://img.freepik.com/free-vector/powerful-transformer-robot-warrior-standing-with-clenched-fists_1441-3222.jpg?w=1380&t=st=1684667533~exp=1684668133~hmac=566e18b25652512c3a2bc92a88c3ca784040b91c6b3c67bf7b3b47ba7624c51b",
  "https://img.freepik.com/premium-photo/cyberpunk-warrior-man-futuristic-soldier-3d-render-illustration_691560-6127.jpg?w=740",
  "https://img.freepik.com/premium-photo/many-spaceships-outer-space-sci-fi-illustration_691560-1523.jpg?w=740",
  "18ff3424eb7274dcb80c5750caf390751f47a505c344eb5b25b667607bb51483",
  "https://img.freepik.com/premium-photo/zeus-with-lighting-background_860566-7.jpg?w=740",
  "https://img.freepik.com/premium-vector/spider-editabel-3d-text-effect_555652-27.jpg?w=1380",
];

const ImageGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <h2 style={{ fontFamily: "lato" }} className="gallery-title">
        Our Collection Gallery
      </h2>
      <div className="p-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px" columnsCount={3}>
            {images.map((image, i) => (
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                key={i}
                src={image}
                style={{
                  width: "400px",
                  height: "400px",
                  display: "block",
                  cursor: "pointer",
                }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ImageGallery;
