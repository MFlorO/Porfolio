"use client";
import React from "react";
import { Seccion } from "@/interfaces";
import MouseTrail from "./MouseTrail";

interface Props {
  title: string;
  role: string;
  button: string;
}

const FrontPageClient: React.FC<Props> = ({ title, role, button }) => {

  return (
    <section
      className="relative z-1 w-full h-screen flex flex-col items-center justify-center text-center px-8 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] overflow-hidden"
      id={Seccion.PORTADA}
    >
      <MouseTrail />

      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        {title}{" "}
        <span className="text-[var(--color-accent-light)] dark:text-[var(--color-accent-dark)]">
          Florencia Oldani
        </span>
      </h1>
      <p className="text-xl sm:text-4xl text-gray-700 dark:text-gray-300">{role} Full Stack</p>
      <div className="flex mt-4">
        <a
          href="#projects"
          className="flex flex-col text-[var(--color-accent-light)] hover:text-black dark:hover:shadow-lg dark:hover:text-white dark:text-[var(--color-accent-dark)] disabled:text-gray-400 disabled:hover:text-gray-400"
        >
          <p>{button}</p>
          <p className="animate-bounce mt-2">↓</p>
        </a>
      </div>
    </section>
  );
};

export default FrontPageClient;
