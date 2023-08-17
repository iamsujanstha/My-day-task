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

  @media (max-width: 468px) {
    width: 100%;
  }
`;
