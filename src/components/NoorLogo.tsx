const NoorLogo = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 220 220">
    <defs>
      <path id="circle-top" d="M 110,110 m -78,0 a 78,78 0 1,1 156,0" />
      <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b3a2e" />
        <stop offset="35%" stopColor="#c1984c" />
        <stop offset="65%" stopColor="#2a6b3c" />
        <stop offset="100%" stopColor="#c1984c" />
      </linearGradient>
    </defs>
    <circle cx="110" cy="110" r="100" fill="none" stroke="#8b3a2e" strokeWidth="0.8" opacity="0.35" />
    <circle cx="110" cy="110" r="94" fill="none" stroke="#8b3a2e" strokeWidth="0.4" opacity="0.2" />
    <text fontFamily="'DM Sans', sans-serif" fontSize="9" letterSpacing="4" fill="#8b3a2e" opacity="0.75">
      <textPath href="#circle-top" startOffset="8%">NOOR · RESTAURANT · EST. 2025 ·</textPath>
    </text>
    <circle cx="86" cy="174" r="1.5" fill="#8b3a2e" opacity="0.6" />
    <circle cx="110" cy="178" r="1.5" fill="#c1984c" opacity="0.6" />
    <circle cx="134" cy="174" r="1.5" fill="#2a6b3c" opacity="0.6" />
    <text fontFamily="'Great Vibes', cursive" fontSize="72" fill="url(#sg)" textAnchor="middle" x="110" y="132">Noor</text>
  </svg>
);

export default NoorLogo;
