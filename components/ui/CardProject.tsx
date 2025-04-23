"use client";
import { cn } from "@/lib/utils";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

type CardProjectProps = {
  id: number;
  title: string;
  description: string;
  img?: string;
  iconLists: string[];
  link: string;
};

export function CardProject({ data }: { data: CardProjectProps }) {
  return (
    <div className="w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-[600px] rounded-md shadow-xl w-full border mx-auto backgroundImage flex flex-col justify-end hover:scale-105 transition-transform duration-300 ease-in-out"
        )}
        style={{
          backgroundImage: `url(${data?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black-100/85 p-4 flex flex-col justify-start items-start w-full gap-2">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {data?.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
            {data?.description}
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-0 lg:flex-row lg:justify-between lg:items-center z-10 ">
            <div className="flex flex-row items-center">
              {data?.iconLists.map((icon, index) => (
                <img
                  key={index}
                  height="100"
                  width="100"
                  alt="Stacks"
                  src={icon}
                  className="h-8 w-8 rounded-full border-2 object-cover"
                />
              ))}
            </div>
            <a href={data?.link} target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Ver projeto"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
