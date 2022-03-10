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
import Cont61 from "../public/cont61.png";
import Cont62 from "../public/cont62.png";
import Cont7 from "../public/cont7.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useIntersection } from "react-use";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let app = useRef(null);
  let image = useRef(null);
  let cont2 = useRef(null);
  let cont7 = useRef(null);

  var tl = gsap.timeline();

  useEffect(() => {
    //IMage Vars
    const testimage = image.firstElementChild;

    // Content Vars
    const pic1 = cont2.children[0];
    const word1 = cont2.children[1].children[0];
    const span1 = cont2.children[1].children[1];
    console.log(span1);
    // console.log(headLineFirst);

    tl.from(image, { duration: 1.2, y: 0, ease: "power4.in" }).from(
      testimage,
      {
        y: 100,
        duration: 2,
        scale: 1.5,
        opacity: 0,
        ease: "power4.out",
      },
      0.2
    );

    // Pic 1 Animation
    gsap.from(pic1, {
      duration: 1.5,
      xPercent: -50,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: pic1,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Word animation
    gsap.from(word1, {
      duration: 1.5,
      xPercent: 50,
      opacity: 0,
      ease: "power4.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: word1,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Span Animation
    gsap.from(span1, {
      duration: 1.5,
      y: -30,
      opacity: 0,
      ease: "power4.out",
      delay: 0.8,
      scrollTrigger: {
        trigger: word1,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont7
    gsap.from(cont7, {
      duration: 2,
      width: "0%",
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cont7,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>FefeFire</title>
        <meta name="Online Store" content="Online Summer Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Container 1 */}
      <div className={styles.cont1}>
        <div className={styles.textdiv}>
          <h1>This SUMMER is for legs</h1>
        </div>
        <div className={styles.cont11} ref={(el) => (app = el)}>
          <div ref={(el) => (image = el)}>
            <Image src={Cont11} />
          </div>
        </div>
      </div>
      {/* Container 2 */}
      <div className={styles.cont2} ref={(el) => (cont2 = el)}>
        <div className={styles.cont2left}>
          <Image src={Cont2} />
        </div>
        <div className={styles.cont2right}>
          <h1>FEFEFIRE: Statment for days</h1>
          <div>
            <div className={styles.span}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper cursus sagittis aliquam sed mattis. Rhoncus purus
              molestie rhoncus tellus.Lorem ipsum Ullamcorper cursus sagittis
              aliquam sed mattis.
            </p>
            <div className={styles.span}></div>
          </div>
        </div>
      </div>
      {/* Container 3 */}
      <div className={styles.cont3}>
        <div className={styles.cont31}>
          <div>
            <Image src={Cont31} />
          </div>
          <div className={styles.cont3bot}>
            <h4>Gray Polly</h4>
            <div className={styles.span2}></div>
            <p>$200.9</p>
          </div>
        </div>
        <div className={styles.cont32}>
          <div>
            <Image src={Cont32} />
          </div>
          <div className={styles.cont3bot}>
            <h4>Red Berry</h4>
            <div className={styles.span2}></div>
            <p>$200.9</p>
          </div>
        </div>
      </div>
      {/* Container 4 */}
      <div className={styles.cont4}>
        <div className={styles.cont4left}>
          <div className={styles.span3}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            cursus sagittis aliquam sed mattis. Rhoncus purus molestie rhoncus
            tellus.Lorem ipsum Ullamcorper cursus sagittis aliquam sed mattis.
          </p>
          <div className={styles.span3}></div>
        </div>
        <div className={styles.cont4right}>
          <Image src={Cont4} />
          <div className={styles.cont4bot}>
            <h4>Red Berry</h4>
            <div className={styles.span4}></div>
            <p>$200.9</p>
          </div>
        </div>
      </div>
      {/* Container 5 */}
      <div className={styles.cont5}>
        <div className={styles.cont51}>
          <div>
            <Image src={Cont32} />
          </div>
          <div className={styles.cont5bot}>
            <h4>Gray Polly</h4>
            <div className={styles.span5}></div>
            <p>$200.9</p>
          </div>
        </div>
        <div className={styles.cont52}>
          <div>
            <Image src={Cont52} />
          </div>
          <div className={styles.cont5bot}>
            <h4>Gray Polly</h4>
            <div className={styles.span5}></div>
            <p>$200.9</p>
          </div>
        </div>
        <div className={styles.cont53}>
          <div>
            <Image src={Cont53} />
          </div>
          <div className={styles.cont5bot}>
            <h4>Gray Polly</h4>
            <div className={styles.span5}></div>
            <p>$200.9</p>
          </div>
        </div>
      </div>
      {/* Container 6 */}
      <div className={styles.cont6}>
        <h1>The Cotton Quality✨</h1>
        <div className={styles.cont61}>
          <Image src={Cont61} />
          <Image src={Cont62} />
        </div>
      </div>
      {/* Container 7 */}
      <div className={styles.cont7}>
        <h1>All New Arrivals🛬</h1>
        <div ref={(el) => (cont7 = el)}>
          <Image src={Cont7} />
        </div>
      </div>
    </div>
  );
}
