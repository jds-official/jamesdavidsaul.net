import React, { useEffect, useRef } from "react";
import Head from 'next/head';
import Script from 'next/script';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Chivo_Mono } from '@next/font/google'

gsap.registerPlugin(ScrollTrigger);
const chivo = Chivo_Mono({ subsets: ['latin'] })

export default function Home() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      autoAlpha: '1',
      duration: '5',
    });
  });
  
  
  
  return (
    <div>
      <Head>
        <title>jamesdavidsaul.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <h1 ref={boxRef}>
          James David Saul is mostly a Web Developer and Bird Photographer But
          is also sometimes a hot dog 🌭🌭.
        </h1> */}
        <div className="intro">
          <div className="intro--content">
            <h1 ref={boxRef}>
              James David Saul
            </h1>
            <p className={chivo.className}>Scroll to continue...</p>
          </div>
          <img src="/images/adirondack-winter.webp" alt="View of Adirondack Mountains in winter" />
        </div>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        main .intro .intro--content {
          position: absolute;
          z-index: 2;
          top: 30px;
          left: 30px;
        }

        main h1 {
          opacity: 0;
          visibility: hidden;
        }

        main img {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
