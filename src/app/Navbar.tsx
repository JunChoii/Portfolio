import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto w-full md:w-3/4 lg:w-3/4 xl:w-3/4 rounded-2xl mb-5 p-4 bg-slate-800 text-white flex justify-between ">
      <div className="flex items-center flex-grow justify-evenly">
        <a href="/" className="">
          <Image
            src="/home.png"
            alt=""
            width="70"
            height="50"
            layout=""
            className="object-cover rounded-lg p-3 bg-neutral-300"
          />
          <p className="mt-2 text-xs flex justify-center">Home</p>
        </a>
        <Link href="/aboutme">
          <Image
            src="/aboutme.png"
            alt=""
            width="70"
            height="50"
            layout=""
            className="object-cover rounded-lg p-3 bg-neutral-300"
          />{" "}
          <p className="mt-2 text-xs flex justify-center">About me</p>
        </Link>
        <Link href="/projects" className="">
          <Image
            src="/projects.png"
            alt=""
            width="70"
            height="50"
            layout=""
            className="object-cover rounded-lg p-3 bg-neutral-300"
          />{" "}
          <p className="mt-2 text-xs flex justify-center">Projects</p>
        </Link>
        <Link href="/resume" className="">
          <Image
            src="/resume.png"
            alt=""
            width="70"
            height="50"
            layout=""
            className="object-cover rounded-lg p-3 bg-neutral-300"
          />{" "}
          <p className="mt-2 text-xs flex justify-center">Resume</p>
        </Link>
        {/* <Link href="/contact" className="">
          <Image
            src="/phone.png"
            alt=""
            width="70"
            height="50"
            layout=""
            className="object-cover rounded-lg p-3 bg-neutral-300"
          />{" "}
          <p className="mt-2 text-xs flex justify-center">Contact</p>
        </Link> */}
      </div>
    </nav>
  );
}
