import Navbar from "./Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source src="/nightsky.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
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
            <h1 className="md:text-6xl font-bold text-white">Hello World!</h1>
            <h1 className="sm:text-xl md:text-3xl font-bold text-slate-400 sm:mt-3 mt-10 md:ml-4">
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
      </div>
    </main>
  );
}
