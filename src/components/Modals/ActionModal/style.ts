import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledModal = styled.div`
  width: 320px;
  background-color: white;
  border-radius: 4px;
  color: black;
  z-index: 100;
  // right: 6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease, visibility 0.3s ease;

  .modal-content {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: 100%;
        padding: 1rem;

        &.disabled{
          opacity: 0.5;
          pointer-events: none;
          cursor: not-allowed;
        }

        &:hover {
          background-color: ${theme.colors.lightGrey};
          border-radius: 4px;
        }

        .name {
          flex: 1;
          font-size: 1rem;

          &.Delete {
            color: red;
          }
        }

        .shortcut {
          font-size: 0.8rem;
          color: ${theme.colors.darkGrey};
        }
      }
    }
  }
`;
