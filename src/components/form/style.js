import styled from "styled-components";

export const Form = styled.section`
  display: flex;
  flex-flow: column wrap;
  max-height: 50%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  form {
    border: 1px solid black;
    display: flex;
    flex-flow: column wrap;
    width: 50%;
    justify-content: center;
  }

  p {
    text-align: center;
    font-size: 25px;
    font-weight: 900;
    font-family: monospace;
  }

  textarea {
    resize: none;
    width: 100%;
  }

  input {
    width: 100%;
  }

  @media screen and (min-width: 701px) {
    width: 100%;

    form {
      width: 80%;
    }
  }

  @media screen and (min-width: 551px) and (max-width: 700px) {
    form {
      width: 70%;
    }
  }

  @media screen and (min-width: 701px) and (max-width: 1000px) {
    input {
      margin-bottom: 2px;
    }

    p {
      font-size: 22px;
    }
  }
`;
