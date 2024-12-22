import ProjectsForm from "../features/Project/ProjectsForm";
import Footer from "../ui/Footer";

import Header from "../ui/Header";

import SideBar from "../ui/SideBar";

function Projects() {
  return (
    <>
      <div>
        <Header>我的作品集</Header>
      </div>
      <div>
        <SideBar />
      </div>

      <ProjectsForm />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;
