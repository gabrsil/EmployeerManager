import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular';
import { Plus } from '@styled-icons/boxicons-regular'


export const Container = styled.div`
   /* min-width: 100%; */

   min-height: 100vh;
   margin: 0 auto;
   max-width: 1200px;
   width: 1100px;

   @media (max-width: 1100px) {
       width: 800px;
   }

   @media (max-width: 800px) {
       width: 100%;
   }

   
`;

export const PlusIcon = styled(Plus)`

    width: 35px;
    height: 35px;

`



export const Manager = styled.section`
    padding: 40px 0;
  
  

    section.btn-area {
        margin: 60px 0 10px;
        display: flex;


        button.add-employee, button.add-role {
            display: flex;
            align-items: center;
            padding: 10px 12px;
         
            height: 45px;
            border: none;
            background-color: #fff;
            color: #fff;
            border-radius: 3px;
            background-color: var(--main-greenbtn);
            transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

            span {
                font-size: 0.9rem;
                font-weight: 600;
            }
            

        }

        button.add-role {
            background-color: #f5776e;
            margin: 0 15px 0 auto;

        }

        button:hover {
            transform: scale(1.05);
        }

    }

    @media (max-width: 1100px){
        section.btn-area {
            padding: 0 15px;
        }
    }


`

export const SearchIcon = styled(SearchAlt2)`

    width: 32px;
    height: 32px;
    margin: 0;
    padding: 0;
    color: #696666;

`

export const SearchBar = styled.form`

    width: 60%;
    
    margin: 0 auto;
    height: 45px;
    border: 1px solid #c2c2c2;
    display: flex;
    align-items: center;

    border-radius: 5px;
    input {
        border-radius: 8px;
        height: 100%;
        
        border: none;
        background: #fff;
        width: calc(100% - 60px);
        padding: 10px 15px;
        color: #828282;
        
        font-size: 1.2rem;
    }

    button {
        border-radius: 5px;
        background-color: #fff;
        border: none;
        height: 100%;
        width: 60px;
        border-left: 1px solid #dedede;
        transition: background 0.2s linear;
    }

    button:hover {
       background-color: #e8e8e8;
    }

    @media (max-width: 1100px){
        width: 80%;
    }


`



export const EmployeeList = styled.section`
   /* display: flex;
   flex-direction: column;
   border: 1px solid red; */
   @media (max-width: 1100px){
       padding: 0 20px;
    }

`
