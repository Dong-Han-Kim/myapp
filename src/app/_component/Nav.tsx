"use client";

import { MenuBar } from "../_asset/icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef, useState } from "react";
import clsx from "clsx";
import { GitHub, Mail } from "../_asset/icons";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const segment = useSelectedLayoutSegment();
  const toggleRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const listHandler = () => {
    if (menu) {
      setMenu(false);
    }
  };

  return (
    <nav className="inline-flex flex-col justify-center items-center w-full h-full">
      <ul
        className="flex flex-col justify-center items-center w-full h-full"
        ref={toggleRef}
        onClick={listHandler}
      >
        <li
          className={clsx(
            "flex items-center justify-center w-28 h-12",
            segment === null && "bg-black text-white rounded-md"
          )}
        >
          <Link href="/">Home</Link>
        </li>

        <li
          className={clsx(
            "flex items-center justify-center w-28 h-12",
            segment === "about" && "bg-black text-white rounded-md"
          )}
        >
          <Link href="/about">About</Link>
        </li>

        <li
          className={clsx(
            "flex items-center justify-center w-28 h-12",
            segment === "project" && "bg-black text-white rounded-md"
          )}
        >
          <Link href="/project">Project</Link>
        </li>

        <li
          className={clsx(
            "flex items-center justify-center w-28 h-12",
            segment === "comment" && "bg-black text-white rounded-md"
          )}
        >
          <Link href="/comment">Comment</Link>
        </li>
      </ul>
      <ul className="flex items-center justify-center w-full gap-2.5 mb-5">
        <li className="w-8 relative">
          <Link
            href={"mailto:dh32110@naver.com"}
            className="w-full inline-block"
          >
            <Mail />
          </Link>
        </li>
        <li className="w-8 relative">
          <Link
            href={"https://github.com/Dong-Han-Kim"}
            className="w-full inline-block"
          >
            <GitHub />
          </Link>
        </li>
      </ul>
      {/* <div>
        <Link href={"/admin/login"}>관리자모드</Link>
      </div> */}

      <button
        className={`${menu ? "hidden w-8 h-8" : "inline-block"}`}
        onClick={toggleMenu}
      >
        <MenuBar />
      </button>
    </nav>
  );
}
