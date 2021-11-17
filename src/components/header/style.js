import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: white;

  span { 
    width: 50%;
  }

  div {
    display: flex;
    width: 40%;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
  }

  a link {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 18px;
  }

 img {
   width: 30px;
}
`