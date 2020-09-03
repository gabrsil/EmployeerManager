import React, { useState } from 'react';
import Modal from '../Modal'
import { Form } from '../ModalAddEmployee/styles'

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
    isOpen: boolean;
    setIsOpen: () => void;
    editEmployee: (employee: Omit<IEmployee, "id">) => void;
    roleList: IRole[],
    editingEmployee: IEmployee
  }

const ModalEditEmployee: React.FC<IProps> = ({
    isOpen,
    setIsOpen,
    editEmployee,
    roleList,
    editingEmployee
}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [salary, setSalary] = useState();  
    const [selectedRole, setSelectedRole] = useState();

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    editEmployee({
        first_name: !firstName ? editingEmployee.first_name : firstName,
        last_name: !lastName ? editingEmployee.last_name : lastName,
        born_date: !bornDate ? editingEmployee.born_date : bornDate,
        role_id: !selectedRole ? editingEmployee.role_id : roleList[selectedRole].id,
        salary: !salary ? editingEmployee.salary : salary
    })

    setIsOpen();
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>Editar Empregado</h1>
        <Form onSubmit={handleSubmit}>
                <section className="input-group">
                    <input 
                    defaultValue={editingEmployee.first_name} 
                    onChange={e => setFirstName(e.target.value)} 
                    className="input-global" 
                    placeholder="Nome" 
                    type="text"
                    />
                    <input 
                    defaultValue={editingEmployee.last_name} 
                    onChange={e => setLastName(e.target.value)} 
                    className="input-global" 
                    placeholder="Sobrenome" 
                    type="text"
                    />

                </section>
                <section className="input-group">
                    <input 
                    defaultValue={editingEmployee.born_date} 
                    className="input-global" 
                    onChange={e => setBornDate(e.target.value)} 
                    placeholder="Data de Nascimento" 
                    type="text" onBlur={(e) => e.target.type = 'text'} 
                    onFocus={(e) => e.target.type = 'date'}
                    />
                    <input 
                    defaultValue={editingEmployee.salary} 
                    className="input-global" 
                    onChange={e => setSalary(e.target.value)} 
                    placeholder="Salário" 
                    type="text"
                    />

                </section>
                <select onChange={(e) =>{
                    
                   const { value }:any = e.target;   
                   setSelectedRole(value);

                }} defaultValue={editingEmployee.role_id} className="input-global" placeholder="Cargo">
                    <option hidden value={-1} disabled={true}>Cargo</option>
                    {roleList?.map((role) => (  
                            <option key={role.id} value={role.id}>{role.name}</option>        
                    ))}
                </select>

                <input type="submit" className="btn-global" value="Atualizar"/>

            </Form>
    </Modal>
    );
}

export default ModalEditEmployee;