import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div>
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden "
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-700 rounded-tr-3xl ">
          <ul className="space-y-2 font-medium">
            <li onClick={closeSidebar}>
              <NavLink
                to="/"
                className="flex items-center p-2 text-white rounded-lg hover:text-black  hover:bg-slate-200"
              >
                <span className="ms-3 text-3xl font-bold">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/30 z-30"
        ></div>
      )}

      <div
        className={`p-7 sm:ml-64 ${isSidebarOpen ? "pointer-events-none" : ""}`}
      >
        {<Outlet />}
      </div>
    </div>
  );
}
