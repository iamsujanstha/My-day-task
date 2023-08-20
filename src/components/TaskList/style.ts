import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledTasksContainer = styled.div`
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1rem 0;
  wrap: no-wrap;

  .empty-list{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
