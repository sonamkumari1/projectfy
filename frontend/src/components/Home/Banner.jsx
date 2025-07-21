// import React from 'react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// function Banner() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between py-20 rounded-lg">

//       <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 my-10 mr-36">
//         <h1 className="font-medium text-5xl text-white mb-4 leading-tight">
//           Sell What You Don’t Need,
//           Buy What You Love.
//         </h1>
//         <p className="text-gray-300 text-lg mt-4 mb-6 ">
//           Our platform makes it easy to declutter, discover, and deal—all in one place.
//           Whether you're finding hidden gems or turning items into cash, it's the smart way to shop and sell.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
//           <div className="relative w-2/5 sm:w-4/5">
//             <MagnifyingGlassIcon className="h-5 w-5 text-zinc-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full pl-10 py-3 rounded-3xl border border-zinc-600  text-white focus:outline-none"
//             />
//           </div>

//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src="/banner.png"
//           alt="Banner Illustration"
//           className="rounded-lg shadow-md max-w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 rounded-lg gap-10">
      <div className="max-w-4xl">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-blue-600 via-red-300 to-yellow-300 inline-block text-transparent bg-clip-text">
          Sell What You Don’t Need,
          <br /> Buy What You Love.
        </h1>

        <p className="text-gray-300 text-lg mt-4">
          Our platform makes it easy to declutter, discover, and deal—all in one
          place. Whether you're finding hidden gems or turning items into cash,
          it's the smart way to shop and sell.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="/banner.png"
          alt="Banner Illustration"
          className="rounded-lg shadow-md max-w-full h-90"
        />
      </div>
    </div>
  );
}

export default Banner;
