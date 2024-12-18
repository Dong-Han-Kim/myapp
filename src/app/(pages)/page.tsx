"use client";

import Intro from "../_component/intro";
import About from "../_component/about";
import Project from "../_component/project";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center relative w-full h-full pt-24">
      <section className="flex w-full h-screen items-center justify-center mb-14">
        <Intro />
      </section>
      <section
        id="about"
        className="flex w-full items-center justify-center mb-14"
      >
        <About />
      </section>
      <section
        id="project"
        className="flex w-full items-center justify-center mb-14"
      >
        <Project />
      </section>
    </div>
  );
}
