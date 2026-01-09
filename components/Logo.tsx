import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Definición de gradientes para un look metálico/tech */}
      <defs>
        <linearGradient id="r-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* R Trasera (Efecto de velocidad/Sombra) */}
      <path 
        d="M35 25 V75 M35 50 H50 C58 50 58 25 50 25 H35 M48 50 L60 75" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.3"
      />

      {/* R Delantera (Principal) */}
      <path 
        d="M20 20 V70 M20 45 H40 C48 45 48 20 40 20 H20 M35 45 L50 75" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Chispa de IA (Star) */}
      <path 
        d="M75 15 L78 22 L85 25 L78 28 L75 35 L72 28 L65 25 L72 22 Z" 
        fill="currentColor" 
      >
        <animate 
          attributeName="opacity" 
          values="0.5;1;0.5" 
          dur="2s" 
          repeatCount="indefinite" 
        />
      </path>
    </svg>
  );
};

export default Logo;