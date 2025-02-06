import React from "react";
// import {format} from "../courses/Java/javaOopsQuestions"

// const format = {
//   content: {
//     question: "",
//     answer: "",
//     explanation: "",
//     codeSnippet: "",
//     codeSnippetExplanation: "",
//   },
//   camapreHeading: ["Feature", "HashMap", "ConcurrentHashMap"],
//   comparision: [
//     {
//       HashMap: {
//         Definition: "Non-thread-safe implementation of the Map interface.",
//         IntroducedIn: "Java 1.2",
//         ThreadSafety:
//           "Not thread-safe. External synchronization is required for multi-threading.",
//         ConcurrencyMechanism:
//           "Synchronization can be added using Collections.synchronizedMap() or other methods.",
//         Performance: "Faster in single-threaded environments.",
//         LockingMechanism: "Full map locking when synchronized.",
//         NullKeys: "Allows one null key.",
//         NullValues: "Allows multiple null values.",
//         InternalStructure:
//           "Hash table with buckets and linked lists (or trees for collisions in Java 8+).",
//         ResizeOperation:
//           "Not thread-safe; resizing can cause data inconsistencies in multi-threading.",
//         UseCases:
//           "Best for single-threaded applications or when explicit synchronization is manageable.",
//       },
//     },

//     {
//       ConcurrentHashMap: {
//         Definition: "Thread-safe implementation of the Map interface.",
//         IntroducedIn: "Java 1.5",
//         ThreadSafety: "Thread-safe and optimized for concurrent access.",
//         ConcurrencyMechanism:
//           "Uses fine-grained locking (segments in older versions) or CAS-based mechanisms.",
//         Performance: "Better performance in multi-threaded environments.",
//         LockingMechanism:
//           "Fine-grained locking (on segments/keys) allows concurrent reads and writes.",
//         NullKeys: "Does not allow null keys.",
//         NullValues: "Does not allow null values.",
//         InternalStructure:
//           "Similar structure to HashMap but optimized for concurrency.",
//         ResizeOperation:
//           "Resizing is thread-safe and doesn’t block the entire map.",
//         UseCases:
//           "Ideal for multi-threaded applications requiring thread-safe operations.",
//       },
//     },
//   ],
//   image: "",
// };

const ComparisonTable = ({format}) => {
  const { compareHeading, comparision } = format;
  const headLength = compareHeading?.length;

  const rows = Object.keys(comparision[0][Object.keys(comparision[0])[0]]).map((feature) => {
    const rowData = { feature };
    comparision?.forEach((entry) => {
      const key = Object.keys(entry)[0];
      rowData[key] = entry[key][feature];
    });
    return rowData;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center dark:text-gray-200 text-black mb-6">{format.topic}</h1>
      <div>
        {/* Headings */}
        <div
          className={`grid divide-x-2 border dark:text-white`}
          style={{ gridTemplateColumns: `repeat(${headLength}, minmax(0, 1fr))` }}
        >
          {compareHeading?.map((heading, index) => (
            <div
              key={index}
              className="text-center bg-gray-400 font-bold px-4 py-2 overflow-auto"
            >
              {heading}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid divide-x-2 border dark:text-white`}
            style={{ gridTemplateColumns: `repeat(${headLength}, minmax(0, 1fr))` }}
          >
            {compareHeading?.map((heading, colIndex) => (
              <div
                key={colIndex}
                className={`px-4 py-2 overflow-auto`}
              >
                {heading === "Feature" ? row.feature : row[heading]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
