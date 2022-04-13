import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import { GlobalStyles } from "./components/styled/global.styled";

const theme = {
  bgColors: {
    header: '#fff',
    body: '#f0f2f5',
    hover: 'rgba(0,0,0,.05)',
    hover_gray: '#dadde1',
    post_bg: 'rgba(255,255,255,.6)',
    green_main: '#00A400',
    gray: '#cccccc'
  },

  bs: {
    body: 'rgba(0,0,0,.12)',
  },

  radius: {
    circle : '50%',
    normal : '30px',
    small: '6px',
  },

  fontColors: {
    facebook: '#0165E1',
    facebook_alt: '#1877F2',
    black: '#1c1e21',
    gray: '#606770',
    gray_01: '#8D949E',
    lightgray: 'lightgray',
  },

}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <Body />
      </>    
    </ThemeProvider>

  );
}

export default App;
