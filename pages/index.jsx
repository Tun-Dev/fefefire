import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {
  Cont2,
  Cont4,
  Cont7,
  Cont11,
  Cont31,
  Cont32,
  Cont52,
  Cont53,
  Cont61,
  Cont62,
} from "../public";
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
  let cont3 = useRef(null);
  let cont31 = useRef(null);
  let cont32 = useRef(null);
  let cont4 = useRef(null);
  let cont4span = useRef(null);
  let cont4span1 = useRef(null);
  let cont4word = useRef(null);
  let cont4pic = useRef(null);
  let cont5 = useRef(null);
  let cont6 = useRef(null);
  let cont61 = useRef(null);
  let cont62 = useRef(null);
  let cont51 = useRef(null);
  let cont52 = useRef(null);
  let cont53 = useRef(null);

  var tl = gsap.timeline();

  useEffect(() => {
    //IMage Vars
    const testimage = image.firstElementChild;

    // Content Vars
    const pic1 = cont2.children[0];
    const word1 = cont2.children[1].children[0];
    const span1 = cont2.children[1].children[1];

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
      y: -100,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      scrollTrigger: {
        trigger: word1,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont3 animations
    let revealContainers = document.querySelectorAll(".grayreveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector(".cont31img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: cont3,
          start: "top center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        duration: 1.5,
        yPercent: 100,
        ease: "Power2.out",
      });
      tl.from(image, {
        duration: 1.5,
        yPercent: -100,
        scale: 1.3,
        delay: -1.5,
        ease: "Power2.out",
      });
    });

    gsap.from([cont31, cont32], {
      duration: 1,
      xPercent: 50,
      opacity: 0,
      ease: "back",
      delay: 0.5,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: cont3,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont4 animation
    gsap.from(cont4span, {
      duration: 1.5,
      scaleX: 0,
      delay: 0.5,
      transformOrigin: "right center",
      scrollTrigger: {
        trigger: cont4,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from(cont4span1, {
      duration: 1.5,
      scaleX: 0,
      delay: 0.5,
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: cont4,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    gsap.from(cont4word, {
      opacity: 0,
      delay: 1,
      duration: 1.2,
      y: -50,
      scrollTrigger: {
        trigger: cont4,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    gsap.from(cont4pic, {
      duration: 1.5,
      xPercent: 50,
      opacity: 0,
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: cont4,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont5
    gsap.fromTo(
      [".bbox"],
      {
        // duration: 1,
        opacity: 0,
        y: 200,
      },
      {
        duration: 1,
        y: 0,
        ease: "back",
        opacity: 1,
        stagger: {
          from: "center",
          each: 0.1,
        },
        scrollTrigger: {
          trigger: cont5,
          start: "top center",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );

    gsap.from([cont51, cont52, cont53], {
      duration: 1,
      yPercent: 50,
      opacity: 0,
      ease: "back",
      delay: 0.5,
      stagger: {
        from: "center",
        each: 0.3,
      },
      scrollTrigger: {
        trigger: cont5,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont6
    gsap.from([cont61, cont62], {
      duration: 2,
      delay: 0.8,
      opacity: 0,
      rotation: -30,
      // transformOrigin: "top",
      ease: "Back.easeOut",
      scrollTrigger: {
        trigger: cont61,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from(".upper", {
      delay: 0,
      duration: 1,
      opacity: 0,
      y: 100,
      x: -199,
      skewY: 10,
      scrollTrigger: {
        trigger: cont6,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Cont7

    gsap.from(".lower", {
      delay: 0,
      duration: 1,
      opacity: 0,
      y: -100,
      x: -900,
      // skewX: 100,
      // skewY: 100,
      scrollTrigger: {
        trigger: cont7,
        start: "top center",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
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
    <>
      <Head>
        <title>FefeFire</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
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
        <div className={styles.cont3} ref={(el) => (cont3 = el)}>
          <div className={styles.cont31}>
            <div className="grayreveal">
              <div className="cont31img">
                <Image src={Cont31} />
              </div>
            </div>
            <div className={styles.cont3bot} ref={(el) => (cont31 = el)}>
              <h4>Gray Polly</h4>
              <div className={styles.span2}></div>
              <p>$200.9</p>
            </div>
          </div>
          <div className={styles.cont32}>
            <div className="grayreveal">
              <div className="cont31img">
                <Image src={Cont32} />
              </div>
            </div>
            <div className={styles.cont3bot} ref={(el) => (cont32 = el)}>
              <h4>Red Berry</h4>
              <div className={styles.span2}></div>
              <p>$200.9</p>
            </div>
          </div>
        </div>
        {/* Container 4 */}
        <div className={styles.cont4} ref={(el) => (cont4 = el)}>
          <div className={styles.cont4left}>
            <div className={styles.span3} ref={(el) => (cont4span = el)}></div>
            <p ref={(el) => (cont4word = el)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper cursus sagittis aliquam sed mattis. Rhoncus purus
              molestie rhoncus tellus.Lorem ipsum Ullamcorper cursus sagittis
              aliquam sed mattis.
            </p>
            <div className={styles.span3} ref={(el) => (cont4span1 = el)}></div>
          </div>
          <div className={styles.cont4right} ref={(el) => (cont4pic = el)}>
            <div>
              <Image src={Cont4} />
            </div>
            <div className={styles.cont4bot}>
              <h4>Red Berry</h4>
              <div className={styles.span4}></div>
              <p>$200.9</p>
            </div>
          </div>
        </div>
        {/* Container 5 */}
        <div className={styles.cont5} ref={(el) => (cont5 = el)}>
          <div className={styles.cont51} id="box">
            <div className="bbox">
              <Image src={Cont32} />
            </div>
            <div className={styles.cont5bot} ref={(el) => (cont51 = el)}>
              <h4>Gray Polly</h4>
              <div className={styles.span5}></div>
              <p>$200.9</p>
            </div>
          </div>
          <div className={styles.cont52}>
            <div className="bbox">
              <Image src={Cont52} />
            </div>
            <div className={styles.cont5bot} ref={(el) => (cont52 = el)}>
              <h4>Gray Polly</h4>
              <div className={styles.span5}></div>
              <p>$200.9</p>
            </div>
          </div>
          <div className={styles.cont53}>
            <div className="bbox">
              <Image src={Cont53} />
            </div>
            <div className={styles.cont5bot} ref={(el) => (cont53 = el)}>
              <h4>Gray Polly</h4>
              <div className={styles.span5}></div>
              <p>$200.9</p>
            </div>
          </div>
        </div>
        {/* Container 6 */}
        <div className={styles.cont6} ref={(el) => (cont6 = el)}>
          <h1 className="upper">The Cotton Quality✨</h1>
          <div className={styles.cont61}>
            <div ref={(el) => (cont61 = el)}>
              <Image src={Cont61} />
            </div>
            <div ref={(el) => (cont62 = el)}>
              <Image src={Cont62} />
            </div>
          </div>
        </div>
        {/* Container 7 */}
        <div className={styles.cont7}>
          <h1 className="lower">All New Arrivals🛬</h1>
          <div ref={(el) => (cont7 = el)}>
            <Image src={Cont7} />
          </div>
        </div>
      </div>
    </>
  );
}
