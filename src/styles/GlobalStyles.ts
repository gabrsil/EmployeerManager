import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #FFF;
       
    }

   body, button, input {
    font-family: 'Poppins', sans-serif;
      font-size: 16px;

   } 

   button {
       cursor: pointer;
   }

   a {
       text-decoration: none;
   }

   ul {
       list-style-type: none;
   }

   input.input-global {
    border-radius: 5px;
    padding: 20px 15px;
    color: #6e6e6e;
    border: none;
    width: 80%;
    height: 45px;
    font-size: 1rem;
    margin-bottom: 10px;
    border-radius: 5px;
    
    ::placeholder {
        color: #B7B7CC;
       
    }
  
   }

   :root {
       --main-greenbtn: #45dea8;
   }
   
   input.btn-global {
     background-color: var(--main-greenbtn);
     width: 60%;
     border: none;
     color: #fff;
     padding: 8px 10px;
     cursor: pointer;
     border-radius: 5px;
     font-weight: bold;
     transition: 0.2s linear;
     margin: 15px 0;
     text-align: center;

     :hover {
         transform: scale(1.05);
         filter: brightness(1.01)
     }
    
   }

   

   /* input.input-global:focus {
  transition: 0.3s;
  border: 1px solid #5aa1ad;
  color: #535353;
} */


`