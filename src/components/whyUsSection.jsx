import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const WhyUsSection = () => {
  useGSAP(() => {
    gsap.to(".progress", {
      height: "100%",
      scrollTrigger: {
        trigger: ".whyus",
        start: "top 50%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".imgg", {
      translateY: "-30%",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 70%",
        scrub: 1,
      },
    });
    gsap.to(".imgg2", {
      translateY: "-10%",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 70%",
        scrub: 1,
      },
    });
    gsap.to(".card", {
      rotate: "3deg",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 70%",
        scrub: 1,
      },
    });
    gsap.to(".card2", {
      rotate: "-5deg",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 70%",
        scrub: 1,
      },
    });
    gsap.to(".card3", {
      rotate: "5deg",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 10%",
        scrub: 1,
      },
    });
    gsap.to(".imgg3", {
      translateY: "-10%",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 0%",
        scrub: 1,
      },
    });
    gsap.to(".card4", {
      rotate: "-5deg",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 0%",
        scrub: 1,
      },
    });
    gsap.to(".imgg4", {
      translateY: "-10%",

      scrollTrigger: {
        trigger: ".imgg",
        start: "top 120%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section className="whyus ">
      <h1>WHY CHOOSE US</h1>
      <div className="line">
        <div className="progress"></div>
      </div>
      <div className="card">
        <div className="title">
          <div className="num">1</div>
          <h2>Built from better materials</h2>
        </div>

        <div className="img">
          <p>
            We skip the cheap stuff. Every cap in our
            <br /> catalog is made from carefully sourced fabrics{" "}
          </p>
          <img className="imgg" src="2.webp" alt="" />
        </div>
      </div>
      <div className="card2">
        <div className="title">
          <div className="num">2</div>
          <h2>Every detail, yours to decide</h2>
        </div>

        <div className="img">
          <p>
            Choose your fabric, crown structure, brim style, <br /> closure
            type, and colorway
          </p>
          <img className="imgg2" src="1.webp" alt="" />
        </div>
      </div>
      <div className="card3">
        <div className="title">
          <div className="num">3</div>
          <h2>Every detail, yours to decide</h2>
        </div>

        <div className="img">
          <p>
            Choose your fabric, crown structure, brim style, <br /> closure
            type, and colorway
          </p>
          <img className="imgg3" src="3.png" alt="" />
        </div>
      </div>
      <div className="card4">
        <div className="title">
          <div className="num">4</div>
          <h2>Premium doesn't have to mean expensive</h2>
        </div>

        <div className="img">
          <p>
            We cut out the middlemen so you don't pay for them. Get structured
            6-panel caps in 100% <br />
            cotton starting at $12 per piece
          </p>
          <img className="imgg4" src="4.webp" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
