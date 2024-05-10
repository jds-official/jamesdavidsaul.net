import React, { useEffect, useRef } from "react";
import Head from 'next/head';
import Script from 'next/script';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Chivo_Mono } from '@next/font/google'

gsap.registerPlugin(ScrollTrigger);
const chivo = Chivo_Mono({ subsets: ['latin'] })

export default function Home() {
  const continueRef = useRef();
  const heronRef = useRef();
  const mountainRef = useRef();
  const cityRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // @todo actually use an effect lol.

    // gsap.to(continueRef.current, {
    //   scrollTrigger: {
    //     trigger: 'main',
    //     start: "top top",
    //     end: "+200",
    //     scrub: true,
    //   },
    //   x: -200,
    //   autoAlpha: 0,
    // });

    // gsap.to(mountainRef.current, {
    //   scrollTrigger: {
    //     trigger: ".intro--bg",
    //     start: "top top",
    //     end: "+=500",
    //     scrub: true,
    //   },
    //   scale: 2,
    //   autoAlpha: 0,
    // });


    // gsap.to(contactRef.current, {
    //   scrollTrigger: {
    //     trigger: "main",
    //     start: "+=300",
    //     end: "+=600",
    //     scrub: true,
    //   },
    //   autoAlpha: 1,
    // });

  });
  
  
  
  return (
    <div>
      <Head>
        <title>jamesdavidsaul.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="intro">
          <div className="intro--content" ref={continueRef}>
            <h1>
              James David Saul
            </h1>
            <div className={chivo.className}>
              <p>Maybe there will be a real website here someday...</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/jamesdavidsaul/" target="_blank">
                  <img src="/images/linkedin.svg" alt="LinkedIn" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/jamesdavidsaul" target="_blank">
                  <img src="/images/instagram.svg" alt="Instagram" />
                  <span>Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@jamesdavidsaul" target="_blank">
                  <img src="/images/tiktok.svg" alt="TikTok" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
          <img className="intro--bg" ref={mountainRef} src="/images/adirondack-winter.webp" alt="View of Adirondack Mountains in winter" />
          {/* <img className="heron" ref={heronRef} src="/images/heron.webp" alt="Great Blue Heron" /> */}
        </div>
        {/* <div className="contact">
          <div className={chivo.className} ref={contactRef}>
            <p>James David Saul is mostly a Web Developer and Photographer. But
          is also <button className="hot-dog">sometimes a hot dog 🌭🌭</button>.</p>
            <p>Catch me on <a href="https://www.linkedin.com/in/jamesdavidsaul/" target="_blank">LinkedIn</a> or <a href="https://instagram.com/jamesdavidsaul" target="_blank">Instagram</a>.</p>
          </div>
          <img className="city-beach" ref={cityRef} src="/images/citybeach.webp" alt="NYC Skyline" />
        </div> */}
      </main>

      <footer>

      </footer>

      <style jsx>{`
        main .intro .intro--content {
          position: fixed;
          z-index: 3;
          top: 10px;
          left: 30px;
        }

        main .intro--bg {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }

        .social {
          display: flex;
        }

        .social span {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }

        .heron {
          position: fixed;
          z-index: 1;
          width: 50%;
          top: 0;
          right: 0;
          transform: translateY(100%);
        }

        .city-beach {
          position: fixed;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          top: 0;
          transform: translateY(25%) scale(1.5);
        }

        .contact > div {
          position: fixed;
          z-index: 4;
          opacity: 0;
          top: 0;
          visibility: hidden;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
