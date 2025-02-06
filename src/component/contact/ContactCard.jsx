// import {insta} from "../../icons"
import IconLogo from "../logo/IconLogo";


function ContactCard({contact}) {
  return (
    <>
      <div className="p-4 rounded-lg md:p-6 dark:bg-gray-800 bg-gray-200 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <span className="inline-block p-3 dark:text-white rounded-lg bg-blue-100/80 dark:bg-gray-700 bg-gray-300 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <IconLogo icon= {contact?.icon}/>
        </span>

        <h2 className="mt-4 text-base font-medium  dark:text-white">
          {contact?.heading}
        </h2>
        <p className="mt-2 text-sm dark:text-gray-500 text-gray-600">
          {contact?.subHeading}
        </p>

        <a className="mt-2 text-sm text-blue-500 " href={contact?.link}>
            {contact?.linkName}
        </a>
      </div>
    </>
  );
}

export default ContactCard;
