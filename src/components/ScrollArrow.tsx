export default function ScrollArrow() {
  const stickyNavTxt = `Scroll for photos`;

  return (
    <div className="flex absolute right-[28vw] xs:right-0 top-[55%] xs:top-[50%] md:top-10 xs:w-[300px] md:w-[370px]">
      <h2
        className="text-2xl xs:text-3xl md:text-4xl font-script animate-bounceLeft text-nowrap"
        style={{ animationDelay: '5s' }}
      >
        {stickyNavTxt}
      </h2>
      <svg
        className="absolute w-25 xs:w-40 md:w-60 top-[-26px] right-[-62px] xs:top-[-48px] xs:right-[20px] md:-top-19.5 md:right-0"
        viewBox="0 0 600 600"
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
