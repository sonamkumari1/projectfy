import React from "react";

function ProjectDashboard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen bg-black">
      {/* Left Side */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Simplify Selling Projects, <br /> Maximize Your Success.
        </h1>
        <p className="text-gray-300 mb-6">
          Easily list your projects for sale, connect with interested buyers, and grow your business faster. Our platform helps you organize, promote, and sell your projects with efficiency and confidence.
        </p>
        <button className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-blue-700 transition">
          Sell Projects
        </button>
      </div>

      {/* Right Side */}
      <div>
        <img
          src="/logosell.png"
          alt="Sell Your Projects"
          className="rounded-lg shadow-lg w-[400px] h-auto"
        />
      </div>
    </div>
  );
}

export default ProjectDashboard;
