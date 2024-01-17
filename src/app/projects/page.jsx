"use client"
import { Footer, Navbar } from "@/components/UI";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  const [projects, setProjects] = useState(null);

  const handleProjectData = async () => {
    try {
      const response = await axios.get(`/api/projects/`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching project data:", error.message);
    }
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">Cell0</div>
          <div className="w-full h-full cell0-content">
            
          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">Cell1</div>
          <div className="w-full h-full cell1-content">
            
          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">Cell2</div>
          <div className="w-full h-full cell2-content">

          </div>
          <div className="w-full h-full mt-10 mb-10 text-2xl font-bold divider">Cell3</div>
          <div className="w-full h-full cell3-content">

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
