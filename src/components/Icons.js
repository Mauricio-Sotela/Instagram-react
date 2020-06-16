var React = require("react");
var FontAwesome = require("react-fontawesome");

const icon = (iconName) => {
  return (
    <a href="#" style={{ color: "black", margin: "10px", fontSize: "1.5rem" }}>
      <FontAwesome className={iconName} />
    </a>
  );
};

export default icon;
