import { Project } from "@/domain/entities/Project";
import ImagesCard from "./ImagesCard";
import UrlCard from "./UrlCard";
import StackCard from "./StackCard";

export default function ProjectCard({ title, summary, stack, images, repoUrl, demoUrl }: Project) {
  return (
    <div className=" 
      w-full h-full 
      flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md 
      hover:shadow-xl transition-shadow duration-300 overflow-hidden
    "
    >
      <ImagesCard images={images} title={title ?? ""} />

      <div className="flex flex-col w-full min-h-[50%] h-full p-4">
        <h2 className="text-lg font-bold text-[var(--color-accent-light)] mb-1">{title}</h2>
        <p className="text-gray-700 text-sm mt-3 flex-1 overflow-hidden line-clamp-3">{summary}</p>
        
        <StackCard stack={stack} />
        <UrlCard repoUrl={repoUrl} demoUrl={demoUrl} />
      </div>

    </div>
  );
}
