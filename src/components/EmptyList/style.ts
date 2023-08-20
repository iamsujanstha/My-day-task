import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 400px;
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(0, 0, 00, 0.15);

  .empty-section {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      padding: 1.5rem 0 0.6rem 0;
      font-size: 1.2rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;
