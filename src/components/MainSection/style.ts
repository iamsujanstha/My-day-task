import styled from "styled-components";
import { theme } from "@/styles/theme";

export const MainSectionContainer = styled.section`
  width: 80%;
  background: ${theme.colors.secondary};
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: space-between;

  .heading-container {
    height: 64px;
  }

  .task-list-container {
    flex: 1; 
    overflow-y: auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .input-field-container {
    height: 50px; 
  }
  }
`;
