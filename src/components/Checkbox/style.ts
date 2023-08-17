import styled from "styled-components";
import { theme } from "@/styles/theme";

export const CheckboxWrapper = styled.div`
  .round {
    position: relative;
    margin-bottom: 0.19rem;

    label {
      background-color: #fff;
      border: 3px solid #ccc;
      border-radius: 50%;
      cursor: pointer;
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;

      &:after {
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 5px;
        left: 2px;
        opacity: 0;
        position: absolute;
        top: 3px;
        transform: rotate(-45deg);
        width: 9px;
      }
    }

    input[type="checkbox"] {
      visibility: hidden;

      &:checked + label {
        background-color: ${theme.colors.darkGrey};
        border-color: ${theme.colors.darkGrey};

        &:after {
          opacity: 1;
        }
      }
    }
  }
`;
