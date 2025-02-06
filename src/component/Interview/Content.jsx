import React from "react";
import { useParams } from "react-router-dom";

const topicsContent = [
  { title: "History of Java", content: "Java was developed by Sun Microsystems in 1995..." },
  { title: "Features of Java", content: "Java is object-oriented, platform-independent..." },
  { title: "C++ vs Java", content: "Java simplifies many features of C++ while adding..." },
  { title: "Hello Java Program", content: "A simple Hello World program in Java looks like..." },
  // Add more topics here
];

const Content = () => {
  const { id } = useParams();
  const topic = topicsContent[id];

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-4">{topic?.title || "Topic Not Found"}</h2>
      <p className="text-gray-700">{topic?.content || "Content not available for this topic."}</p>
      <div className="mt-6">
        <Link
          to={`/tutorial/${parseInt(id) + 1}`}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Next →
        </Link>
      </div>
    </div>
  );
};

export default Content;
