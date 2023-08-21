import styled from "styled-components";
import { theme } from "@/styles/theme";

export const MainSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: space-between;
  background-size: cover;

  @media (max-width: 768px) {
    height: 100dvh;
    width: 100%;
    padding: 2rem 1rem;
  }

  .hamburger-menu {
    display: none;
    margin-bottom: 1rem;
    cursor: pointer;
    z-index: 10;
    transition: 0.8s;

    @media (max-width: 968px) {
      display: block;
    }
  }

    .heading-container {
      height: 64px;
    }


  .task-list-container {
    flex: 1;
    overflow-y: auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    overflow-y: auto;
    // box-shadow: rgba(0, 0, 0, 0.85) 0px 25px 50px -20px;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .input-field-container {
      height: 50px;
      // margin-bottom:1rem;
    }
  }
`;
