export default function ScrollArrow() {
  const stickyNavTxt = `Scroll for photos`;

  return (
    <div className="flex">
      <h2
        className="text-3xl lg:text-4xl font-script animate-bounceLeft text-nowrap relative left-[19%] lg:left-[18%]"
        style={{ animationDelay: '5s' }}
      >
        {stickyNavTxt}
      </h2>
      <svg
        className="w-90 lg:w-100 relative -top-23 lg:-top-26"
        viewBox="0 0 800 800"
      >
        <g
          strokeWidth="6"
          stroke="oklch(96.9% 0.015 12.422)"
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
              stroke="oklch(96.9% 0.015 12.422)"
              strokeLinecap="round"
              transform="matrix(1,0,0,1,1.8333333333333333,2.75)"
              strokeLinejoin="round"
            ></polyline>
          </marker>
        </defs>
      </svg>
    </div>
  );
}
