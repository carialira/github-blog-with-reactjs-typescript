import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  overflow-x: hidden;
  padding: 0 2rem;
  margin-top: -7rem;

  @media (max-width: 465px) {
    padding: 0;
  }

`

export const PostDetailsContent = styled.div`
  display: flex;
  max-width: 86.4rem;
  width: 100%;
  white-space: pre-wrap;
  overflow: hidden;

  div{
    ${mixins.fonts.textS}
    padding: 0 3.2rem 4rem;
    overflow-x: auto;
    width: 100%;
    height: 100%;
    margin-top: 4rem;

    a:link, a:visited, a:hover{ 
      color: ${({theme})=> theme.blue};
    }
  }
`;