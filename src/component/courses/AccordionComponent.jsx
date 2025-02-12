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
import { ThemeProvider } from "styled-components";
import { Paper } from "@mui/material";
import { styles } from "../../styles";

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
    sx={{ color: "#374151" }}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: "#6b7280",
  // backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
  backgroundImage: "linear-gradient(to right, #c7d2fe, #c7d2fe, #fbcfe8)",
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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: theme.palette.mode === "dark" ? "#0d182b" : "#f3f4f6", // Dynamic background color
  color: theme.palette.mode === "dark" ? "#e5e7eb" : "#374151", // Dynamic text color
}));

function AccordionComponent({ langContent, icon }) {
  const [expanded, setExpanded] = React.useState("");
  const location = useLocation();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="mt-2 border-none"
        TransitionProps={{
          timeout: 500, // Adjust the duration for smoothness
          easing: "ease-in-out", // Smooth easing function
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Paper>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className={` border-none dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]`}
            >
              <Typography
                component="span"
                className="dark:text-gray-300 font-bold flex items-center gap-4 rounded-md "
              >
                <span className="">{icon}</span>
                {langContent?.language}
              </Typography>
            </AccordionSummary>
          </Paper>
        </ThemeProvider>

        <AccordionDetails className="dark:bg-[#0d182b] bg-gray-300 dark:text-gray-400 text-gray-700 divide-y-[0.1px] divide-gray-700">
          {langContent?.topics.map((topic, index) => (
            <NavLink
              key={index}
              to={`/interviews/${langContent?.language.toLowerCase()}/${topic.toLowerCase()}`}
              className={({ isActive }) =>
                `py-2 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] pl-5 block rounded-sm transition-all duration-300 overflow-x-scroll no-scrollbar ${
                  isActive ? `${styles.textGradient}` : ""
                }`
              }
            >
              {topic}
            </NavLink>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;

// "dark:text-green-500 font-bold dark:bg-gray-500 bg-gray-300 text-blue-900 "
// background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
