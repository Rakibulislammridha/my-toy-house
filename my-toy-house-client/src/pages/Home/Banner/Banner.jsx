import React, { useEffect } from "react";
import "./Banner.css";
import { FaEdit } from "react-icons/fa";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init();

  }, [])
  return (
    <div 
    className='p-4'
    >
      
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-vector/team-superhero-strong-male-group-power_18591-17886.jpg?w=900")`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-slate-100">
          <div className="max-w-md" data-aos="fade-up" data-aos-delay="100">
            <h1 className="mb-5 text-5xl font-bold">Unleash Your Child's Imagination with <br /> <span className="banner-title">Action figure toys</span></h1>
            <p className="mb-5">
            Welcome to Action figure toys Toy Store, your go-to destination for fun and educational toys that spark creativity and promote learning. Our store features a diverse selection of toys for kids of all ages, from classic board games and puzzles to the latest tech gadgets and toys that encourage exploration and discovery.
            </p>
            <button className="banner-button btn btn-primary">Learn More<FaEdit className="ml-2"></FaEdit> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
