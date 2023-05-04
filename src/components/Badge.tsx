import React from "react";

const Badge: React.FC<{ text: string; bg?: string }> = ({ text, bg }) => {
  return (
    <div style={{ backgroundColor: bg }} className="badge">
      {text}
    </div>
  );
};

export default React.memo(Badge);
