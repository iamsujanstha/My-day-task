import styled from "styled-components";

export const StyledTooltip = styled.div`
  .tooltip-container {
    position: relative;
    display: inline-block;
    /* Adjust as needed */
    margin: 0;
    padding: 0;

    &:hover {
      .tooltip {
        visibility: visible;
        opacity: 1;
        transform: translateY(40);
      }
    }

    .tooltip {
      position: absolute;
      z-index: 1;
      background-color: #f5f5f5;
      color: black;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.2s, visibility 0.2s;
      transform: translateY(-20px);
      pointer-events: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

      /* Position the tooltip above the element */
      bottom: 100%;
      left: 0;
      transform: translateX(-50%);
    }
  }
`;
