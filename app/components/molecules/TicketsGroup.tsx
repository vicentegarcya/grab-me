import styled from "styled-components";
import Ticket from "../atoms/Ticket";

const TicketsGroupStyled = styled.div`
  width: 40vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  transform-origin: left top;
  margin-top: 12vw;
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
