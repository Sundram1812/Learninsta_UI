// import {insta} from "../../icons"
import { Link } from "react-router-dom";
import IconLogo from "../logo/IconLogo";

function ContactCard({ contact }) {
  return (
    <>
      <div className="p-4 rounded-lg md:p-6 dark:bg-gray-800 bg-gray-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.68)]">
        <Link
          target="_blank"
          to={contact?.link}
          className="inline-block p-3 dark:text-white rounded-lg bg-blue-100/80 dark:bg-gray-700 bg-gray-300 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.88)] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.68)] dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 text-white font-bold uppercase dark:hover:from-blue-700 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-amber-500 to-pink-500"
        >
          <IconLogo icon={contact?.icon} />
        </Link>

        <h2 className="mt-4 font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-pink-600 dark:from-secondry dark:to-pink-500  ">
          {contact?.heading}
        </h2>
        {/* <h2 className="mt-4 text-base font-medium  dark:text-white">
          {contact?.heading}
        </h2> */}
        <p className="mt-2 text-sm dark:text-gray-500 text-gray-600">
          {contact?.subHeading}
        </p>

        <a
          target="_blank"
          className="mt-2 text-sm text-blue-500 "
          href={contact?.link}
        >
          {contact?.linkName}
        </a>
      </div>
    </>
  );
}

export default ContactCard;
