import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Cont1 from "../public/cont1.png";
import Cont11 from "../public/cont11.png";
import Cont2 from "../public/cont2.png";
import Cont31 from "../public/cont31.png";
import Cont32 from "../public/cont32.png";
import Cont4 from "../public/cont4.png";
import Cont52 from "../public/cont52.png";
import Cont53 from "../public/cont53.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FefeFire</title>
        <meta name="Online Store" content="Online Summer Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Container 1 */}
      <div className={styles.cont1}>
        <h1>This SUMMER is for legs</h1>
        <Image src={Cont11} />
      </div>
      {/* Container 2 */}
      <div className={styles.cont2}>
        <div>
          <Image src={Cont2} />
        </div>
        <div>
          <h1>FEFIRE:Statment for days</h1>
          <div>
            <span></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper cursus sagittis aliquam sed mattis. Rhoncus purus
              molestie rhoncus tellus.Lorem ipsum Ullamcorper cursus sagittis
              aliquam sed mattis.
            </p>
            <span></span>
          </div>
        </div>
      </div>
      {/* Container 3 */}
      <div className={styles.cont3}>
        <div>
          <div>
            <Image src={Cont31} />
          </div>
          <div>
            <h4>Gray Polly</h4>
            <span></span>
            <p>$200.9</p>
          </div>
        </div>
        <div>
          <div>
            <Image src={Cont32} />
          </div>
          <div>
            <h4>Red Berry</h4>
            <span></span>
            <p>$200.9</p>
          </div>
        </div>
      </div>
      {/* Container 4 */}
      <div className={styles.cont4}>
        <div>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            cursus sagittis aliquam sed mattis. Rhoncus purus molestie rhoncus
            tellus.Lorem ipsum Ullamcorper cursus sagittis aliquam sed mattis.
          </p>
          <span></span>
        </div>
        <div>
          <Image src={Cont4} />
        </div>
      </div>
      <div className={styles.cont5}>
        <div>
          <div>
            <Image src={Cont32} />
          </div>
          <div>
            <h4>Gray Polly</h4>
            <span></span>
            <p>$200.9</p>
          </div>
        </div>
        <div>
          <div>
            <Image src={Cont52} />
          </div>
          <div>
            <h4>Gray Polly</h4>
            <span></span>
            <p>$200.9</p>
          </div>
        </div>
        <div>
          <div>
            <Image src={Cont53} />
          </div>
          <div>
            <h4>Gray Polly</h4>
            <span></span>
            <p>$200.9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
