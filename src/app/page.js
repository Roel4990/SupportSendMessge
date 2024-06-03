import Image from "next/image";
import styles from '../styles/Home.module.css'
import FormComponent from "@/components/FormComponent.client";
export default function Home() {
  return (
      <div className={styles.container}>
          <main className={styles.main}>
              <h1>응원 메시지를 남겨주세요.</h1>
              <p>
                  여러분의 연예인을 위해 응원 메시지를 남겨주세요.
              </p>
              <FormComponent/>
          </main>
          <footer className={styles.footer}>
              by Roel Dev
          </footer>
      </div>
  );
}
