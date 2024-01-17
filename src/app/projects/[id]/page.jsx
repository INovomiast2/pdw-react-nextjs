"use client";
import { Footer, Navbar } from "@/components/UI";
import React, { useEffect, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { IoMdDocument } from "react-icons/io";
import axios from "axios";
import dynamic from "next/dynamic";
import { FaHtml5 } from "react-icons/fa";

const Idpage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const handleProjectData = async () => {
      try {
        const response = await axios.get(`/api/projects/${params.id}`);
        setProject(response.data);
        if (response.data.prjComponet) {
          console.log("Component name:", response.data.prjComponet);
          // Dynamically import the component using the name from the project data
          const Component = dynamic(() =>
            import(`@/components/projects/cell1/${response.data.prjComponet}`)
              .then((mod) => {
                mod.default.displayName = response.data.prjComponet; // Assign display name
                return mod;
              })
              .catch((err) => {
                console.error("Dynamic import failed", err);
                const ErrorComponent = () => <p>Error loading component.</p>;
                ErrorComponent.displayName = "ErrorComponent"; // Assign display name
                return ErrorComponent;
              })
          );
          setDynamicComponent(() => Component);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    handleProjectData();
  }, [params.id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center">
          <span className="w-32 h-32 loading loading-infinity"></span>
          <h2 className="mt-10 text-2xl font-bold">Loading Project</h2>
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
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">{project.prjName}</h1>
            <p className="mt-2 text-xl text-blue-400 underline hover:cursor-pointer">
              Ver Subject <IoMdDocument className="inline" />
            </p>
          </div>
        </div>
        <div className="text-2xl font-bold divider">Preview</div>
        <div className="flex justify-center">
          <div className="previews bg-slate-900 mt-10 mb-20 h-[600px] w-[50%] border-white border-2 rounded-lg">
            {DynamicComponent && <DynamicComponent />}
          </div>
        </div>
        <div className="text-2xl font-bold divider">Code</div>
        <div className="flex justify-center">
          <span className="transform translate-x-20 translate-y-2.5 text-gray-500 inline  ">{project.prjLang.toUpperCase()} <FaHtml5 className="inline p-0 m-0" /></span>
          <div className="border-2 border-white rounded-lg w-[50%] mt-10 mb-20">
            <CodeBlock
              text={`${project.prjCode.split("\\n").join("\n")}`}
              language={project.prjLang}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Idpage;
