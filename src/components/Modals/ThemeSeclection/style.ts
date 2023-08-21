import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledThemeContainer = styled.div`
  z-index: 10;

  .theme-container {
    display: flex;
    flex-direction: column;
    color: #000;
    gap: 1rem;
    background: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.2);
    border: none;
    width: 325px;
    padding: 1rem;
    z-index: 500;
    position: fixed;
    right: 5.5rem;
    top: 4rem;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: fixed;
      right: 1rem;
      left: 2rem;
    }

    p{
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.colors.darkGrey};

    }

    .theme-list {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: start;

      li {
        width: 60px;
        height: 60px;
        border-radius: 2px;
        list-style: none;
        cursor: pointer;

        &.active{
          border: 3px solid purple;
          outline: none;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 2px;

          &:hover {
            border-radius: none;
            outline: 3px solid purple;
          }
        }

        &:hover {
          border: 3px solid purple;
        }
      }
    }
  }
`;
