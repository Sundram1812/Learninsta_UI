import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./LightDark.css"
import Home from "./component/hero/Home";
// import Interviews from "./component/Interview/Interviews";
import AboutUs from "./component/about/AboutUs";
import ContactUs from "./component/contact/ContactUs";
import NavBar from "/src/component/navigation/Navbar";
import Footer from "./footer/Footer";
import Signin from "./component/user/Signin";
import Signup from "./component/user/Signup";
// import Java from "./component/courses/Java/Java";
// import Springboot from "./component/courses/Springboot/Springboot";
import QuestionLayout from "./component/Interview/QuestionLayout";
import Test from "./Test";
// import Microservices from "./component/courses/Microservices/Microservices";
// import Mysql from "./component/courses/MySQL/Mysql";
// import HibernateJpa from "./component/courses/HibernameJPA/HibernateJpa";
// import Kafka from "./component/courses/Kafka/Kafka";
// import SystemDesign from "./component/courses/SystemDesign/SystemDesign";
// import Html from "./component/courses/HTML/Html";
// import Css from "./component/courses/CSS/Css";
// import Javascript from "./component/courses/JS/Javascript";
// import React from "./component/courses/ReactJs/ReactQues";
// import ReactQues from "./component/courses/ReactJs/ReactQues";
import JavaString from "./component/courses/Java/JavaString";
import JavaMultithreading from "./component/courses/Java/JavaMultithreading";
import JavaException from "./component/courses/Java/JavaException";
import JavaOops from "./component/courses/Java/JavaOops";
import JavaCollection from "./component/courses/Java/JavaCollection";
import Java8 from "./component/courses/Java/Java8";
import WelcomePage from "./component/Interview/WelcomePage";
import PageNotFound from "./Utilities/PageNotFound";
import JavaBasics from "./component/courses/Java/JavaBasics";
import {SpringbootBasic, SpringbootCore,SpringbootDataAccess,SpringbootRestAPI,SpringbootSecurity} from "./component/courses/Springboot/springboot.js"

import ToggleDarkMode from "./component/light-dark-mode/ToggleDarkMode";
import { useEffect, useLayoutEffect } from "react";
import ScrollToTop from "./Utilities/ScrollToTop";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when this component is rendered
  }, []);

  return (
    <div className="min-h-[100vh] overflow-x-hidden -z-30 bg-white dark:bg-main-bg">
      <NavBar />
      <div className="fixed right-4 top-3 sm:top-20 sm:right-2 z-20">
        <ToggleDarkMode/>
      </div>
      <div className="min-w-[96vw] w-[100vw] sm:w-[88vw] mx-auto overflow-x-hidden my-16">
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="test" element={<Test/>}/>
          <Route path="interviews" element={<QuestionLayout><WelcomePage/></QuestionLayout>} />

          <Route index element={<Navigate replace to="/home" />} />

          {/* Java */}
          <Route path="interviews/java/basics" element={<QuestionLayout><JavaBasics /></QuestionLayout>} />
          <Route path="interviews/:java/:string" element={<QuestionLayout><JavaString/> </QuestionLayout>} />
          <Route path="interviews/java/multithreading" element={<QuestionLayout><JavaMultithreading /></QuestionLayout>} />
          <Route path="interviews/java/exception" element={<QuestionLayout><JavaException /></QuestionLayout>} />
          <Route path="interviews/java/oop's" element={<QuestionLayout><JavaOops /></QuestionLayout>} />
          <Route path="interviews/java/collections" element={<QuestionLayout><JavaCollection/></QuestionLayout>} />
          <Route path="interviews/java/java8" element={<QuestionLayout><Java8 /></QuestionLayout>} />

          {/* Spring Boot */}
          <Route path="interviews/springboot/bootbasics" element={<QuestionLayout><SpringbootBasic/></QuestionLayout>} />
          <Route path="interviews/springboot/bootcoreconcepts" element={<QuestionLayout><SpringbootCore/></QuestionLayout>} />
          <Route path="interviews/springboot/bootrestapi" element={<QuestionLayout><SpringbootRestAPI/></QuestionLayout>} />
          <Route path="interviews/springboot/bootdataaccess" element={<QuestionLayout><SpringbootDataAccess/></QuestionLayout>} />
          <Route path="interviews/springboot/bootsecurity" element={<QuestionLayout><SpringbootSecurity/></QuestionLayout>} />


          <Route path="*" element={<PageNotFound/>}/>
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
