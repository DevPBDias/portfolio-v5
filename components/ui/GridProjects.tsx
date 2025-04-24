import React from "react";
import { BentoGrid } from "./BentoGrid";
import { CardProject } from "./CardProject";
import { projects } from "@/data";

export function BentoGridProjects() {
  return (
    <BentoGrid className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-4 lg:gap-8">
      {projects.map((item, i) => (
        <CardProject key={i} data={item} />
      ))}
    </BentoGrid>
  );
}
