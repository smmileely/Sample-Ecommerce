// import styled, { css } from "styled-components";

// export const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1px;
//   padding: 50px 50px;
//   font-size: 30px;

//   ${(props) =>
//     props.pink &&
//     css`
//       background: palevioletred;
//       color: white;
//     `}
// `;

import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #663399;
  font-size: 16px;

  ${(props) =>
    props.primary &&
    css`
      background-color: #663399;
      color: white;
    `}
`;
