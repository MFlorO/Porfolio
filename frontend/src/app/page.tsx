"use server"
import { SideBar } from "@/components/ui";
import { AboutMe, Chat, FormContact, FrontPage, ProjectUI, TryMyBackend } from "@/components";
import { Seccion } from "@/interfaces";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <FrontPage />

      <div className="flex flex-col row-start-2 gap-6 px-12 md:px-28 items-center sm:items-start">
        <SideBar />
        <AboutMe />
        <ProjectUI />

        <div className="w-full h-[950px] py-10 flex flex-col justify-between gap-6 lg:h-[100vh] lg:flex-row lg:gap-1 bg-red"  id={Seccion.CHAT}>
          <Chat />
          <TryMyBackend />
        </div>
      </div>

      <FormContact />
    </main>
  );
}
