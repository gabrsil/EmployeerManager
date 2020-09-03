import React from 'react';

import { Container, EmployeeInfo, DeleteIcon, EditIcon } from './styles';

interface IRole {
  id: number,
  name: string
}

interface IEmployee {
  id: number
  first_name: string,
  last_name: string,
  role_id: number,
  born_date: string,
  salary: number
  
}

interface IProps {
  employee: IEmployee;
  deleteEmployee: (id: number) => {};
  handleEditEmployee: (employee: IEmployee) => void;
  roleList: IRole[];
} 

const EmployerItem: React.FC<IProps> = ({
  employee,
  roleList,
  deleteEmployee, 
  handleEditEmployee,
}: IProps) => {

  const handleEdit = ():void => {

    handleEditEmployee(employee)
  }

  return (
  
  <Container>
    <EmployeeInfo>
    <span className="role">
      {roleList?.find(role => role.id === employee.role_id)?.name}
    </span>
    <header>
    <h2 className="title">
      {`${employee.first_name} ${employee.last_name}`}
    </h2>
    <EditIcon onClick={() => handleEdit()}/>
    <DeleteIcon  onClick={() => deleteEmployee(employee.id)}/>
  
    </header>
   
    <span className="born-date">Data de Nascimento: {new Date(employee.born_date).toLocaleDateString()}</span>
    <span className="salary">Salário: {employee.salary}</span>
   
    </EmployeeInfo>

    
  </Container>
  
  
    );



}

export default EmployerItem;