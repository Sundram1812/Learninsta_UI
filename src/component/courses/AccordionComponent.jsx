
/* eslint-disable */
import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { ThemeProvider } from "styled-components";
import { Paper } from "@mui/material";
import { color } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#111828",
  boxShadow: "4.0px 8.0px 8.0px rgba(0,0,0,0.38)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),

  // ...theme.applyStyles("light", {
  //   backgroundColor: "rgb(156 163 175 / var(--tw-text-opacity, 1))",
  //   color: "rgba(255, 255, 255, .05)"
  // }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: theme.palette.mode === "dark" ? "#0d182b" : "#f3f4f6", // Dynamic background color
  color: theme.palette.mode === "dark" ? "#e5e7eb" : "#374151", // Dynamic text color
}));

function AccordionComponent({ langContent, icon, setIsOpenNav}) {
  const [expanded, setExpanded] = React.useState("");


  const location = useLocation();

  function handleScroll(){
    React.useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top whenever the location changes
    }, [location]);
  
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="mt-2 border-none "
      >
        <ThemeProvider theme={darkTheme}>
          <Paper>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className=" border-none"
            >
              <Typography
                component="span"
                className="text-gray-300  flex items-center gap-4 rounded-md"
              >
                <span className="">{icon}</span>
                {langContent?.language}
              </Typography>
            </AccordionSummary>
          </Paper>
        </ThemeProvider>

        <AccordionDetails className="dark:bg-[#0d182b] bg-gray-300 dark:text-gray-400 text-gray-700 divide-y-[0.1px] divide-gray-700 ">
          {langContent?.topics.map((topic, index) => (
            <Typography
              key={index}
              component={NavLink}
              to={`/interviews/${langContent?.language.toLowerCase()}/${topic.toLowerCase()}`}
              className={` py-2 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] pl-5 block rounded-sm transition-all duration-300 `}
              onClick={()=> setIsOpenNav(e=> !e)}
            >
              {topic}
              <div />
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
