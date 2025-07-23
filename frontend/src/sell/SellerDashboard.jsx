// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AddSellerForm from "./AddSellerForm";
// import AllSellersTable from "./AllSellersTable";

// const SellerDashboard = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("home");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [visaCount, setVisaCount] = useState(0);
// //   const [userCount, setUserCount] = useState(0);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-sans">
//       {/* Mobile Top Bar */}
//       <div className="flex md:hidden items-center justify-between bg-gray-700 px-6 py-4 shadow">
//         <h2 className="text-xl font-bold">Admin Panel</h2>
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="text-2xl font-bold"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "block" : "hidden"
//         } md:block md:w-64 w-full bg-gray-300 p-6 space-y-4 shadow-md`}
//       >
//         <h2 className="text-2xl font-extrabold mb-10 hidden md:block">
//           Seller Panel
//         </h2>

//         {["home", "upload", "list", ].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setSidebarOpen(false);
//             }}
//             className={`w-full text-left px-4 py-3 rounded-md transition ${
//               activeTab === tab
//                 ? "bg-white font-semibold"
//                 : "hover:bg-gray-300"
//             }`}
//           >
//             {tab === "home"
//               ? "Dashboard"
//               : tab === "upload"
//               ? "Add New Form"
//               // : tab === "list"
//               : "All data List"
//               // : tab==="users"
//               // : "User List"
//               // : tab==="pdflist"
//               // ? "pdf Details"
//               // :"Add pdf details"
//             }
//           </button>
//         ))}

//         <button

//           className=" bg-white  font-semibold px-4 py-3 rounded-md hover:bg-gray-500 transition w-full"
//         >
//           Logout
//         </button>
//       </aside>

//       <main className="flex-1 p-6 md:p-10">
//         {activeTab === "home" && (
//           <>
//             <h1 className="text-3xl font-bold text-gray-800 mb-8">
//               Welcome, Seller!
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-black-600">
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   Total data Records
//                 </h3>
//                 <p className="text-4xl font-bold text-gray-900">0</p>
//               </div>
//               <div

//                 className="bg-white rounded-lg p-6 shadow-md border-t-4 border-black-600 cursor-pointer hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                   Total Users
//                 </h3>
//                 <p className="text-4xl font-bold text-gray-900">0</p>
//               </div>
//             </div>
//           </>
//         )}

//         {activeTab === "upload" && (
//           <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-6">
//             <h2 className="text-3xl text-center font-bold mb-4">
//              Add New Form
//             </h2>
//            <AddSellerForm  />
//           </div>
//         )}

//         {activeTab === "list" && (
//           <div className="mt-6">
//             <AllSellersTable />
//           </div>
//         )}
// {/*
//         {activeTab === "users" && (
//           <div className="mt-6">
//             <UserList onSuccess={fetchStats} />
//           </div>
//         )} */}
//         {/* {activeTab === "pdf" && (
//           <div className="mt-6">
//             <CreateVisaPdf />
//           </div>
//         )}
//           {activeTab === "pdflist" && (
//           <div className="mt-6">
//             <PdfList />
//           </div>
//         )} */}
//       </main>
//     </div>
//   );
// };

// export default SellerDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddSellerForm from "./AddSellerForm";
import AllSellersTable from "./AllSellersTable";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white font-sans">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center justify-between bg-gray-800 px-6 py-4 shadow">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl font-bold"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block md:w-64 w-full bg-gray-900 p-6 space-y-4 shadow-md`}
      >
        <h2 className="text-2xl font-extrabold mb-10 hidden md:block text-white">
          Seller Panel
        </h2>

        {["home", "upload", "list"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-md transition ${
              activeTab === tab
                ? "bg-gray-700 font-semibold"
                : "hover:bg-gray-800"
            }`}
          >
            {tab === "home"
              ? "Dashboard"
              : tab === "upload"
              ? "Add New Form"
              : "All Data List"}
          </button>
        ))}

        <button className="bg-gray-700 font-semibold px-4 py-3 rounded-md hover:bg-red-600 transition w-full">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {activeTab === "home" && (
          <>
            <h1 className="text-3xl font-bold text-white mb-8 mt-10 px-20">
              Welcome, Seller!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20">
              <div className="bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-gray-600">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  Total Data Records
                </h3>
                <p className="text-4xl font-bold text-white">0</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-gray-600 cursor-pointer hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  Total Users
                </h3>
                <p className="text-4xl font-bold text-white">0</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "upload" && (
          <div className="max-w-4xl mx-auto">
            <AddSellerForm />
          </div>
        )}

        {activeTab === "list" && (
          <div className="mt-6">
            <AllSellersTable />
          </div>
        )}
      </main>
    </div>
  );
};

export default SellerDashboard;
