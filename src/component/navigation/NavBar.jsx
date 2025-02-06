import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import MainBar from "./MainBar";
import { NavLink } from "react-router-dom";
import SideBarMenuButton from "./SideBarMenuButton";

const navigation = [
  { name: "Home", target: "/home", current: true },
  { name: "Interview", target: "/interviews", current: false },
  { name: "About US", target: "/about-us", current: false },
  { name: "Contact US", target: "/contact-us", current: false },
  // { name: "Test", target: "/test", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {


  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 bg-white fixed w-[100vw] z-10 top-0 shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <SideBarMenuButton />
          </div>

          {/* Main Bar */}
          <MainBar />
        </div>
      </div>

      {/* Mobile Menu (DisclosurePanel) */}
      <DisclosurePanel className="sm:hidden z-20 bg-white dark:bg-gray-800 shadow-lg">
        <div className="space-y-1 px-2 pb-3 pt-2 z-50">
          {navigation.map((item) => (
            <DisclosureButton
              as={NavLink}
              key={item.name}
              to={item.target}
              aria-current={item.current ? "page" : undefined}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-indigo-600 to-purple-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium w-full transition-all duration-300 ease-in-out transform hover:scale-105"
                )
              }
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* Signin Button */}
          <DisclosureButton
            as={NavLink}
            to="/signin"
            className="block w-full"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-2 my-2 px-4 rounded-md text-center transition-all duration-300 ease-in-out transform hover:scale-105">
              Signin
            </div>
          </DisclosureButton>

          {/* Signup Button */}
          <DisclosureButton
            as={NavLink}
            to="/signup"
            className="block w-full"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-2 my-2 px-4 rounded-md text-center transition-all duration-300 ease-in-out  transform hover:scale-105">
              Signup
            </div>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
export default NavBar;
