import ProjectsData from "./ProjectsData";
import Box from "../../ui/Box";

function ProjectsForm() {
  return (
    <Box title="作品集">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectsData.map((project, index) => (
          <div key={index} className="flex flex-col items-center py-4">
            <a
              href={project.href}
              className="block w-60 h-60 overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.imgSrc}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
            </a>
            <div className="text-center mt-2">
              <p className="font-bold">{project.title}</p>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default ProjectsForm;
