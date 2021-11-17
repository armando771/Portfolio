import styled from "styled-components";

export const AboutMe = styled.main`
  display: flex;
  flex-flow: column wrap;

  section {
    text-align: center;
    height: 500px;
    background-color: rgb(243, 243, 243);
    color: rgb(0, 0, 0);
    height: 40%;
    padding-bottom: 5vh;
    font-family: monospace;
  }

  h2 {
    padding-top: 5vh;
  }

  span {
    color: rgb(26, 204, 26);
    margin-left: 3px;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 999px) and (min-width: 601px) {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    h2 {
      font-size: 42px;
    }

    p {
      font-size: 28px;
      margin: 0px 5px 0px 5px;
    }
  }
`;

export const H4 = styled.h4`
  img {
    width: 30px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media screen and (max-width: 999px) and (min-width: 601px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    font-size: 40px;
  }
`;
