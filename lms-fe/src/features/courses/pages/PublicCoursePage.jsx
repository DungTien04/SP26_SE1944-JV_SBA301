
import HeroSection from "../../public-site/components/HeroSection";
import { Outlet } from "react-router-dom";

const PublicCoursePage = () => {
 
  // Call API

  return (
    <>
      <HeroSection />
      <Outlet />
    </>
  );
};

export default PublicCoursePage;
