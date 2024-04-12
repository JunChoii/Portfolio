"use client";
import Image from "next/image";
import Navbar from "./../Navbar";
import { useState, useEffect } from "react";

export default function AboutMe() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24 bg-slate-600"
      style={{
        backgroundImage: "url('/nightsky.jpg')",
        backgroundAttachment: "fixed", // Ensure background image is fixed
        backgroundRepeat: "no-repeat", // Prevent background image from repeating
        backgroundSize: "cover", // Ensure background image covers the entire area
      }}
    >
      <div className="top w-4/5 md:flex-row items-center justify-center md:justify-start ">
        <div className=" text-lg text-white shadow-2xl shadow-slate-500 pb-40 p-4 bg-gray-900 rounded-lg opacity-95">
          <h1 className="text-4xl font-bold text-white mb-2 md:mb-0">
            Jun Choi
          </h1>

          <br />
          <div className="sm:text-sm">
            I am passionate about programming and web development, I thrive on
            collaborating with others to create innovative solutions.
            <br />
            <br />
            With expertise in a range of technologies including JS, React, Next,
            PHP, MySQL, Sqlite, Node.js, and Neon, I bring a blend of front-end
            and back-end skills to the table. I enjoy the creative process of
            building user-friendly web applications that deliver tangible
            results.
            <br />
            <br />
            My current interests lie in exploring the potential of machine
            learning within web/mobile app development projects. I envision
            leveraging my skills to develop advanced task management systems,
            serving as intuitive assistants for users across various aspects of
            their lives – be it work, academia, or beyond.
            <br />
            <br />
            Eager to embark on new challenges and contribute my expertise to
            dynamic projects, I am open to exciting opportunities in the field
            of programming and beyond.
          </div>
        </div>
      </div>

      <div
        className={`bottom ${showNavbar ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 1s" }}
      >
        {" "}
        <Navbar />
      </div>
    </main>
  );
}
