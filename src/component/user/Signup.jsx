// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../logo/Logo";
// import { signup } from "../../assets/asset.js";
// const Signup = () => {
//   {
//     /* <img src={signup} className="bg-cover"/> */
//   }

//   return (
//     <div className="min-h-[70vh] mt-16 items-center flex justify-center px-5 lg:px-0 ">
//       <div className="max-w-screen-xl dark:bg-gray-800 sm:rounded-lg flex justify-center flex-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
//         {/* <div className="flex-1 bg-green-700 text-center hidden md:flex relative">
//           <div
//             className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
//             style={{
//               // backgroundImage: `url(/Users/sundramkumar/LearnInsta_App/UI/LearnInsta_UI/src/assets/signup.png)`,
//             }}
            
//           ><img src={signup} className="bg-cover"/></div>
//         </div> */}

//         <div className="flex-1 bg-green-700 text-center hidden md:flex relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
//           <div
//             className="m-0 w-full h-full bg-contain bg-center bg-no-repeat bg-transparent bg-green-400"
//             style={{
//               backgroundImage: `url(/Users/sundramkumar/LearnInsta_App/UI/LearnInsta_UI/src/assets/signup.png)`,
//             }}
//           >
//             <img
//               src={signup}
//               className="w-full h-full object-cover"
//               alt="Signup"
//             />
//           </div>
//         </div>
//         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
//           <div className=" flex flex-col items-center">
//             <div className="text-center">
//               <h1 className="text-2xl xl:text-4xl font-extrabold dark:text-green-700 text-red-500">
//                 Student Sign up
//               </h1>
//               <p className="text-[12px] text-gray-500">
//                 Hey enter your details to create your account
//               </p>
//             </div>
//             <div className="w-full flex-1 mt-8">
//               <div className="mx-auto max-w-xs w-full flex flex-col gap-4">
//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="text"
//                   placeholder="Enter your name"
//                 />

//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="email"
//                   placeholder="Enter your email"
//                 />

//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="tel"
//                   placeholder="Enter your phone"
//                 />

//                 <input
//                   className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                   type="password"
//                   placeholder="Password"
//                 />

//                 <button className="mt-5 tracking-wide font-semibold dark:bg-green-700 bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
//                   <svg
//                     className="w-6 h-6 -ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//                     <circle cx="8.5" cy="7" r="4" />
//                     <path d="M20 8v6M23 11h-6" />
//                   </svg>
//                   <span className="ml-3">Sign Up</span>
//                 </button>
//                 <p className="mt-6 text-xs text-gray-600 text-center">
//                   Already have an account?{" "}
//                   <Link to="/signin">
//                     <span className="dark:text-green-700 text-red-500 font-semibold">
//                       Sign in
//                     </span>
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Signup;








import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { signup } from "../../assets/asset.js";

const Signup = () => {
  return (
    <div className="min-h-[70vh] mt-16 items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl dark:bg-gray-800 bg-white sm:rounded-lg flex justify-center flex-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        {/* Image Section */}
        <div className="flex-1 bg-gradient-to-r from-green-600 to-green-800 text-center hidden md:flex relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="m-0 w-full h-full bg-contain bg-center bg-no-repeat bg-transparent">
            <img
              src={signup}
              className="w-full h-full object-cover"
              alt="Signup"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <div className="flex flex-col items-center">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent dark:from-red-400 dark:to-purple-500">
                Student Sign Up
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Hey, enter your details to create your account
              </p>
            </div>

            {/* Form */}
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs w-full flex flex-col gap-4">
                {/* Name Input */}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 transition-all duration-300"
                  type="text"
                  placeholder="Enter your name"
                />

                {/* Email Input */}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                />

                {/* Phone Input */}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 transition-all duration-300"
                  type="tel"
                  placeholder="Enter your phone"
                />

                {/* Password Input */}
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 transition-all duration-300"
                  type="password"
                  placeholder="Password"
                />

                {/* Sign Up Button */}
                <button
                  className="mt-5 tracking-wide font-semibold bg-gradient-to-r from-red-500 to-purple-600 text-white w-full py-4 rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>

                {/* Sign In Link */}
                <p className="mt-6 text-xs text-gray-600 dark:text-gray-400 text-center">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
