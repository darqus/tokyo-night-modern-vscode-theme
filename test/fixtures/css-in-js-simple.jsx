// Simple CSS-in-JS Features Test File

import styled, { css, keyframes } from 'styled-components'

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

// Emotion-like CSS-in-JS
const buttonStyles = css`
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
  primary: css`
    background: #7aa2f7;
    color: white;

    &:hover {
      background: #6a92e7;
    }
  `,
  secondary: css`
    background: #bb9af7;
    color: white;

    &:hover {
      background: #ab90e7;
    }
  `,
  danger: css`
    background: #f7768e;
    color: white;

    &:hover {
      background: #e7657d;
    }
  `,
}

// CSS Modules Specific
const container = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
}

const title = {
  composes: container,
  fontSize: '2rem',
  fontWeight: '700',
  color: '#1a1b26',
  marginBottom: '1rem',
  textAlign: 'center',
}

const description = {
  composes: container,
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#4a5568',
  marginBottom: '1.5rem',
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

// Complex Styled Component with Props
const ResponsiveGrid = styled.div`
  display: grid;
  gap: ${(props) => props.gap || '1rem'};
  grid-template-columns: ${(props) => {
    switch (props.columns) {
      case 1:
        return '1fr'
      case 2:
        return 'repeat(2, 1fr)'
      case 3:
        return 'repeat(3, 1fr)'
      case 4:
        return 'repeat(4, 1fr)'
      default:
        return 'repeat(auto-fit, minmax(250px, 1fr))'
    }
  }};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

// CSS-in-JS with Custom Properties
const ThemeProviderExample = styled.div`
  --primary-color: #7aa2f7;
  --secondary-color: #bb9af7;
  --background-color: #ffffff;
  --text-color: #2d3748;
  --border-color: #e2e8f0;

  background: var(--background-color);
  color: var(--text-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);

  .button {
    background: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: var(--secondary-color);
    }
  }

  .card {
    background: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

// Export examples for testing
export {
  StyledButton,
  StyledCard,
  buttonStyles,
  variantStyles,
  container,
  title,
  description,
  fadeIn,
  slideIn,
  AnimatedBox,
  ResponsiveGrid,
  ThemeProviderExample,
}
