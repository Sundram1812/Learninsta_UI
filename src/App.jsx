import { Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import "./LightDark.css"
import Home from "./component/hero/Home";

import AboutUs from "./component/about/AboutUs";
import ContactUs from "./component/contact/ContactUs";
import NavBar from "./component/navigation/Navbar";
import Footer from "./footer/Footer";
import Signin from "./component/user/Signin";
import Signup from "./component/user/Signup";

import QuestionLayout from "./component/Interview/QuestionLayout";
import Test from "./Test";

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
import {  APIGateway,
  ConfigurationManagement,
  ContainerizationDeployment,
  DatabaseTransactions,
  DistributedLogging,
  EventDrivenMicroservices,
  LoadBalancing,
  MicroservicesArchitecture,
  MicroservicesDesignPatterns,
  MicroservicesSecurity,
  MicroservicesTesting,
  ServiceCommunication,
  ServiceDiscovery,
  SpringBootMicroservices} from "./component/courses/Microservices/Microservices.js"

import ToggleDarkMode from "./component/light-dark-mode/ToggleDarkMode";
import { useEffect } from "react";
import ScrollToTop from "./Utilities/ScrollToTop";


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

          {/* Microservices */}
          <Route path="interviews/microservices/microservicesarchitecture" element={<QuestionLayout><MicroservicesArchitecture/></QuestionLayout>} />
          <Route path="interviews/microservices/springbootmicroservices" element={<QuestionLayout><SpringBootMicroservices/></QuestionLayout>} />
          <Route path="interviews/microservices/servicecommunication" element={<QuestionLayout><ServiceCommunication/></QuestionLayout>} />
          <Route path="interviews/microservices/servicediscovery" element={<QuestionLayout><ServiceDiscovery/></QuestionLayout>} />
          <Route path="interviews/microservices/apigateway" element={<QuestionLayout><APIGateway/></QuestionLayout>} />
          <Route path="interviews/microservices/loadbalancing" element={<QuestionLayout><LoadBalancing/></QuestionLayout>} />
          <Route path="interviews/microservices/configurationmanagement" element={<QuestionLayout><ConfigurationManagement/></QuestionLayout>} />
          <Route path="interviews/microservices/microservicessecurity" element={<QuestionLayout><MicroservicesSecurity/></QuestionLayout>} />
          <Route path="interviews/microservices/distributedlogging" element={<QuestionLayout><DistributedLogging/></QuestionLayout>} />
          <Route path="interviews/microservices/eventdrivenmicroservices" element={<QuestionLayout><EventDrivenMicroservices/></QuestionLayout>} />
          <Route path="interviews/microservices/databasetransactions" element={<QuestionLayout><DatabaseTransactions/></QuestionLayout>} />
          <Route path="interviews/microservices/microservicestesting" element={<QuestionLayout><MicroservicesTesting/></QuestionLayout>} />
          <Route path="interviews/microservices/containerizationdeployment" element={<QuestionLayout><ContainerizationDeployment/></QuestionLayout>} />
          <Route path="interviews/microservices/microservicesdesignpatterns" element={<QuestionLayout><MicroservicesDesignPatterns/></QuestionLayout>} />



          <Route path="*" element={<PageNotFound/>}/>
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
