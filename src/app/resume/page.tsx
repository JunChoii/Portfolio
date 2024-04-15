"use client";
import Navbar from "./../Navbar";
import { useState, useEffect } from "react";

export default function Resume() {
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
      }}
    >
      <div className="text-white bg-gray-900 p-1 sm:p-1 w-4/5 rounded-xl opacity-85">
        <div className="top w-4/5 md:flex-row items-center justify-center md:justify-start ">
          <header className="space-y-2">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold  mb-2 md:mb-0">Jun Choi</h1>
              <p className="text-gray-400 dark:text-gray-400">
                Full Stack Web Developer
              </p>
            </div>
            <div className="grid items-start gap-1 text-sm sm:grid-cols-2 sm:justify-end sm:gap-1">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>junability@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Greater Vancouver, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>
                  <a href="https://github.com/JunChoii" target="_blank">
                    GitHub
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>
                  <a href="https://github.com/JunChoii" target="_blank">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
            <br />
          </header>
        </div>
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="border-t border-b border-gray-200 dark:border-gray-800">
              <div className="grid min-h-[200px] items-center ">
                <br />
                <div className="space-y-2 text-sm">
                  <h3 className="text-lg font-bold">Summary</h3>
                  <p className="text-gray-100 dark:text-gray-400">
                    Web developer with a passion for creating clean,
                    maintainable code. Skilled in full-stack web development,
                    particularly with React and Node.js. Strong problem-solving
                    abilities and a collaborative team player. Excited about
                    database design and optimization to ensure efficient data
                    storage and retrieval in web applications.
                  </p>
                </div>
                <br />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Skills</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      JavaScript
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      React
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      Node.js
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      PHP
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      Laravel
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      TypeScript
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      ASP.NET
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      MySQL
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      PostgreSQL
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      AWS RDS
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      AWS Lambda
                    </div>
                    <div className="text-black rounded-lg border border-gray-200 px-3 py-1 text-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
                      AWS S3
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold">Projects</h2>
                <ul className="grid gap-4 list-none">
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">WhiteStone</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      {/* TODO: get this shit done with the actual description of the project */}
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          Next.js · MediaPipe · OpenAI GPT-4 Vision model
                        </p>
                        <p>
                          WhiteStone is a machine learning dental scanning app
                          for colorblind and low income people to help users
                          evaluate their dental health to reduce the number of
                          dental checkups by taking pictures of their mouths.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">FoodSnap</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      {/* TODO: get this shit done with the actual description of the project */}
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          React · Next.js · TypeScript · NeonDB · AWS S3
                        </p>
                        <p>
                          FoodSnap is a platform where users can explore a
                          variety of foods and recipes shared by others. They
                          can upload images or videos of their own culinary
                          creations along with the accompanying recipe,
                          fostering a community of food enthusiasts who enjoy
                          sharing and discovering new dishes. Think of it as a
                          virtual recipe collection.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">Volterra</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          React · MySQL · AWS Lambda · AWS RDS · SST · AWS
                          TimeStream · AWS Cognito · AWS Amplify · AWS
                          CloudFront
                        </p>
                        <p>
                          Our team developed a fleet management web application
                          with a focus on remote battery monitoring dashboard.
                          Our system, FleetAccess RX, offers a holistic view of
                          battery metrics, while FitStar provides real-time
                          insights for informed decision-making. We are dedicated
                          to making fleet management effortless, granting
                          unparalleled access to real-time battery health data,
                          empowering clients to optimize asset performance and
                          longevity.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">NumberClash</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      {/* TODO: get this shit done with the actual description of the project */}
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          ASP.NET · SignalR · React · Tailwind · MySQL ·
                          TypeScript
                        </p>
                        <p>
                          NumberClash is a multiplayer game where players engage
                          in comparing their randomly assigned pairs of numbers,
                          with the higher combination prevailing. It utilizes
                          SignalR for the real-time communication, MySQL for the
                          data management, React for frontend, and ASP.NET for
                          backend technologies.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">Feedback</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      {/* TODO: get this shit done with the actual description of the project */}
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          PHP · Laravel · MySQL
                        </p>
                        <p>
                          Feedback is a web platform designed to gather feedback
                          from viewers who browse through the portfolio. It
                          utilizes MySQL for database management, PHP for
                          server-side scripting, and Laravel as the framework to
                          streamline development and enhance functionality.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* /////////////////////////////////////////////////////////////////// */}
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">Coin Track</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                      {/* TODO: get this shit done with the actual description of the project */}
                      <ul className="list-disc list-inside">
                        <p className="text-gray-400 text-sm">
                          React · Tailwind · NeonDB · TypeScript
                        </p>
                        <p>
                          Independently crafted an intuitive expense tracking
                          application, empowering users to effortlessly monitor
                          their spending. Leveraging React for dynamic user
                          interfaces, Tailwind for streamlined styling, NeonDB
                          for efficient data storage, and TypeScript for
                          enhanced code quality and maintainability.
                        </p>
                      </ul>
                    </div>
                  </li>
                  {/* ///////////////////// */}

                  {/* TODO: get tmore of my projects here*/}
                </ul>
              </div>
              <hr />
              <div className="space-y-2 text-white">
                <h2 className="text-2xl font-semibold">Education</h2>
                <ul className="grid gap-4 list-none">
                  <li>
                    <div className="grid gap-2 mt-10">
                      <h3 className="text-xl font-semibold">
                        British Columbia Institute of Technology
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Full Stack Web Development · Vancouver, CA <br />
                        September 2022 - May 2024
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
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
      </div>
    </main>
  );
}
