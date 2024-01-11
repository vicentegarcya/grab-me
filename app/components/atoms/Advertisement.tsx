import Link from "next/link";
import styled from "styled-components";
import { Stardos_Stencil } from 'next/font/google';

const stardos = Stardos_Stencil({weight: '400', subsets: ['latin'] });

const AdvertisementStyled = styled.div`
  border: 1px solid yellow;
  width: 40vw;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  font-size: 1vw;
  z-index: 5;

  > p, > div {
    margin-top: 20px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
`;

type AdvertisementProps = {
  cta: string;
  text: string;
  contact: Array<string>;
};

export default function Advertisement({
  cta,
  text,
  contact,
}: AdvertisementProps) {
    return(
        <AdvertisementStyled>
            <h2 className={stardos.className}>{cta.toUpperCase()}</h2>
            <p>{text}</p>
            <div>
                <p>{contact[0]}</p>
                <Link href={"/"}>{contact[1]}</Link>
                <Link href={"/"}>{contact[2]}</Link>
            </div>
        </AdvertisementStyled>
    )
}
