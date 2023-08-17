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

  .task-label{
    display: flex;
    gap:0.8rem;
    align-items: center;

    .circular-checkbox {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        border: 2px solid #000;
        margin-right: 10px;
        position: relative;

        & input[type="checkbox"] {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            
        }
    }
  }

  span {
    font-size: 1.4rem;
    margin-top: 2px;
  }

  li{
    color: ${theme.colors.darkGrey};
    list-style: none;
  }

  .task-action{
    color: #aaa;
    font-size: 1.6rem;
    display:flex;
    gap: 1rem;
    cursor:pointer;
     
    &>svg{
        &:hover{
            color: black;
        }
    }
  }
  }
`;
