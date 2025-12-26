// Sidebar.jsx
import React, { useState } from "react";
import { Home, User, Settings, Inbox, Cross, Menu, X, Users, LibraryBig, WalletCards, BellRing, BookUser, ContactRound } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "dashboard" },
    { name: "Leads / Enquires", icon: <Users size={20} />, path: "dashboard/leads" },
    { name: "Courses", icon: <LibraryBig size={20} />, path: "dashboard/courses" },
    { name: "Payments", icon: <WalletCards size={20} />, path: "dashboard/payments" },
    { name: "Contact Management", icon: <ContactRound size={20} />, path: "dashboard/contacts" },
    { name: "Notifications", icon: <BellRing size={20} />, path: "dashboard/notifications" },
    { name: "Settings", icon: <Settings size={20} />, path: "dashboard/settings" },
    { name: "Roles & Permissions", icon: <BookUser size={20} />, path: "dashboard/users" },
  ];

  return (
    <section>
      <div className={`flex flex-col h-screen bg-gray-800 text-white transition-width duration-300 ${isOpen ? "w-64" : "w-20"}`}>
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className={`text-xl font-bold ${!isOpen && "hidden"}`}>MyApp</span>
          <button
            className="p-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 flex flex-col mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 mx-2 rounded hover:bg-gray-700`
              }
            >
              {item.icon}
              <span className={`${!isOpen && "hidden"}`}>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <button className="w-full p-2 rounded bg-gray-700 hover:bg-gray-600">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
