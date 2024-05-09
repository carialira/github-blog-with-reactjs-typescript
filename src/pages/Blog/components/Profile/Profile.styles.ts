import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3.2rem;
  gap: 3.2rem;

  width: 100%;
  max-width: 86.4rem;
  height: 21.2rem;
  border-radius: 10px;

  background: ${({ theme }) => theme["base-profile"]};
  
  margin-bottom: 8rem;
  /* transform: translateY(-40%);  */

  @media (max-width: 960px) {
   flex-wrap: wrap;
   height: 100%;

   div{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     width: 100%;
     gap: 2rem;
   }
  }

  img{
    max-height: 14.8rem;
    max-width: 14.8rem;
  }
  
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  main {
    ${mixins.fonts.textM}
  }

  footer {
    display: flex;
    flex-wrap: wrap;

    ${mixins.fonts.textM}

    gap:2.4rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
        color: ${(props) => props.theme["base-label"]};
      }
      a {
        color: ${({ theme }) => theme["base-subtitle"]};
      }
    }
  }
`;
