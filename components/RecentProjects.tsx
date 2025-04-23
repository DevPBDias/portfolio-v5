"use client";
import { projects } from "@/data";
import { CardProject } from "./ui/CardProject";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Uma pequena seleção dos{" "}
        <span className="text-purple">meus projetos relevantes</span>
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:p-12 gap-6 mt-10">
        {projects.map((item) => (
          <CardProject data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
