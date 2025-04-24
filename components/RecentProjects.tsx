"use client";
import { projects } from "@/data";
import { CardProject } from "./ui/CardProject";
import { BentoGridProjects } from "./ui/GridProjects";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Uma pequena seleção dos{" "}
        <span className="text-purple">meus projetos relevantes</span>
      </h1>
      <BentoGridProjects />
    </div>
  );
};

export default RecentProjects;
