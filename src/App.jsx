import { useState } from "react";
import Calculadora from "./Components/Calculadora";
import styled from "styled-components";

const AppContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: url("https://4kwallpapers.com/images/wallpapers/gradient-background-2560x1440-10974.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export default function App() {
  return (
      <AppContainer>
        <Calculadora />
      </AppContainer>
  );
}