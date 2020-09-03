import React, {useState} from 'react';
import Modal from '../Modal'
// import { Container } from './styles';
import {Form} from '../ModalAddEmployee/styles';

interface IRole {
    id: number,
    name: string
}

interface IProps {
    isOpen: boolean;
    setIsOpen: () => void;
    addRole: (employee: Omit<IRole, 'id'>) => void;
  }

const ModalAddRole: React.FC<IProps> = ({
    isOpen,
    setIsOpen,
    addRole
}) => {

  const [name, setName] = useState();
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addRole({name})
    setIsOpen();

  }  

  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h1>Cadastrar Cargo</h1>
          <Form onSubmit={handleSubmit}>
              <input 
              type="text" 
              onChange={e => setName(e.target.value)} 
              placeholder="Nome" 
              className="input-global"
              />
              <input type="submit" value="Cadastrar" className="btn-global"/>
          </Form>

      </Modal>
  );
}

export default ModalAddRole;