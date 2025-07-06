'use client';
// import { useEffect, useState } from 'react';

export default function Footer() {
  const stickyNavTxt = `Keep Scrollin'`;
  return (
    <div>
      <footer>
        <div className="fixed bottom-0 right-0 flex items-center">
          <h2 className="text-5xl font-script relative -top-15 left-28 animate-bounceLeft">
            {stickyNavTxt}
          </h2>
          <div className="flex justify-center mt-8">
            <svg className="w-100" viewBox="0 0 800 800">
              <g
                strokeWidth="6"
                stroke="hsl(0, 0%, 0%)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M249.81211853027344 253.01633644104004Q560.8121185302734 204.01633644104004 549.8121185302734 553.01633644104 "
                  markerEnd="url(#SvgjsMarker1249)"
                ></path>
              </g>
              <defs>
                <marker
                  markerWidth="11"
                  markerHeight="11"
                  refX="5.5"
                  refY="5.5"
                  viewBox="0 0 11 11"
                  orient="auto"
                  id="SvgjsMarker1249"
                >
                  <polyline
                    points="0,5.5 5.5,2.75 0,0"
                    fill="none"
                    strokeWidth="1.8333333333333333"
                    stroke="hsl(0, 0%, 0%)"
                    strokeLinecap="round"
                    transform="matrix(1,0,0,1,1.8333333333333333,2.75)"
                    strokeLinejoin="round"
                  ></polyline>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
