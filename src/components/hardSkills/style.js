import styled from "styled-components";

export const HardS = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(243, 243, 243);
  height: 40%;
  padding: 3px;
  margin-top: 1%;
  margin-bottom: 2%;

  @keyframes pictures {
    from {
      opacity: 0;
      transform: translateX(-60px);
    }
    to {
      opacity: 1;
    }
  }

  img {
    width: 70px;
    animation: pictures 8s;
  }

  p {
    font-size: 25px;
    font-weight: 900;
    font-family: monospace;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 18px;
    }

    img {
      width: 50px;
      animation: pictures 8s;
    }
  }

  @media screen and (max-width: 999px) and (min-width: 601px) {
    p {
      font-size: 30px;
    }

    img {
      width: 70px;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    p {
      font-size: 40px;
      margin-bottom: 15px;
    }

    img {
      width: 80px;
    }
  }
`;

export const FirstLineTecnologies = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`;

export const SecondLineTecnologies = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;

export const ThirdLineTecnologies = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 1%;
`;
