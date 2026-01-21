
import useDocumentTitle from "../../../shared/hooks/useDocumentTitle";
import HeroSection from "../components/HeroSection";
import PopularCourse from "../components/PopularCourse";
import MentorFavoris from "../components/MentorFavoris";

const PublicHomePage = () => {
  useDocumentTitle("LMS - Home");

  return (
    <>
      <HeroSection /> 
      <PopularCourse />
      <MentorFavoris />
    </>
  );
};

export default PublicHomePage;
