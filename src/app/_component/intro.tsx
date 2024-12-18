export default function Intro() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url(/mountain.jpg)] bg-center bg-cover">
      <svg width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <path
            id="circlePath"
            d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
          />
        </defs>
        <g>
          <text fill="#000" fontSize="39">
            <textPath href="#circlePath">
              KIM DONG HAN KIM DONG HAN KIM DONG HAN
            </textPath>
          </text>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}
