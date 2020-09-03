import styled from 'styled-components';

export const Container = styled.div`
  
`;


export const Form = styled.form`

    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    section.input-group {
        display: flex;
        width: 80%;
        margin: 10px 0;
        input {
            width: 50%;
            margin: 0 5px;

        }

        :nth-child(2){
            margin-bottom: 20px;
        }

    }



    select {
        width: 80%;
        border-radius: 5px;
        padding: 15px 10px;
        border: 1px solid #d6d6d6;
        color: #6e6e6e;
        width: 80%;
        margin-bottom: 20px;
        height: 50px;
        background-color: #fff;
        font-size: 14px;

       :disabled  {
        color: #B7B7CC;
       }
    }


`