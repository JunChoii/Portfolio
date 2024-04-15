"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./../Navbar";
import Image from "next/image";

export default function Projects() {
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
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="top flex flex-wrap justify-center">
        <a href="https://volterras.com/" target="_blank" >
          <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75 hover:border-yellow hover:border-2">
            <h2 className="font-semibold text-white">Volterra</h2>
            <div className="text-green-300 text-xs">
              This will redirect you to the company website.
            </div>
            <div className="text-sm text-white mt-3">
              Our team developed a fleet management web application with a focus
              on remote battery monitoring dashboard.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                Vite
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                AWS RDS
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                AWS Cognito
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                SST
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                MySQL
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                TypeScript
              </div>
            </div>
          </div>
        </a>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75 hover:border-yellow hover:border-2">
          <h2 className="font-semibold text-white">FoodSnap</h2>
          <div className="text-red-300 text-xs">Link not ready yet</div>
          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Independently created a culinary showcase platform that allows
              users to share their secret recipes with others.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                Next.js
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                Tailwind
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                TypeScript
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                NeonDB
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                AWS S3
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75 hover:border-yellow hover:border-2">
          <h2 className="font-semibold text-white">CoinTrack</h2>
          <div className="text-red-300 text-xs">Link not ready yet</div>

          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Independently developed an intuitive expense tracking application
              enabling users to effortlessly monitor their expense amount.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                Tailwind
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                NeonDB
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                TypeScript
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75 hover:border-yellow hover:border-2">
          <a href="https://www.whitestone-app.com/" target="_blank">
            <h2 className="font-semibold text-white">WhiteStone</h2>
            <div className="text-green-300 text-xs">Ready</div>

            <div className="text-xs text-white">
              <div className="text-sm text-white mt-3">
                Our team developed machine learning dental scanning app for
                colorblind and low income people to help users evaluate their
                dental health to reduce the number of dental checkups by taking
                pictures of their mouths.
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  React
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  Next.js
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  MediaPipe
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  OpenAI GPT-4 Vision Model
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75 hover:border-yellow hover:border-2">
          <a
            href="https://renumberclash-web-green-dawn-9736.fly.dev/"
            target="_blank"
          >
            <h2 className="font-semibold text-white">NumberClash</h2>
            <div className="text-yellow-300 text-xs">In progress</div>

            <div className="text-xs text-white">
              <div className="text-sm text-white mt-3">
                Our team developed a fleet management web application with a
                focus on remote battery monitoring dashboard.
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  SignalR
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  React
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  Tailwind
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  MySQL
                </div>
                <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  TypeScript
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className={`bottom ${showNavbar ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 1s" }}
      >
        <Navbar />
      </div>
    </main>
  );
}
