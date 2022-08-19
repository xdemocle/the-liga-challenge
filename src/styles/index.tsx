import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import BodyBackground from '../assets/background.jpg';
import fonts from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${fonts}

  html, body {
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: url(${BodyBackground}) bottom center no-repeat #151635;
    background-size: cover;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  // Animations
  .opacity-animation {
    animation: animOpacity 0.9s ease-in-out infinite;
    animation-direction: alternate;
  }

  .slide-up {
    animation: slide-up 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
  }

  .rotate {
    animation: rotation 2s infinite linear;
  }

  // Animation keyframes
  @keyframes animOpacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes float2 {
    0% {
      transform: translatey(30px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(30px);
    }
  }

  @keyframes steam1 {
    0% {
      transform: translateY(0) translateX(0) scale(0.25);
      opacity: 0.2;
    }
    100% {
      transform: translateY(-200px) translateX(-20px) scale(1);
      opacity: 0;
    }
  }

  @keyframes steam2 {
    0% {
      transform: translateY(0) translateX(0) scale(0.25);
      opacity: 0.2;
    }
    100% {
      transform: translateY(-200px) translateX(20px) scale(1);
      opacity: 0;
    }
  }
`;
