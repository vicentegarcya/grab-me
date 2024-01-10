'use client'

import styled from "styled-components";
import Ticket from "../atoms/Ticket";

const TicketsGroupStyled = styled.div`
  width: 50vw;
  height: fit-content;
  display: flex;
  align-items: flex-start;
`;

export default function TicketsGroup() {
  return (
    <TicketsGroupStyled>
      <Ticket
        name="vicentegarcya"
        phone="+34 684003481"
        email="hola@vicentegarcya.com"
      />
      <Ticket
        name="vicentegarcya"
        phone="+34 684003481"
        email="hola@vicentegarcya.com"
      />
      <Ticket
        name="vicentegarcya"
        phone="+34 684003481"
        email="hola@vicentegarcya.com"
      />
      <Ticket
        name="vicentegarcya"
        phone="+34 684003481"
        email="hola@vicentegarcya.com"
      />
    </TicketsGroupStyled>
  );
}
