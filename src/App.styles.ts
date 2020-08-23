import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url('https://wallpapercave.com/wp/wp2406986.jpg');
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background-size: cover;
        background-repeat: none;
        overflow: hidden;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   p {
    color: #000;
  }
  .p {
    color: rgb(255,187,1);
    font-family: 'Modak';
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family:;
    color: white;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    height: 50px;
    margin: 40px 0;
    padding: 0 40px;
    color: rgb(255,187,1);
    font-family: 'Modak';
  }
   .next:hover {
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25)
  }
  .next:focus {
    outline: none;
  }
  .start {
    max-width: 200px;
  }
  .loader-div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loader {
    position: relative;
    width: 10vw;
    height: 5vw;
    padding: 1.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loader span {
    position: absolute;
    height: 0.8vw;
    width: 0.8vw;
    border-radius: 50%;
    background-color: rgb(2,176,29);
  }
  
  .loader span:nth-child(1) {
    animation: loading-dotsA 0.5s infinite linear;
  }
  
  .loader span:nth-child(2) {
    animation: loading-dotsB 0.5s infinite linear;
  }
  
  @keyframes loading-dotsA {
    0% {
      transform: none;
    }
    25% {
      transform: translateX(2vw);
    }
    50% {
      transform: none;
    }
    75% {
      transform: translateY(2vw);
    }
    100% {
      transform: none;
    }
  }
  
  @keyframes loading-dotsB {
    0% {
      transform: none;
    }
    25% {
      transform: translateX(-2vw);
    }
    50% {
      transform: none;
    }
    75% {
      transform: translateY(-2vw);
    }
    100% {
      transform: none;
    }
  }
  .q-card {
    margin-top: 30px;
}
  
`;