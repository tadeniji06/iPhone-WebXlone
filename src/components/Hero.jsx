import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  //handle video rendering based on window width
  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  //useEffect to handle video rendering based on window width
  useEffect(() => {
    window.addEventListener("resize", handleVideo);
    return () => {
      window.removeEventListener("resize", handleVideo);
    };
  }, []);

  //use gsap to animate hero title
  useGSAP(() => {
    gsap.to(".hero-title", {
      y: 50,
      opacity: 1,
      delay: 2,
      duration: 1,
      ease: "power4.out",
    });
    gsap.to("#cta", {
      y: -50,
      yoyo: true,
      opacity: 2,
      delay:1.5,
      ease: "bounce"
    });
  }, []);
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            loop
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p className="text-white font-bold">From $199/Month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
