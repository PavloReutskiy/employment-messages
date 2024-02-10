import "./MessageCard.css";
import { useState, useRef } from "react";

export const MessageCard = ({ title, children }) => {
  const messageRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = messageRef.current ? messageRef.current.innerText.replace(/\n\s*\n/g, '\n') : "";
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log(`Copy failed: ${error}`);
    }
  };

  return (
    <div className="message-wrapper">
      <div className="message-heading">
        <p className="message-type">{title}</p>
        <button 
          type="button" 
          className="copy-button" 
          onClick={handleCopy}
        >
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="message">
        <div 
          className="message-text" 
          ref={messageRef} 
          contentEditable
        >
          {children}
        </div>
      </div>
    </div>
  );
};
