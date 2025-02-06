// import Logo from "../logo/Logo";

// export default function Signin() {
    
//     return (
//       <div className="min-h-[66vh] mx-8 sm:mx-3">
//         <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-800  mt-10 rounded-md max-w-[40rem] mx-auto min-h-[60vh]  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
//             <div className="flex items-center w-full justify-center">
//                 <Logo/>
//             </div>
//             <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-red-500 dark:text-gray-200">
//               Sign in to your account
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form action="#" method="POST" className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm/6 font-medium dark:text-gray-200 text-red-500">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                     className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base dark:text-gray-900 text-gray-700 outline-none  placeholder:text-gray-800 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm/6 font-medium dark:text-gray-200 text-red-500">
//                     Password
//                   </label>
//                   <div className="text-sm">
//                     <a href="#" className="font-semibold dark:text-green-600 dark:hover:text-green-700 text-red-700">
//                       Forgot password?
//                     </a>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     autoComplete="current-password"
//                     className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base dark:text-gray-900 text-gray-700 outline-none  placeholder:text-gray-800 sm:text-sm/6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md dark:bg-green-600 bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm dark:hover:bg-green-700 hover:hover:bg-red-700 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         </div>
    
//     )
// }



import Logo from "../logo/Logo";

export default function Signin() {
  return (
    <div className="min-h-[66vh] mx-8 sm:mx-3">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-800 bg-white mt-10 rounded-md max-w-[40rem] mx-auto min-h-[60vh] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Logo */}
          <div className="flex items-center w-full justify-center">
            <Logo />
          </div>

          {/* Title */}
          <h2 className="mt-10 text-center text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent dark:from-red-400 dark:to-purple-500">
            Sign in to your account
          </h2>
        </div>

        {/* Form */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-all duration-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 bg-gray-100 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Signin Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-red-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-all duration-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
  