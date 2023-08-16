import styled from "styled-components";
import { theme } from "@/styles/theme";

export const MainSectionContainer = styled.section`
  width: 80%;
  background: ${theme.colors.secondary};
  height: 100vh;
  //  &.hide{
  //   width: 100%
  //  }

  @media (max-width: 468px) {
    width: 100%;
  }
`;
