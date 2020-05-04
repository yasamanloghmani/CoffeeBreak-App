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
  .fixed{
    position: relative;
}
.HeaderImg{
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 30%;
}
  h1 {
    font-size: 25px;
    text-shadow:1px 1px 7px #d93a00d7;
    color: orangered;
    margin-bottom: 15px;
    }
  .Menu-link, .addBtn{
    border: ${({ theme }) => theme.menuLinkBorder};
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    color : ${({theme}) => theme.menuLinkColor}
  }
  .Menu{
    border: ${({ theme }) => theme.menuLinkBorder};
    background: ${({ theme }) => theme.mainBG};
    box-shadow:  ${({ theme }) => theme.mainShadow};
  }
  .Menu-link:hover , .addBtn:hover{
    box-shadow : ${({ theme }) => theme.hoverLinkShadow};
  }
  .Menu-link:focus , .addBtn:focus{
      box-shadow : ${({ theme }) => theme.focusLinkShadow};
  }
  .flexRight, .dashboardbox, .headerbox {
    background: ${({ theme }) => theme.mainBG};
    box-shadow:  ${({ theme }) => theme.mainShadow};
    border-radius: 20px;
    padding:20px;
    border: ${({ theme }) => theme.menuLinkBorder};
  }
  .addBtn{
    background: ${({ theme }) => theme.mainBG};
  }
  `