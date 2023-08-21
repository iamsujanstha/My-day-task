import styled from "styled-components";

export const PopupContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    padding: 20px;
    width: 300px;
    z-index: 100;

    h3,
    p {
      padding-bottom: 10px;
      overflow-wrap: break-word;
    }

    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      width: 100%;
    }
  }
`;
