import React from 'react';

const Header= () => {
  return (
    <div className="flex items-center justify-between h-24 w-full px-28 bg-black relative mx-auto mt-3">
      <div className="text-zinc-100 font-medium text-4xl flex items-center gap-2">
        Projectfy
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center text-zinc-400 text-sm font-semibold bg-zinc-950 rounded-full backdrop-blur-sm px-16 py-2 overflow-hidden border border-zinc-700">
        {['Home', 'Projects', 'About'].map((item) => (
          <button
            key={item}
            className="hover:text-zinc-100 transition duration-700 px-4 py-1.5 rounded-full relative group isolate"
          >
            <div className="absolute -bottom-5 left-1/3 -translate-x-1/3 duration-700 w-8 h-6 blur-[12px] bg-zinc-700 opacity-0 group-hover:opacity-100 transition -z-10" />
            <div className="absolute -top-5 left-1/3 -translate-x-1/3 duration-700 w-8 h-6 blur-[12px] bg-zinc-700 opacity-0 group-hover:opacity-100 transition -z-10" />
            <span className="z-10 relative text-lg">{item}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        <button className="text-zinc-100 font-medium text-lg hover:text-zinc-300 transition">
          Log In
        </button>
        <button className="text-zinc-100 rounded-full px-5 py-1.5 bg-zinc-950 font-medium text-lg flex items-center transition border border-zinc-700 relative overflow-hidden group">
          Become a seller
          <svg
            className="inline-block ml-2 group-hover:translate-x-2 transition duration-1000"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.325 8.175q-.3-.3-.313-.725t.288-.725q.3-.3.725-.288t.725.313l4.15 4.15q.15.15.213.325t.063.375q0 .2-.063.375t-.213.325l-4.15 4.15q-.3.3-.725.313t-.725-.288Z"
            />
          </svg>
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-3 bg-zinc-100 blur-[18px] group-hover:scale-[3] opacity-0 group-hover:opacity-100 transition duration-1000" />
        </button>
      </div>
    </div>
  );
};

export default Header;
