import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import VideoCanvas from "./VideoCanvas";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    gsap.to(".vd", {
      currentTime: 5,
      top: "200vw",
      scale: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".bottom",
        start: "top bottom",
        end: "+=1500",
        scrub: true,
      },
    });
    const tlTxt = gsap.timeline();

    const words1 = SplitText.create(".p1", { type: "words" });
    const words2 = SplitText.create(".p2", { type: "words" });
    tlTxt.to(words1.words, {
      scrollTrigger: {
        trigger: ".p1",
        start: "top 80%",
        end: "top 30%",

        scrub: 1,
      },
      color: "var(--main-clr)",
      stagger: "0.2s",
    });
    tlTxt.to(
      ".tag",
      {
        scrollTrigger: {
          trigger: ".tag",
          start: "top 55%",
          end: "bottom 40%",
          scrub: 1,
        },
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 99%)",
      },
      "+=1",
    );
    tlTxt.to(words2.words, {
      scrollTrigger: {
        trigger: ".p2",
        start: "top 55%",
        end: "top 40%",

        scrub: 1,
      },
      color: "var(--main-clr)",
      stagger: "0.2s",
    });
  }, []);
  return (
    <section className="hero">
      <div className="top">
        <h1>CAPY</h1>
        <p> COSTUMIZE YOU CAPS HOWEVER YOU WANT</p>

        <VideoCanvas />

        <div className="card">
          <div className="img">
            <img src="man.webp" alt="" />
          </div>
          <div className="right">
            <h2>Your cap. Your way. No compromise.</h2>
            <p>Premium materials, fair prices, fully customizable</p>
            <div className="btns">
              <button>BUY SOON</button> <button>MORE</button>
            </div>
          </div>
        </div>

        <div className="leftText">
          <p>
            Structured cotton. Washed twill <br />
            Performance mesh. Every cap starts with fabric worth wearing.
          </p>
          <button>LARN MORE</button>
        </div>
      </div>

      <div className="bottom">
        <p className="p1">
          We skip the <br /> cheap stuff. Every <br />
          cap in our catalog <br /> is made from <br />
        </p>
        <span className="tag">CAPY</span>
        <p className="p2">
          {" "}
          carefully sourced <br /> fabrics You'll feel <br /> the difference the{" "}
          <br />
          moment you put it on
        </p>

        <p className="txt">
          We cut out the middlemen so you don't pay for them. <br /> Get
          structured 6-panel caps in 100% cotton <br />
          starting at $12 per piece — with volume pricing that actually scales.
          No hidden setup fees. No minimum order surprises.
        </p>
      </div>
    </section>
  );
};

export default Hero;
