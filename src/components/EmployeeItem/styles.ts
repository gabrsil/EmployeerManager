import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons';
import { Delete } from '@styled-icons/material';
import { EditOutline } from '@styled-icons/evaicons-outline'

export const Container = styled.div`

   width: 100%;
   border-bottom: 1px solid #dedede;
   padding: 15px;
   /* box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2); */
   margin-bottom: 15px;
   border-left: 4px solid #fff;
   transition: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
   cursor: pointer;
   box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
   

 :hover {
   
    transform: translateX(-5px);
    border-left: 4px solid #5adbd9;
 
 }

`;

export const EditIcon = styled(EditOutline)`

width: 29px;
height: 29px;
margin-right: 5px;
color: #4F4F4F;
transition: transform 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  :hover {
    transform: scale(1.2);
  }

`

export const DeleteIcon = styled(Delete)`

  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  color: #4F4F4F;
  :hover {
    transform: scale(1.2);
  }


`


export const EmployeeInfo = styled.section`

display: flex;
flex-direction: column;
/* font-family: Montserrat;*/

header {
    display: flex;

}

span.role {
    color: #2eaba1;
    font-weight: bold;
    font-size: 1rem;
}

h2.title {
    font-weight: 600;
    color: #4F4F4F;
    font-size: 1.3rem;
    margin-right: auto;
}


span.born-date {
    font-weight: 500;
    color: #828282;
    font-size: 1rem;
}

span.salary {
    color: #4F4F4F;
    font-weight: 600;
}


`
