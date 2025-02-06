// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { BellIcon } from "@heroicons/react/24/outline";
// import Logo from "../logo/Logo";
// import "../../App.css";
// import { NavLink } from "react-router-dom";

// const navigation = [
//   { name: "Home", target: "/home", current: true },
//   { name: "Interview", target: "/interviews", current: false },
//   { name: "About US", target: "/about-us", current: false },
//   { name: "Contact US", target: "/contact-us", current: false },
//   // { name: "Test", target: "/test", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function MainBar() {
//   return (
//     <>
//       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
//         <div className="flex shrink-0 items-center ">
//           <Logo />
//         </div>
//         <div className="hidden sm:ml-6 sm:block">
//           <div className="flex space-x-4">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.target}
//                 aria-current={item.current ? "page" : undefined}
//                 className={({ isActive }) =>
//                   classNames(
//                     isActive
//                       ? "dark:bg-gray-900 dark:text-white text-white bg-red-500 "
//                       : "text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-red-300 hover:text-black",
//                     "rounded-md px-3 py-2 text-sm font-medium"
//                   )
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//         <NavLink to="/signin" className="dark:bg-[#131b2c] dark:hover:bg-[#111827] font-semibold text-white py-2 px-4 rounded ml-2 hidden sm:block bg-red-500">
//           Signin
//         </NavLink>

//         <NavLink to="/signup" className="dark:bg-[#131b2c] dark:hover:bg-[#111827] font-semibold text-white py-2 px-4 rounded ml-2 hidden sm:block bg-red-500">
//           Signup
//         </NavLink>

//         {/* Profile dropdown */}
//         {/* <Menu as="div" className="relative ml-3">
//           <div>
//             <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">Open user menu</span>
//               <img
//                 alt=""
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                 className="size-8 rounded-full"
//               />
//             </MenuButton>
//           </div>
//           <MenuItems
//             transition
//             className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//           >
//             <MenuItem>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//               >
//                 Your Profile
//               </a>
//             </MenuItem>
//             <MenuItem>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//               >
//                 Settings
//               </a>
//             </MenuItem>
//             <MenuItem>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//               >
//                 Sign out
//               </a>
//             </MenuItem>
//           </MenuItems>
//         </Menu> */}
//       </div>
//     </>
//   )
// }



import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Logo from "../logo/Logo";
import "../../App.css";
import { NavLink } from "react-router-dom";

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

export default function MainBar() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.target}
                aria-current={item.current ? "page" : undefined}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r from-indigo-600 to-purple-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Signin/Signup and Profile Dropdown) */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* Signin Button */}
        <NavLink
          to="/signin"
          className={classNames(
            "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800",
            "font-semibold text-white py-2 px-4 rounded ml-2 hidden sm:block",
            "transition-all duration-300 ease-in-out transform hover:scale-105"
          )}
        >
          Signin
        </NavLink>

        {/* Signup Button */}
        <NavLink
          to="/signup"
          className={classNames(
            "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800",
            "font-semibold text-white py-2 px-4 rounded ml-2 hidden sm:block",
            "transition-all duration-300 ease-in-out transform hover:scale-105"
          )}
        >
          Signup
        </NavLink>

        {/* Profile Dropdown (Optional) */}
        {/* <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700 data-[focus]:outline-none"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700 data-[focus]:outline-none"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-700 data-[focus]:outline-none"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu> */}
      </div>
    </>
  );
}