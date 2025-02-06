// import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import ContentPasteIcon from '@mui/icons-material/ContentPaste';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// function CodeSnippet({ language, code }) {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
//   };

//   return (
//     <div className="code-snippet-container my-4 relative z-0 w-auto max-w-[60rem] ">
//       <CopyToClipboard text={code} onCopy={handleCopy}>
//         <button className={`absolute top-2 right-2  ${copied && "bg-gray-800" } px-3 text-xs text-gray-400 py-1  md:max-w-[69rem] rounded`}>
//           {copied ? "Copied!" : <ContentCopyIcon/>}
//         </button>
//       </CopyToClipboard>
//       <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers className="rounded-md ">
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// }

// export default CodeSnippet;


import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CodeSnippet({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className="code-snippet-container relative my-4 w-full max-w-4xl rounded-md border border-gray-700 bg-[#1e1e1e]">
      {/* Top Border */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700 rounded-t-md">
        <span className="text-xs font-medium text-gray-400">{language}</span>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button
            className={`flex items-center px-3 py-1 text-xs font-medium rounded ${
              copied ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {copied ? "Copied!" : <ContentCopyIcon fontSize="small" />}
          </button>
        </CopyToClipboard>
      </div>

      {/* Code Block */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          borderRadius: "0 0 0.5rem 0.5rem",
          padding: "1rem",
          margin: 0,
          background: "#1e1e1e",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippet;
