import styled, { createGlobalStyle } from "styled-components";

export const Stack = styled.div`
  --space: ${(props) => props.space || "1.5rem"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--space);
  }
`;

export const Box = styled.div`
  --space: ${(props) => props.space || "1.5rem"};
  padding: var(--space);
  border: ${(props) => props.borderThin || 0} solid;
  --color-light: #fff;
  --color-dark: #000;
  color: var(--color-dark);
  background-color: var(--color-light);

  & * {
    color: inherit;
  }

  & .invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  }
`;

export const Center = styled.div`
  --measure: ${(props) => props.measure || "60ch"};
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--measure);

  padding-left: ${(props) => props.gutter || ""};
  padding-right: ${(props) => props.gutter || ""};

  display: ${(props) => (props.intrinsic === true ? "flex" : "")};
  flex-direction: ${(props) => (props.intrinsic === true ? "column" : "")};
  align-items: ${(props) => (props.intrinsic === true ? "center" : "")};
`;

export const Switcher = styled.div`
  --measure: ${(props) => props.measure || "30rem"};
  --s1: ${(props) => props.space || "1.5em"};

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc((var(--s1) / 2) * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((var(--measure) - (100% - var(--s1))) * 999);
    margin: calc(var(--s1) / 2);
  }

  & > * > :nth-last-child(n + ${(props) => props.limit || 4}),
  & > * > :nth-last-child(n + ${(props) => props.limit || 4}) ~ * {
    flex-basis: 100%;
  }
`;

export const Cluster = styled.div`
  --space: ${(props) => props.space || "1.5em"};
  overflow: hidden;

  & > * {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: calc(var(--space) / 2 * -1);
  }

  & > * > * {
    margin: calc(var(--space) / 2);
  }
`;

export const Frame = styled.div`
  display: block;
  --n: 1; /* width */
  --d: 1.42; /* height */
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & > img,
  & > video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Imposter = styled.div`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Contents */

  --margin: ${(props) => props.margin};
  overflow: auto;
  max-height: calc(100% - (var(--margin) * 2));
  max-width: calc(100% - (var(--margin) * 2));
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${(props) => props.gap || "1rem"};
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
`;
