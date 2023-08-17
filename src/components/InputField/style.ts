import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 3rem;
  background: pink;
  display: flex;
  justify-content: start;
  padding: 0 1rem;
  gap: 0.8rem;
  align-items: center;
  background: #fff;
  border-radius: 6px;

  span {
    font-size: 1.4rem;
    margin-top: 2px;
  }

  input[name="addTask"] {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1rem;

    &:focus {
      border: none;
    }
  }
`;
