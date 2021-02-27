import styled, { css } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1px;
  padding: 50px 50px;
  font-size: 30px;

  ${(props) =>
    props.pink &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
