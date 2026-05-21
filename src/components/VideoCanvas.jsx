import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 150;

const VideoCanvas = ({ ...props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    const images = [];
    const obj = { frame: 0 };
    let loaded = 0;

    const render = (index) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    };

    const init = () => {
      render(0);

      gsap.to(obj, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: ".bottom",
          start: "top bottom",
          end: "+=2000",
          scrub: 0.5,
        },
        onUpdate: () => render(Math.round(obj.frame)),
      });
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames-nobg/frame${String(i + 1).padStart(4, "0")}.png`;
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) init();
      };
      images[i] = img;
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="vd"
      width={1920}
      height={1080}
      style={{ ...props }}
    />
  );
};

export default VideoCanvas;
