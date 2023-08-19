import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 3rem;
  background: pink;
  background: #fff;
  border-radius: 6px;

  form {
    height: 100%;
    display: flex;
    justify-content: start;
    padding: 0 1rem;
    gap: 0.8rem;
    align-items: center;

    span {
      margin-top: 3px;
    }

    input[name="createTask"] {
      flex: 1;
      height: 100%;
      border: none;
      outline: none;
      font-size: 1rem;

      &:focus {
        border: none;
      }
    }
  }
`;
