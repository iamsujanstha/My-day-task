import React, { ReactNode } from "react";
import { StyledTooltip } from "@/components/Tooltip/style";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <StyledTooltip>
      <div className="tooltip-container">
        {children}
        <div className="tooltip">{content}</div>
      </div>
    </StyledTooltip>
  );
};

export default Tooltip;
