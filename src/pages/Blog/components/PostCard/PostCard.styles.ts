import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const PostCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 42rem;
  height: 26rem;
  padding: 3.2rem;
  gap: 1.25rem;

  cursor: pointer;
  text-decoration: none;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  transition: border 0.3s;

  color: ${({ theme }) => theme["base-text"]};

  header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.6rem;
    
    h1{
      ${mixins.fonts.titleM}
      color: ${({ theme }) => theme["base-title"]};
    }

    span{
      ${mixins.fonts.textS}
      padding-top: 0.5rem;
      min-width: 5.3rem;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  main{
    ${mixins.fonts.textM}
    max-height: 11.2rem;
    
    p{
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover{
    border: 2px solid ${props => props.theme['base-label']};
  }
`;