import React from "react";
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
    <div className="container mx-auto ">
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
        {rows?.map((row, rowIndex) => (
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
                {heading === "Feature" ? row?.feature : row[heading]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
