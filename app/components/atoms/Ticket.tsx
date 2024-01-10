import styled from "styled-components";

const TicketStyled = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  transform: rotate(270deg);
`;

type TicketProps = {
  name: string;
  phone: string;
  email: string;
};

export default function Ticket({ name, phone, email }: TicketProps) {
  return (
    <TicketStyled>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </TicketStyled>
  );
}
