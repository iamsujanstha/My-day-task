import styled from "styled-components";

export const ButtonContainer = styled.div`
  background: #f3f3f3;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  button {
    border: none;
    border-radius: 3px;
    padding: 5px 24px;
  }
  .danger {
    background: #de383b;
    color: #fff;
  }
  .primary {
    background: #1e90ff;
    color: #666;
  }
`;
