import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-black py-4 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-white">Login</h1>
            </div>
            <div className="divide-y divide-gray-700">
              <div className="py-3 text-base leading-6 space-y-4 text-gray-300 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 bg-transparent text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 bg-transparent text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative mt-8">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2 w-full">
                    Submit
                  </button>
                </div>

                <div className="flex justify-center text-lg">or</div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 0 48 48"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M9.827 24c0-1.524.253-2.985.705-4.356l-7.909-6.039C1.082 16.734.214 20.26.214 24c0 3.737.868 7.262 2.407 10.39l7.904-6.051C10.077 26.973 9.827 25.517 9.827 24"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.039c1.823-5.532 7.018-9.511 13.182-9.511"
                    fill="#EB4335"
                  />
                  <path
                    d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51l-7.909 6.039c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.205-2.035 15.312-5.849l-7.507-5.804c-2.118 1.335-4.785 2.053-7.804 2.053"
                    fill="#34A853"
                  />
                  <path
                    d="M46.145 24c0-1.387-.213-2.88-.533-4.267H23.714v9.067H36.318c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24"
                    fill="#4285F4"
                  />
                </g>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* --- Don't have an account? Register --- */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-cyan-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
