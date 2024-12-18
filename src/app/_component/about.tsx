import Image from "next/image";

export default function About() {
  return (
    <div className="flex my-0 mx-auto">
      <section className="p-3">
        <div className="mb-4">
          <h3 className="text-2xl my-2 animate-title_down">ABOUT ME</h3>
          <p>안녕하세요.</p>
          <p>
            정체되지 않고 꾸준히 성장하는 프론트엔드 개발자가 되고 싶은
            김동한입니다.
          </p>
          <p>방문해주셔서 감사합니다.</p>
        </div>
        <div>
          <h3 className="text-2xl my-2 animate-title_down">EDUCATION</h3>
          <ul>
            <li className="flex justify-between">
              <div>레드콩</div>
              <div className="text-neutral-400 text-xs">2024.08 ~ 2024.12</div>
            </li>
            <li className="flex justify-between">
              <div>충청 ICT취·창업 역량강화 프로그램</div>
              <div className="text-neutral-400 text-xs">2023.10 ~ 2023.11</div>
            </li>
            <li className="flex justify-between">
              <div>중원대학교 경찰행정학과</div>
              <div className="text-neutral-400 text-xs">2011.02 ~ 2018.02</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-3 bg-slate-300">
        <div>
          <h3 className="text-2xl my-2 animate-title_down">SKILL</h3>
          <div>
            <div className="mb-3">
              <div>
                <h5 className='relative after:content-[""] after:w-full after:h-0.5 after:bg-black'>
                  Basic
                </h5>
              </div>
              <div className="flex mt-3">
                <div className="w-12 h-12 relative">
                  <Image src={"/HTML.png"} fill alt="HTML" />
                </div>
                <div className="w-12 h-12 relative">
                  <Image src={"/CSS.png"} fill alt="CSS" />
                </div>
                <div className="w-12 h-12 relative">
                  <Image src={"/js.svg"} fill alt="JavaScript" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <h5 className='relative after:content-[""] after:w-full after:h-0.5 after:bg-black'>
                  Library & Framework
                </h5>
              </div>
              <div className="flex mt-3">
                <div className="w-12 h-12 relative">
                  <Image src={"/React.svg.png"} fill alt="React" />
                </div>
                <div className="w-12 h-12 relative">
                  <Image src={"/next.svg"} fill alt="Next.js" />
                </div>
                <div className="w-12 h-12 relative">
                  <Image src={"/tailwindcss.svg"} fill alt="Tailwind-css" />
                </div>
                <div className="w-12 h-12 relative">
                  <Image src={"/reactquery.svg"} fill alt="React Query" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <h5 className='relative after:content-[""] after:w-full after:h-0.5 after:bg-black'>
                  Database
                </h5>
              </div>
              <div className="flex mt-3">
                <div className="w-12 h-12 relative">
                  <Image src={"/firebase-48.svg"} fill alt="firebase" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <h5 className='after:content-[""] after:w-full after:h-0.5 after:bg-black'>
                  etc
                </h5>
              </div>
              <div className="flex mt-3">
                <div className="w-12 h-12 relative">
                  <Image src={"/github.png"} fill alt="firebase" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
