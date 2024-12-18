import Image from "next/image";
import { works } from "../_asset/works";

export default function Project() {
  return (
    <div className="mb-8 flex flex-col">
      <div className="animate-title_down text-xl my-6 text-center">
        <h3>Project</h3>
      </div>
      <div className="inline-flex flex-col">
        {works.map((work) => {
          return (
            <div
              id={work.id}
              className="relative text-black flex items-center mb-4"
              key={work.id}
            >
              <div className="w-80 h-52 relative">
                <Image src={work.imgsrc} fill alt="projectImage" />
              </div>
              <div className="ml-3 leading-relaxed">
                <h3 className="">{work.name}</h3>
                <p>{work.skill}</p>
                <p>{work.description}</p>
                <p>{work.site}</p>
                <p>{work.github}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
