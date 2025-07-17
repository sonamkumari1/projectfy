import React from "react";

function ProjectCard() {
    const originalPrice = 49000;
    const discountPercentage = 16;
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return (
        <div className="relative w-full max-w-sm bg-black border border-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Discount Badge */}
            <div className="absolute top-1 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded z-10">
                {discountPercentage}% OFF
            </div>

            <a href="#">
                <img
                    className="rounded-t-lg transition duration-300 hover:scale-105 object-cover w-full h-50" // <-- Smaller image height
                    src="https://assignmentbro.com/wp-content/uploads/2022/12/Project-Management-Assignment-Topics.png"
                    alt="project"
                />
            </a>

            <div className="px-5 py-5">
                <a href="#">
                    <h5 className="text-2xl font-semibold tracking-tight text-white hover:text-gray-300 transition">
                        Project Management - Key Topics for Success
                    </h5>
                </a>

                {/* Ratings */}
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <svg
                            className="w-4 h-4 text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-800 text-white text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                        5.0
                    </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-white">₹{discountedPrice.toLocaleString()}</span>
                        <span className="line-through text-gray-400 text-sm ml-2">
                            ₹{originalPrice.toLocaleString()}
                        </span>
                    </div>
                    <a
                        href="#"
                        className="text-white bg-zinc-900 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
