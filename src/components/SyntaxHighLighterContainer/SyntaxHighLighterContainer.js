import { useEffect, useState } from "react";
import "./SyntaxHighlighterContainer.css";
import SyntaxHighlighter from "react-syntax-highlighter";

export const SyntaxHighlighterContainer = ({ codeLanguage, codeStyle, formatString }) => {
  const [isCTCBVisible, setIsCTCBVisible] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formatString);
      setIsCTCBVisible(true);
      setTimeout(() => {
        setIsCTCBVisible(false);
      }, "5000");
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
  };

  return (
    <div>
      <div className="syntax-highlighter-container">
        <SyntaxHighlighter language={codeLanguage} style={codeStyle} useInlineStyles={true} customStyle={{}}>
          {formatString}
        </SyntaxHighlighter>
        <div className="clipboard-absolute" onClick={handleCopyToClipboard}>
          <span id="copy-to-clipboard" className="gg--clipboard"></span>
          {isCTCBVisible && <div id="copied-notification-api-page">Copied to clipboard!</div>}
        </div>
      </div>
    </div>
  );
};
