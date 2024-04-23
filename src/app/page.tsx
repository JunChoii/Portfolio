import Navbar from "./Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source src="/bubble.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <div className="top flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mr-10 md:mb-0 shadow shadow-white">
            <Image
              src="/avatar.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="me-content flex flex-col items-center">
            <h1 className="text-6xl font-bold text-white mt-10 md:mt-0">
              Jun Choi
            </h1>
            <br />
            <h1 className="sm:text-xl md:text-3xl font-semibold text-slate-400 sm:mt-3 mt-10 md:ml-4">
              Full Stack Developer
            </h1>
            {/* <hr className="w-full border-1 border-white my-4 md:my-0" /> */}
          </div>
        </div>
        {/* TODO: turn the link back on with the PHP */}
        {/* <div className="flex justify-center mt-7">
          <a
            href="/"
            // target="_blank"
          >
            <div className="bg-slate-500 w-80 h-10 rounded-lg text-white flex items-center justify-center shadow shadow-white hover:bg-slate-600">
              Your feedback is appreciated!
            </div>
            <div className="text-red-300 text-xs flex items-center justify-center mt-2">Link not ready yet</div>
          </a>
        </div> */}
            {/* TODO: ABOVE */}

        {/* <div className="flex items-center flex-grow justify-evenly p-10">
          <a href="http://www.linkedin.com/in/junchoiwebdev" target="_blank">
            <Image
              src="/linkedin.png"
              alt=""
              width="50"
              height="50"
              layout=""
              className="rounded-full bg-white"
            />
          </a>
          <a href="https://github.com/JunChoii " target="_blank">
            <Image
              src="/github.png"
              alt=""
              width="50"
              height="50"
              layout=""
              className="rounded-full bg-white"
            />{" "}
          </a>
        </div> */}
        <div className="bottom">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
