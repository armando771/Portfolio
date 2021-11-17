
import styled from "styled-components";

export const Form = styled.section`

   display: flex;
   flex-flow: column wrap;
   max-height: 40%;
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
   font-size: 20px;
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

`