import { css } from "styled-components";

export const mixins = {
  fonts: {
    titleL: css`
      font-family: "Nunito", sans-serif;
      font-size: 2.4rem;
      line-height: 130%;
      font-weight: 700;
    `,

    titleM: css`
      font-family: "Nunito", sans-serif;
      font-size: 2rem;
      line-height: 160%;
      font-weight: 700;
    `,

    titleS: css`
      font-family: "Nunito", sans-serif;
      font-size: 1.8rem;
      line-height: 160%;
      font-weight: 700;
    `,

    textM: css`
      font-family: "Nunito", sans-serif;
      font-size: 1.6rem;
      line-height: 160%;
      font-weight: 400;
    `,

    textS: css`
      font-family: "Nunito", sans-serif;
      font-size: 1.4rem;
      line-height: 160%;
      font-weight: 400;
    `,

    link: css`
      font-family: "Nunito", sans-serif;
      font-size: 1.2rem;
      line-height: 160%;
      font-weight: 700;
    `,
  },
};
