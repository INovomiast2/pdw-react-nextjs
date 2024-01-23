"use client";
import { Footer, Navbar } from "@/components/UI";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Add the import statement for axios
import Card from "@/components/UI/jsx/Card";

const ProjectsPage = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const handleProjectData = async () => {
      try {
        const response = await axios.get(`/api/projects/`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching project data:", error.message);
      }
    };

    handleProjectData();
  }, []);

  if (!projects) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center">
          <span className="w-32 h-32 loading loading-bars"></span>
          <h2 className="mt-10 text-2xl font-bold">Loading Projects</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">
            Cell0
          </div>
          <div className="flex justify-center w-full">
            <div className="grid w-full grid-cols-3 gap-4 cell0-content">
              {projects &&
                projects
                  .filter((project) => project.prjCell === "cell0")
                  .map((project, index) => (
                    <Card
                      key={index}
                      cardTitle={project.prjName}
                      cardDesc={project.prjDesc}
                      projectId={project._id}
                      imgLink={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-BSiZFviiBzLQJlHnBDX8PfsKwNwuyGVAk1PiBUiKw&s`}
                    />
                  ))}
            </div>
          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">
            Cell1
          </div>
          <div className="flex justify-center w-full ml-52">
            <div className="grid w-full grid-cols-3 gap-4 cell1-content">
              {projects &&
                projects
                  .filter((project) => project.prjCell === "cell1")
                  .map((project, index) => (
                    <Card
                      key={index}
                      cardTitle={project.prjName}
                      cardDesc={project.prjDesc}
                      projectId={project._id}
                      imgLink={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-BSiZFviiBzLQJlHnBDX8PfsKwNwuyGVAk1PiBUiKw&s`}
                    />
                  ))}
            </div>
          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">
            Cell2
          </div>
          <div className="flex justify-center w-full ml-52">
            <div className="grid w-full grid-cols-3 gap-4 cell2-content">
              {projects &&
                projects
                  .filter((project) => project.prjCell === "cell2")
                  .map((project, index) => (
                    <Card
                      key={index}
                      cardTitle={project.prjName}
                      cardDesc={project.prjDesc}
                      projectId={project._id}
                      imgLink={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-BSiZFviiBzLQJlHnBDX8PfsKwNwuyGVAk1PiBUiKw&s`}
                    />
                  ))}
            </div>
          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">
            Cell3
          </div>
          <div className="flex justify-center w-full ml-52">
            <div className="grid w-full grid-cols-3 gap-4 cell3-content">
              {projects &&
                projects
                  .filter((project) => project.prjCell === "cell3")
                  .map((project, index) => (
                    <Card
                      key={index}
                      cardTitle={project.prjName}
                      cardDesc={project.prjDesc}
                      projectId={project._id}
                      imgLink={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-BSiZFviiBzLQJlHnBDX8PfsKwNwuyGVAk1PiBUiKw&s`}
                    />
                  ))}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default ProjectsPage;
