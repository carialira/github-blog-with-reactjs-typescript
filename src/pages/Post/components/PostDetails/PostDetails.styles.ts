import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const PostDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.2rem;
  gap: 3.2rem;

  width: 100%;
  max-width: 86.4rem;
  height: 16.8rem;
  border-radius: 10px;

  background: ${({ theme }) => theme["base-profile"]};
/*   
  margin-bottom: 8rem; */
  /* transform: translateY(-20%);  */
`;

export const PostDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  
  .links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;

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
  }

  h1{
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme["base-title"]};
  }

  footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${mixins.fonts.textM}

    gap:3.2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      i {
        color: ${(props) => props.theme["base-label"]};
      }
      a {
        color: ${({ theme }) => theme["base-subtitle"]};
      }
    }
  }
`;

