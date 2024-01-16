"use client";
import { Footer, Navbar } from "@/components/UI";
import React, { useEffect, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { IoMdDocument } from "react-icons/io";
import axios from "axios";
import dynamic from "next/dynamic";

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

  if (!project  ) {
    return <div>
      <div className="loading-infinity"></div>
    </div>;
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
          <div className="border-2 border-white rounded-lg w-[50%]">
            <CodeBlock
              text={`${project.prjCode}`}
              language={project.prjLang}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
              customStyle={{ whiteSpace: "pre-wrap" }}
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
