import { theme } from "@/styles/theme";
import styled from "styled-components";

export const PopupContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .popup {
    padding: 1rem 1.5rem;
    max-width: 500px;
    z-index: 100;
    border-radius: 5px;
    background: #fff;
    animation: fadeInAndScale 0.3s ease;

    h3,
    p {
      padding-bottom: 10px;
      overflow-wrap: break-word;
    }

    h3{
      border-bottom: 1px solid #999;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    p {
      color: #333;
      line-height: 1.5;

      &:first-child {
        color: black;
      }
    }

    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      width: 100%;
    }
  }

  @keyframes fadeInAndScale {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
