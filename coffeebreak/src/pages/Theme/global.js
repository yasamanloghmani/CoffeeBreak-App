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
  .Menu-link:hover , .addBtn:hover, .btn-default:hover{
    box-shadow : ${({ theme }) => theme.hoverLinkShadow};
  }
  .Menu-link:focus , .addBtn:focus, .btn-default:focus, .post{
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
  svg, .AddCoffeeBtn{
    width: 220px;
    height: 220px;
    padding:0;
    margin:0;
    border-radius: 50%;
    box-shadow:  ${({ theme }) => theme.mainShadow};
  }
  .input-group-text{
    background: ${({ theme }) => theme.mainBG};
    color : ${({theme}) => theme.menuLinkColor};
  }
  .pspan{
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    
  }
  .pspan > span {
    box-shadow : ${({ theme }) => theme.focusLinkShadow};
  }
  .members {
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    margin: 10px;
  }
  .channelinfo > h1 {
    font-size : 15px;
  }
  .ProfilePage, .LoginPage, .SignupPage{
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    border-radius: 20px;
    padding:20px;
    border: ${({ theme }) => theme.menuLinkBorder};
    text-align : center;

  }
  .btn-default{
    box-shadow: ${({ theme }) => theme.menuLinkShadow};
    color : ${({theme}) => theme.menuLinkColor}
  }
 
  `