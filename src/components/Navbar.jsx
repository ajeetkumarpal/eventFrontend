import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";
import { Contact, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { UserContext } from "../context/userContext";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { userName, setUserName } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const NavLinkHandler = ({ isActive }) => {
    return isActive
      ? "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
      : "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 ";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/services?search=${search}`);
      setSearch("");
      setSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          {" "}
          <h1 className="text-sm font-bold text-pink-600">Indian Events</h1>
        </Link>

        <ul className="flex items-center space-x-6 font-medium">
          <li>
            <NavLink to="/" className={NavLinkHandler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={NavLinkHandler}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={NavLinkHandler}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={NavLinkHandler}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className={NavLinkHandler}>
              Booking
            </NavLink>
          </li>

          <li className="relative">
            {!searchOpen ? (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-white-600 hover:text-gray-600"
              >
                <Search size={20} />
              </button>
            ) : (
              <form
                onSubmit={handleSearch}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3 py-1 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 w-40 sm:w-64"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>
              </form>
            )}
          </li>
        </ul>
        <div className="flex items-center">
          <span className="font-semibold text-pink-700 pr-2">
            {userName
              ? userName.charAt(0).toUpperCase() + userName.slice(1)
              : ""}
          </span>
          <p
            onClick={() => {
              localStorage.removeItem("userName");
              setUserName("");
              navigate("/contact");
            }}
          >
            <IoIosPerson className="h-12 w-12 border bg-pink-600 border-gray-100 rounded-full pb-1" />
          </p>
        </div>
      </div>
    </nav>
  );
}
