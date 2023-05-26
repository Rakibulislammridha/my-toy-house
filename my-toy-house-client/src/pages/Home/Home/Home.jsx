import React from "react";
import Banner from "../Banner/Banner";
import ImageGallery from "../ImageGallery/ImageGallery";
import CategoryTab from "../ShopByCategory/CategoryTab";
import DiscoverCollection from "../DiscoverCollection/DiscoverCollection";
import OurFranchise from "../OurFranchise/OurFranchise";
import useTitle from "../../../hooks/useTitle";

const Home = () => {

    useTitle("Home")

  return (
    <div>
      <Banner></Banner>
      <ImageGallery></ImageGallery>
      <CategoryTab></CategoryTab>
      <DiscoverCollection></DiscoverCollection>
      <OurFranchise></OurFranchise>
    </div>
  );
};

export default Home;
