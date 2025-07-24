import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

function Projects() {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/project/category/${category}`
        );
        setProjects(res.data.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, [category]);

  // Filtered projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-28 pt-16 px-28">
      <div className="mb-20 flex gap-20 items-center px-8 flex-wrap">
        <h1 className="text-4xl font-bold text-white">
          {category.charAt(0).toUpperCase() + category.slice(1)} Projects
        </h1>

        <div className="relative w-[700px] max-w-full">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-14 text-white py-3 border border-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={22}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
