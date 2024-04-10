import Navbar from "./../Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600 ">
      <div className="top flex flex-wrap justify-center">
        <div className="w-60 h-60 m-4 p-2 bg-slate-400 rounded-lg flex items-center justify-center">
          <Image
            src="/volterrathumb.png"
            alt=""
            width="300"
            height="300"
            layout=""
            className="object-cover"
          />
        </div>
        <div className="w-60 h-60 m-4 p-2 bg-slate-400 rounded-lg item-center">
          <Image
            src="/foodsnapthumb.png"
            alt=""
            width="300"
            height="300"
            layout=""
            className="object-cover"
          />{" "}
        </div>
        <div className="w-60 h-60 m-4 p-2 bg-slate-400 rounded-lg item-center">
          <Image
            src="/cointrackthumb.png"
            alt=""
            width="300"
            height="300"
            layout=""
            className="object-cover"
          />{" "}
        </div>
        <div className="w-60 h-60 m-4 p-2 bg-slate-400 rounded-lg item-center">
          <Image
            src="/whitestonethumb.png"
            alt=""
            width="300"
            height="300"
            layout=""
            className="object-cover"
          />{" "}
        </div>

        <div className="w-60 h-60 m-4 p-2 bg-slate-400 rounded-lg item-center">
          <Image
            src="/numberclashthumb.png"
            alt=""
            width="300"
            height="300"
            layout=""
            className="object-cover"
          />{" "}
        </div>
      </div>
      <div
        className="bottom md:opacity-5 md:hover:opacity-100"
        style={{ transition: "opacity 2s" }}
      >
        <Navbar />
      </div>
    </main>
  );
}
