import styled from "styled-components";
import { mixins } from "../../../../../styles/mixins";

export const HeaderProfileContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;



  h1 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme["base-title"]};
  }
  a {
    ${mixins.fonts.link}
    color: ${({ theme }) => theme.blue};
  }


  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }
`