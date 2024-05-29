import styled from "styled-components";
import { mixins } from "../../../../../styles/mixins";

export const HeaderProfileContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  overflow: hidden;

  h1 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme["base-title"]};
    overflow: hidden;
  }
  a {
    ${mixins.fonts.link}
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    background: transparent;
    text-transform: uppercase;
    border-bottom: 2px transparent ${({ theme }) => theme.blue};;
    color: ${({ theme }) => theme.blue};
    
    transition: border 0.2s;
    
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.blue};;
    }
  }


  @media (max-width: 60em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }
`