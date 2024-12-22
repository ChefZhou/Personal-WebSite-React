import Box from "../../ui/Box";
import ProjectsScroll from "./ProjectsScroll";
import "swiper/swiper-bundle.css";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function HomeProjectsBox() {
  return (
    <Box title="作品集預覽">
      <ProjectsScroll />
      <Link to="/projects">
        <Button className="text-slate-700 hover:text-sky-400">
          點我看更多
        </Button>
      </Link>
    </Box>
  );
}

export default HomeProjectsBox;
