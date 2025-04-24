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

export const CardProject = ({ data }: { data: CardProjectProps }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-gray-900 dark:bg-black-200 dark:shadow-none h-[450px] lg:h-[550px] 2xl:h-[600px] mt-10"
      )}
    >
      <div className="flex flex-row items-center w-full h-[220px] lg:h-[280px] 2xl:h-[370px]">
        <img
          alt={data?.title}
          src={data?.img}
          className="w-full h-full rounded-t-lg object-cover"
        />
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2 px-4 py-2 flex flex-col justify-center items-start gap-3 w-full">
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
        <div>
          <h4 className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {data?.title}
          </h4>
          <p className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {data?.description}
          </p>
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
  );
};
