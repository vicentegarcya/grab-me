import Link from "next/link";
import styled from "styled-components";

const ButtonStyled = styled.a`
  border: 1px solid red;
  margin: 0 10px;
  padding: 8px 12px;
  font-size: 0.75em;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

type ButtonProps = {
  text: string;
  variant: string;
};

export default function Button({ text, variant }: ButtonProps) {
  return (
    <ButtonStyled>
      {variant === "anchor" ? <Link href={"/create"}>{text}</Link> : (text)}
    </ButtonStyled>
  );
}
