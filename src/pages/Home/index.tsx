import React, { useState, useEffect } from 'react';
import ModalAddEmployee from '../../components/ModalAddEmployee'
import ModalAddRole from '../../components/ModalAddRole'
import ModalEditEmployee from '../../components/ModalEditEmployee'
import api from '../../services/api';


import { 
    Container,
    EmployeeList, 
    Manager, 
    SearchBar,
    SearchIcon,
    PlusIcon
    } from './styles';

import EmployeeItem from '../../components/EmployeeItem';


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


const Home: React.FC = () => {


    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [modalAddRoleOpen, setModalAddRoleOpen] = useState(false);
    const [roleList, setRoleList] = useState<IRole[]>([]);
    const [editingEmployee, setEditingEmployee] = useState<IEmployee>({} as IEmployee);
    const [userSearch, setUserSearch] = useState('');

  const loadEmployees = async (): Promise<void> => {
      await api.get('/employees')
      .then(res => setEmployers(res.data))
      .catch(err => console.log(err))
  }

  const loadRoleData = async () => {
    await api.get('/roles')
    .then(res => setRoleList(res.data))
    .catch(err => console.log(err))
}


  useEffect(() => {
    loadEmployees();
    loadRoleData();
  }, [])

  

  const toggleModalAdd = () => {
    setModalAddOpen(!modalAddOpen);
  }

  const toggleModalEdit = () => {
    setModalEditOpen(!modalEditOpen);
  }

  const toggleModalAddRole = () => {
    setModalAddRoleOpen(!modalAddRoleOpen);
  }

  const handleEditEmployee = (employee: IEmployee): void => {

    setEditingEmployee(employee);
    setModalEditOpen(true);

  }



  const [employers, setEmployers] = useState<IEmployee[]>([]);

  const deleteEmployee = async (id: Number): Promise<void> => {
    await api.delete(`/employees/${id}`);
    setEmployers(state => state.filter(empl => empl.id !== id));
  }


  const editEmployee = async (employee: Omit<IEmployee, "id">): Promise<void> => {
    await api
       .put(`/employees/${editingEmployee.id}`, employee)
       .then(res => {
        setEmployers(state =>
             state.map(item => (item.id === res.data.id ? res.data : item)),
             );
        })
        .catch(err => console.log(err))
  }    

  const addEmployee = async (employee: Omit<IEmployee, 'id'>) => {
    await api.post('/employees', employee)
    .then(res => setEmployers([...employers, res.data]))
    .catch(err => console.log(err))
  }

  const addRole = async (role: Omit<IRole, 'id'>) => {
    await api.post('/roles', role)
    .then(res => setRoleList([...roleList, res.data]))
    .catch(err => console.log(err))
}

  return (
      <Container>
            <ModalAddEmployee
            addEmployee={addEmployee}
            setIsOpen={toggleModalAdd}
            isOpen={modalAddOpen}
            roleList={roleList}
            />

            <ModalAddRole
            addRole={addRole}
            setIsOpen={toggleModalAddRole}
            isOpen={modalAddRoleOpen}
            />

            <ModalEditEmployee
            isOpen={modalEditOpen}
            setIsOpen={toggleModalEdit}
            roleList={roleList}
            editingEmployee={editingEmployee}
            editEmployee={editEmployee}
            />

            <Manager>
            <SearchBar onSubmit={e => e.preventDefault()}>
                <input onChange={e => setUserSearch(e.target.value)} placeholder="Ex: Lucas Santos" type="text"/>
                <button>
                    <SearchIcon/>
                </button>
            </SearchBar>
            <section className="btn-area">
            <button onClick={() => toggleModalAddRole()} className="add-role">
                <PlusIcon/>
                <span>Adicionar Cargo</span>
            </button>
            <button onClick={() => toggleModalAdd()} className="add-employee">
                <PlusIcon/>
                <span>Adicionar Funcionário</span>
            </button>

            </section>

            </Manager>

           <EmployeeList>
            {employers && (
                employers.filter(({ first_name, last_name }) => `${first_name} ${last_name}`.toLowerCase().indexOf(userSearch?.toLowerCase()) > -1).map((employer) => (
                    <EmployeeItem
                     key={employer.id}
                     employee={employer}
                     deleteEmployee={deleteEmployee}
                     handleEditEmployee={handleEditEmployee}
                     roleList={roleList}
                    />
                ))
            )}

           </EmployeeList>

      </Container>
  
  );
}

export default Home;