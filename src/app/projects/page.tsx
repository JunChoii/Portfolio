"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./../Navbar";
import Image from "next/image";

export default function Projects() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className={`bottom ${showNavbar ? 'opacity-100' : 'opacity-0'}`} style={{ transition: "opacity 2s" }}>
        <Navbar />
      </div>
    </main>
  );
}
