import { render } from "@testing-library/react";
import styled from "styled-components";

export const TitleWrapper = {
  const Title = styled.h1`
  font-size: 50px;
  text-aligned: center;
  color: palevioletred;
`;
  const Wrapper = styled.section`
  padding: 20px;
  background: papayawhip;
`;
  render() {return(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
  );
  }
}



