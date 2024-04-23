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
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75">
          <h2 className="font-semibold text-white">Volterra</h2>
          <a href="https://volterras.com/" target="_blank">
            <div className="text-green-300 text-xs bg-slate-800 p-2 w-auto hover:bg-slate-500 rounded-lg">
              This will redirect you to the company website.
            </div>
          </a>
          <div className="text-sm text-white mt-3">
            Our team developed a fleet management web application with a focus
            on remote battery monitoring dashboard.
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              Vite
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              AWS RDS
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              AWS Cognito
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              AWS Amplify
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              AWS CloudFront
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              AWS TimeStream
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              SST
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              MySQL
            </div>
            <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
              TypeScript
            </div>
          </div>
        </div>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75">
          <h2 className="font-semibold text-white">FoodSnap</h2>
          <div className="text-red-300 text-xs">Link not ready yet</div>
          <a href="https://github.com/JunChoii/FoodSnap.git" target="_blank">
            <div className="flex h-5 mt-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 flex-shrink-0 "
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="text-white">GitHub</span>
            </div>
          </a>
          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Independently created a culinary showcase platform that allows
              users to share their secret recipes with others.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                Next.js
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                Tailwind
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                TypeScript
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                NeonDB
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                AWS S3
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75">
          <h2 className="font-semibold text-white">CoinTrack</h2>
          <div className="text-red-300 text-xs">Link not ready yet</div>
          <a href="https://github.com/JunChoii/CoinTrack.git" target="_blank">
            <div className="flex h-5 mt-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 flex-shrink-0 "
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="text-white">GitHub</span>
            </div>
          </a>
          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Independently developed an intuitive expense tracking application
              enabling users to effortlessly monitor their expense amount.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                Tailwind
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                NeonDB
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                TypeScript
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75">
          <h2 className="font-semibold text-white">WhiteStone</h2>
          <a href="https://www.whitestone-app.com/" target="_blank">
            <div className="text-green-300 text-xs bg-slate-800 p-2 w-auto hover:bg-slate-500 rounded-lg">
              View WhiteStone
            </div>
          </a>
          <a
            href="https://github.com/WhiteStoneDental/whitestone_IDSP.git"
            target="_blank"
          >
            <div className="flex h-5 mt-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 flex-shrink-0 "
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="text-white">GitHub</span>
            </div>
          </a>
          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Our team developed machine learning dental scanning app for
              colorblind and low income people to help users evaluate their
              dental health to reduce the number of dental checkups by taking
              pictures of their mouths.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                Next.js
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                MediaPipe
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                OpenAI GPT-4 Vision Model
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 h-80 m-4 p-2 bg-slate-900 rounded-lg items-center opacity-75">
          <h2 className="font-semibold text-white">NumberClash</h2>
          <div className=" items-center ">
            <a
              href="https://renumberclash-web-green-dawn-9736.fly.dev/"
              target="_blank"
            >
              <div className="text-yellow-300 text-xs bg-slate-800 p-2 w-auto hover:bg-slate-500 rounded-lg">
                In progress
              </div>
            </a>
            <a href="https://github.com/JunChoii/reNumberClash.git">
              <div className="flex h-5 mt-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 flex-shrink-0 "
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-white">GitHub</span>
              </div>
            </a>
          </div>

          <div className="text-xs text-white">
            <div className="text-sm text-white mt-3">
              Independently created a multiplayer card game with real-time
              capabilities using SignalR for communication, ASP.NET for backend
              operations, and React for the frontend.
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                SignalR
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                React
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                Tailwind
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                MySQL
              </div>
              <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                TypeScript
              </div>
            </div>
          </div>
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
