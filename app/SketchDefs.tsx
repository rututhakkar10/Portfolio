// Hand-drawn wobble filter, applied to icons via the CSS `filter: url(#sketch)`.
export default function SketchDefs() {
  return (
    <svg width="0" height="0" className="sketch-defs" aria-hidden="true">
      <defs>
        <filter id="sketch">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
