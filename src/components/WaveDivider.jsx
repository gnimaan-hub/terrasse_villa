export default function WaveDivider({ flip = false, topColor, bottomColor }) {
  return (
    <div style={{ backgroundColor: flip ? topColor : bottomColor, lineHeight: 0, display: 'block' }}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '90px',
          transform: flip ? 'scaleY(-1)' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wave-animate"
          d="M0,45 C200,90 400,0 600,45 C800,90 1000,0 1200,45 C1320,67 1380,22 1440,45 L1440,90 L0,90 Z"
          fill={flip ? bottomColor : topColor}
        />
        <path
          d="M0,60 C300,20 600,80 900,40 C1100,15 1300,70 1440,50 L1440,90 L0,90 Z"
          fill={flip ? bottomColor : topColor}
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
