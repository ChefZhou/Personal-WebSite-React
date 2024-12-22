import DescriptionMe from "../features/AboutMe/DescriptionMe";
import Footer from "../ui/Footer";

import Header from "../ui/Header";

const AboutMe = () => {
  return (
    <>
      <div>
        <Header>關於我</Header>
      </div>
      <div>
        <DescriptionMe />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutMe;
