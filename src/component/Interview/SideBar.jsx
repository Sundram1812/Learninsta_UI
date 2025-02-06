import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { styles } from "../../styles";
import CodeSnippet from "../code-/CodeSnippet";
import javaQuestions from "../courses/Java/javaQuestions.js"
import QuestionAnswerCard from "./QuestionAnswerCard.jsx";
import { NavLink } from "react-router-dom";

function SideBar() {
  // State to manage the selected history item and sidebar visibility
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false); // Sidebar is visible by default

  const {id, title, questions}= javaQuestions;
//   console.log(id);
//   console.log(title);
//   console.log(questions);
  
  
  // Sample history data
  const history = [
    { id: 1, title: "Core Java", content: questions },
    // { id: 2, title: "Springboot", date: "2025-01-02" },
    // { id: 3, title: "Microservices", date: "2025-01-03" },
    // { id: 4, title: "Hibernet", date: "2025-01-04" },
    // { id: 5, title: "MySQL", date: "2025-01-05" },
    // { id: 6, title: "HTML", date: "2025-01-05" },
    // { id: 7, title: "CSS", date: "2025-01-05" },
    // { id: 8, title: "JAVA SCRIPT", date: "2025-01-05" },
    // { id: 9, title: "React Js", date: "2025-01-05" },
    // Add more items as necessary
  ];

  return (
    <div className="h-screen relative">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-gray-800 text-white z-10 p-4 overflow-y-auto fixed top-0 left-0 h-screen 
        ${sidebarVisible ? "block" : "hidden"} md:w-60 md:translate-x-0 overflow-y-scroll no-scrollbar`}
      >
        <button
          className="text-white mb-4"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
        <h2 className={`${styles.heroSubText} mb-4`}>Content</h2>
        <ul className="space-y-2">
          {history.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer p-2 rounded ${
                selectedHistory?.id === item.id
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedHistory(item)}
            >
              <div className="flex justify-between">
                <span className={styles.sectionSubText}>{item.title}</span>
                {/* <span className="text-sm text-gray-100">{item.date}</span> */}
              </div>
            </li>
          ))}
        </ul>

        <NavLink to="/interviews/java" >Java</NavLink>
        <br/>
        <NavLink to="/interviews/springboot" >Springboot</NavLink>
      </div>

      {/* Main Content Area */}
      <div
        className={`${!sidebarVisible && "col-span-2 "} bg-gray-700 p-6 py-10 rounded-md  sm:col-span-2 md:col-span-2 transition-all duration-300 h-screen relative flex items-center justify-center overflow-y-scroll w-full sm:max-w-[50rem] md:max-w-[60rem] lg:max-w-[80rem] xl:max-w-[90rem] no-scrollbar `}
      >
        <div onClick={()=>setSidebarVisible(!sidebarVisible)} className="absolute top-1 left-1 p cursor-pointer text-gray-300 px-[5px] border rounded-full p-1 border-gray-500 no-scrollbar ">
            {!sidebarVisible && <MenuIcon/>}
        </div>
        <div className="h-full p-6  bg-gray-900 shadow-lg w-full rounded-lg border border-gray-500 overflow-y-scroll no-scrollbar">
          {selectedHistory ? (
            <div>
              <h3 >
                {/* {selectedHistory.title} */}
                {selectedHistory.content.map((ques)=><QuestionAnswerCard question={ques}/>)}
              </h3>
              <p className="text-sm text-gray-600">
                Date: {selectedHistory.date}
              </p>
              <div className="mt-6">
                <p className={styles.sectionSubText}>Here’s the content of the selected conversation...</p>
                {/* Add the content of the selected conversation here */}
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              Select a conversation from the history.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
