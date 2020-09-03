import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../Modal'
import { Container, Form } from './styles';
import api from '../../services/api'

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
    addEmployee: (employee: Omit<IEmployee, 'id'>) => void;
    roleList: IRole[]
  }

const ModalAddEmployee: React.FC<IProps> = ({
    isOpen,
    setIsOpen,
    addEmployee,
    roleList
}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bornDate, setBornDate] = useState('');
  const [salary, setSalary] = useState();  
  const [selectedRole, setSelectedRole] = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(!selectedRole) return
    addEmployee({
        first_name: firstName,
        last_name: lastName,
        role_id: roleList[selectedRole].id,
        born_date: bornDate,
        salary
    });

    setIsOpen();
  }

  return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1>Adicionar Empregado</h1>
            <Form onSubmit={handleSubmit}>
                <section className="input-group">
                    <input 
                    required 
                    onChange={e => setFirstName(e.target.value)} 
                    className="input-global" 
                    placeholder="Nome" 
                    type="text"
                    />

                    <input 
                    required 
                    onChange={e => setLastName(e.target.value)} 
                    className="input-global" 
                    placeholder="Sobrenome" 
                    type="text"
                    />

                </section>
                <section className="input-group">
                    <input 
                    required 
                    className="input-global" 
                    onChange={e => setBornDate(e.target.value)} 
                    placeholder="Data de Nascimento" 
                    type="text" 
                    onBlur={(e) => e.target.type = 'text'} 
                    onFocus={(e) => e.target.type = 'date'}
                    />

                    <input 
                    required 
                    className="input-global" 
                    onChange={e => {
                    const { value }:any = e.target;
                    setSalary(value)
                    }} 
                    placeholder="Salário" 
                    type="text"
                    />

                </section>
                <select 
                onChange={(e) =>{
                    const { value }: any = e.target;
                    setSelectedRole(value)
                }} 
                defaultValue={-1} 
                className="input-global" 
                placeholder="Cargo">

                    <option hidden value={-1} disabled={true}>Cargo</option>
                    {roleList?.map((role) => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                    ))}
                </select>

                <input type="submit" className="btn-global" value="Cadastrar"/>

            </Form>
        </Modal>
    );
}

export default ModalAddEmployee;