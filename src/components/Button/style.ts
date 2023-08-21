import styled from "styled-components";

export const ButtonContainer = styled.div`
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  button {
    border: none;
    border-radius: 3px;
    margin-top: 0.5rem;
    outline: none;
    padding: 8px 24px;
    cursor: pointer;
  }
  .danger {
    background: #de383b;
    color: #fff;
  }
  .primary {
    background: #1e90ff;
    color: black;
    font-weight: 500;
  }
`;
