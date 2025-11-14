// Modern CSS-in-JS Features Test File

import { css as emotionCss, Global } from '@emotion/react'
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} from 'styled-components'

// Styled Components Specific
const StyledButton = styled.button`
  background: ${(props) => (props.primary ? '#7aa2f7' : '#bb9af7')};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? '#6a92e7' : '#ab90e7')};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #7aa2f7;
    outline-offset: 2px;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
  max-width: 400px;
  margin: 0 auto;

  ${(props) =>
    props.variant === 'elevated' &&
    css`
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  `}

  ${(props) =>
    props.variant === 'outlined' &&
    css`
    background: transparent;
    border: 2px solid #7aa2f7;
    color: #7aa2f7;
  `}
`

// Emotion CSS-in-JS
const buttonStyles = emotionCss`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const variantStyles = {
  primary: emotionCss`
    background: #7aa2f7;
    color: white;

    &:hover {
      background: #6a92e7;
    }
  `,
  secondary: emotionCss`
    background: #bb9af7;
    color: white;

    &:hover {
      background: #ab90e7;
    }
  `,
  danger: emotionCss`
    background: #f7768e;
    color: white;

    &:hover {
      background: #e7657d;
    }
  `,
}

// CSS Modules Specific
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  composes: container;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1b26;
  margin-bottom: 1rem;
  text-align: center;
}

.description {
  composes: container;
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

:global(.global-class) {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 4px;
}

// Keyframes and Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const AnimatedBox = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;

  ${(props) =>
    props.slide &&
    css`
    animation: ${slideIn} 0.3s ease-out;
  `}
`

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #2d3748;
    background: #f7fafc;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  a {
    color: #7aa2f7;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #6a92e7;
    }
  }

  button {
    font-family: inherit;
  }
`

// Emotion Global Styles
const emotionGlobalStyles = emotionCss`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #7aa2f7;
    --secondary-color: #bb9af7;
    --success-color: #9ece6a;
    --warning-color: #e0af68;
    --error-color: #f7768e;
    --background-color: #ffffff;
    --text-color: #2d3748;
    --border-color: #e2e8f0;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

// Complex Styled Component with Props
const ResponsiveGrid = styled.div`
  display: grid;
  gap: ${props => props.gap || '1rem'};
  grid-template-columns: ${props => {
    switch (props.columns) {
      case 1:
        return '1fr';
      case 2:
        return 'repeat(2, 1fr)';
      case 3:
        return 'repeat(3, 1fr)';
      case 4:
        return 'repeat(4, 1fr)';
      default:
        return 'repeat(auto-fit, minmax(250px, 1fr))';
    }
  }};

  @media (max
