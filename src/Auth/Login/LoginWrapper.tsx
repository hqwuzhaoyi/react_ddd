import { Card } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Card)`
  width: 400px;
  display: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .ant-card-body {
    width: 100%;
  }
`;

export default function LoginWrapper(props: PropsWithChildren<{}>) {
  return (
    <Container>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
}
