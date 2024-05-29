import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  overflow-x: hidden;
  padding: 0 2rem;

  position: absolute;
  margin-top: -8rem;
  
  @media (max-width: 29.0625em) {
    padding: 0;
  }

  
  .publi{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 86.4rem;
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: 56.5625em) {
      align-items: center;
      justify-content: center;
    } 
    
    @media (max-width: 26.625em) {
      align-items: baseline;
      justify-content: baseline;
    }
    
    .search{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.2rem;
      min-width: 42rem;

      .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        span{
          ${mixins.fonts.titleS}
          color: ${({ theme }) => theme["base-subtitle"]};
        }

        small{
          ${mixins.fonts.textS}
          color: ${({ theme }) => theme["base-span"]};
        }
      }
      
      input{
        width: 100%;
        ${mixins.fonts.textM}
        
        border-radius: 6px;
        border: 2px solid ${props => props.theme['base-border']};
        background: ${({ theme }) => theme["base-input"]};
        color: ${({ theme }) => theme["base-text"]};
        padding: 1.2rem 1.6rem;

        &::placeholder {
          color: ${props => props.theme['base-label']};
        }

        &:focus{
          border: 2px solid ${props => props.theme['blue']};
        }
      }

      @media (max-width: 26.625em) {
        min-width: 98.5%;
      }
    }

    .section{
      display: grid;
      justify-content: flex-start;
      grid-template-columns: repeat(auto-fill, minmax(42rem, 1fr));
      gap: 2rem;

      @media (max-width: 35em) {
        align-content: center;
        grid-template-columns: 1fr;
      }
    }
  }
`;
