import type { Metadata } from "next";
import Nav from "../_component/Nav";
import Footer from "../_component/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DH",
  description: "Kim Dong Han Portfolio",
};

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function contantLayout({ children, modal }: Props) {
  return (
    <>
      <header className="fixed z-10 w-full h-1/12 flex items-center justify-center border-b border-slate-300 bg-white">
        <div className="w-24 h-24 relative">
          <Link href="/">
            <Image src={"/logo.png"} fill alt="Logo" />
          </Link>
        </div>
      </header>
      <main className="w-full h-full flex items-center justify-center">
        {children}
      </main>
      {/* <aside className="fixed z-10 right-0 top-0 h-screen w-40 border-l border-slate-300 bg-white">
        <Nav />
      </aside> */}
      <footer className="border-t border-slate-300">
        <Footer />
      </footer>
    </>
  );
}
