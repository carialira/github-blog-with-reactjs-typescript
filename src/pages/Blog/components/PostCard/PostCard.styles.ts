
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

import ReactMarkdown from "react-markdown";

export const PostCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 42rem;
  height: 26.8rem;
  padding: 3.2rem;
  gap: 1.25rem;

  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  transition: border 0.3s;

  color: ${({ theme }) => theme["base-text"]};

  header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.6rem;
    overflow: hidden;
    
    h1{
      ${mixins.fonts.titleM}
      color: ${({ theme }) => theme["base-title"]};
      width: 80%;
    }

    span{
      ${mixins.fonts.textS}
      padding-top: 0.5rem;
      min-width: 20%;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  main{
    ${mixins.fonts.textM}
    max-height: 12.5rem;
    overflow: hidden;
  }

  &:hover{
    border: 2px solid ${props => props.theme['base-label']};
  }
`;

export const TruncatedMarkdown = styled(ReactMarkdown)`
  overflow: hidden;  
  max-height: inherit;
  
  display: -webkit-box !important;
  -webkit-line-clamp: 4 !important;
  -webkit-box-orient: vertical !important;
  text-overflow: ellipsis !important;
`;