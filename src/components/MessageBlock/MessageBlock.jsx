import { useState } from "react";
import "./MessageBlock.css";

export const MessageBlock = ({ title, children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="template-block">
      <div className="heading" onClick={toggleVisibility}>
        <h2 className="heading-2">{title}</h2>
        <div className="accordion-button">
          <span
            className="vertical"
            style={{ display: isHidden ? "block" : "none" }}
          ></span>
          <span className="horizontal"></span>
        </div>
      </div>

      <div
        className="message-block"
        style={{
          gridTemplateRows: isHidden ? "0fr" : "1fr",
          marginBottom: isHidden ? "0px" : "32px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
