const renderJSON = (json, depth = 0) => {
  // Check if the value is an array
  if (Array.isArray(json)) {
    return (
      <div style={{ paddingLeft: `${depth * 20}px` }}>
        [
        {json.map((item, index) => (
          <div key={index}>
            {renderJSON(item, depth + 1)}
            {index < json.length - 1 ? "," : ""}
          </div>
        ))}
        ]
      </div>
    );
  }

  // Check if the value is an object
  if (typeof json === "object" && json !== null) {
    return (
      <div style={{ paddingLeft: `${depth * 10}px` }}>
        {"{"}
        {Object.entries(json).map(([key, value], index, array) => (
          <div key={key} style={{ paddingLeft: `${depth * 0}px` }}>
            <span style={{ fontWeight: "bold", color: "#3BA7C9" }}>"{key}"</span>: {renderJSON(value, depth + 1)}
            {index < array.length - 1 ? "," : ""}
          </div>
        ))}
        {"}"}
      </div>
    );
  }

  // Render primitive value (number, string, boolean, null)
  return <span style={{ color: getValueColor(json) }}>{JSON.stringify(json)}</span>;
};

export const MyJsonComponent = ({ jsonData }) => {
  return <div>{renderJSON(jsonData)}</div>;
};
const getValueColor = (value) => {
  if (typeof value === "number") {
    return "lightblue";
  } else if (typeof value === "string") {
    return "green ";
  } else if (typeof value === "boolean") {
    return "blue";
  } else if (value === null) {
    return "grey";
  } else {
    return "white";
  }
};
