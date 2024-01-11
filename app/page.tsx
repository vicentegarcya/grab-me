'use client'

import Advertisement from "./components/atoms/Advertisement";
import ButtonsGroup from "./components/molecules/ButtonsGroup";
import TicketsGroup from "./components/molecules/TicketsGroup";
import Footer from "./components/organisms/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ButtonsGroup />
      <Advertisement
        cta="This is the sign that you need a new web"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        contact={['vicentegarcya', '+34 684003481', 'hola@vicentegarcya.com']}
      />
      <TicketsGroup />
      <Footer />
    </main>
  );
}
