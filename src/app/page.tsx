import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600">
      <div className="top flex flex-col md:flex-row items-center justify-center md:justify-start">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mr-10 md:mb-0">
          <Image
            src="/HeadShot.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="me-content flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white mb-2 md:mb-0">
            Hello World!
          </h1>
          <h1 className="text-3xl font-bold text-slate-400 mt-10 md:ml-4">
            Full Stack Developer
          </h1>
          <h1 className="text-6xl font-bold text-white mt-3 md:mt-0">
            Jun Choi
          </h1>
          <hr className="w-full border-1 border-white my-4 md:my-0" />
          <h1 className="text-4xl font-bold text-slate-300 mt-1">
            Let&apos;s get it!
          </h1>
        </div>
      </div>
      <div className="bottom">
        <Navbar />
      </div>
    </main>
  );
}
