import styled from "styled-components";

const TicketStyled = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: calc(40vw / 8);
  padding: 8px 12px;

  > p {
    font-size: 0.85vw;
  }
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
