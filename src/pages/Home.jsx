import Footer from "../ui/Footer";

import Header from "../ui/Header";
import HomeProjectsBox from "../features/Project/HomeProjectsBox";

import SideBar from "../ui/SideBar";
import SkillsBox from "../ui/SkillsBox";

function Home() {
  return (
    <>
      <div>
        <Header>Denny Zhou的個人網站</Header>
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <SkillsBox />
      </div>
      <div>
        <HomeProjectsBox />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
