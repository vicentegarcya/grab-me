import Link from "next/link";
import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding-bottom: 1vw;
  font-size: 1.15vw;

  > a {
    background: linear-gradient(#eee, #333);
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export default function Footer() {
  return (
    <FooterStyled className="footer">
      <p>
        ✺ Created, having fun, by{" "}
        <Link href={"https://www.vicentegarcya.com/"}>Vicente Garcya </Link>✺
      </p>
    </FooterStyled>
  );
}
