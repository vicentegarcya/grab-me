'use client'

import styled from "styled-components";
import Button from "../atoms/Button";

const ButtonsGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export default function ButtonsGroup() {
  return (
    <ButtonsGroupStyled>
      <Button variant="clipboard" text="Share with client" />
      <Button variant="anchor" text="Create your own" />
    </ButtonsGroupStyled>
  );
}
