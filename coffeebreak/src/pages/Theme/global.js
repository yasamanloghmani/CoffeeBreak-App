import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;

  }
  .Menu-link{
    border: ${({ theme }) => theme.menuLinkBorder};
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    color : ${({theme}) => theme.menuLinkColor}
  }
  .Menu{
    background: ${({ theme }) => theme.menuBG};
    box-shadow:  ${({ theme }) => theme.menuShadow};
  }
  .Menu-link:hover {
    box-shadow : ${({ theme }) => theme.hoverLinkShadow};
  }
  .Menu-link:focus {
      box-shadow : ${({ theme }) => theme.focusLinkShadow};

  }
  `