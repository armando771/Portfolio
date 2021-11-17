import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 4%;
  background-color: rgb(243, 243, 243);
  align-items: baseline;
  justify-content: space-around;
  margin-top: 2%;

  img {
    width: 40px;
  }

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 25px;
    }

    p {
      font-size: 14px;
    }
  }

`