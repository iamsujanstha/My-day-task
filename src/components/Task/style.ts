import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledTask = styled.div`
  width: 100%;
  // min-height: 3.5rem;
  background: pink;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  gap: 0.8rem;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  color: black;
  position: relative;

  .task-label{
    flex: 1;
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    align-items: center;

    .edit-field{
      width: 100%;
      flex:1;
      
     input[type="text"] {
          width: 100%;
          font-size: 1.1rem;
          border: none;
          outline: none;
          color: #111;
          font-weight: 500;
        }

      }
      .task-time{
        font-size: 0.8rem;
        color: #777;
      }

    li{
      color: #111;
      list-style: none;
      letter-spacing: 0.4px;

      &.strike{
        text-decoration: line-through;
        color: ${theme.colors.darkGrey};
      }
    }
  }
  .task-action{
    color: #aaa;
    font-size: 1.6rem;
    display:flex;
    gap: 1rem;
    cursor:pointer;
  }

  .action-modal{
    position: absolute;
    top: 2rem;
    z-index: 100;
    right: 1rem;
  }
  }
`;
