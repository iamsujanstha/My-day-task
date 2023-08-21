import React, { useEffect, useRef } from "react";

export type ClickOutsideProps = {
  children: React.ReactNode;
  onClose: () => void;
};
const ClickOutside: React.FC<ClickOutsideProps> = ({ children, onClose }) => {
  const contentRef = useRef(null);

  const handleClickOutside = (e: any) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!children) return null;

  return <div ref={contentRef}>{children}</div>;
};

export default ClickOutside;
