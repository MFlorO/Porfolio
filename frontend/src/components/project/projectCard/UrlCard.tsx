import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const UrlCard = ({ repoUrl, demoUrl }: { repoUrl?: string, demoUrl?: string | null}) => {
  return (
    <div className="flex gap-3 mt-4">
    {
      repoUrl && 
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-gray-700 p-2 hover:text-black transition"
      >
        <FaGithub className="w-5 h-5 cursor-pointer" />
        GitHub
      </a>
    }
    {
      demoUrl && 
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-sm text-[var(--color-accent-light)] hover:underline dark:text-[var(--color-accent-dark)]"
      >
        <FaExternalLinkAlt className="w-4 h-4 cursor-pointer" />
        Demo
      </a>
    }
    </div>
  )
}

export default UrlCard