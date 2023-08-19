import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledTask = styled.div`
  width: 100%;
  height: 3.5rem;
  background: pink;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  gap: 0.8rem;
  align-items: center;
  background: #fff;
  border-radius: 6px;
  color: black;
  positon: relative;

  .task-label{
    display: flex;
    gap: 1.2rem;
    align-items: center;

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
  }
`;
