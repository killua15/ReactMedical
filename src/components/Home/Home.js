import React, { useState, useEffect } from 'react';

//mport { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';
// import { useTable, useRowSelect } from 'react-table'
import { Button, Form, Input, message, Checkbox } from 'antd';
import { Table } from 'react-bootstrap';

//const { Option } = Select;
// COMPONENT

function HomeComponent() {
    // const [count, setCount] = useState(0);
    const [getUsuarios, getUsuariosFunc] = useState([]);
    const [nameValue, setNameValue] = useState('');
    const [jobValue, setJobValue] = useState('');
    const [check, setCheckFunc] = useState([]);
    //const [selectionType, setSelectionType] = useState('checkbox');

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(getUsuarios => getUsuariosFunc(getUsuarios.data));

    });
    const insertUser = () => {
        console.log(nameValue);
        var data = {
            name: nameValue,
            job: jobValue
        };
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then((data) => {
                message.info(`User Insert ${data.name}`);
            });
    };
    const selectItem = (el, id) => {

        if (el.target.checked === true) {

            if (check.length == 0) {

                setCheckFunc(id);

            } else {
                message.info('Solo Selecione un Elemento');
            }
        }
    };
    const deleteUser = () => {
        console.log('Eliminar');
        console.log(check);
        fetch(`https://reqres.in/api/users/${check}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            //console.log(response);
            message.info(`User Delete ${response.statusText}`);
        });

    };
    return (
        <div>
            <Form className="FormGroup" layout="inline">
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="name" onChange={(nameValue) => setNameValue(nameValue.target.value)} value={nameValue} />
                </Form.Item>
                <Form.Item name="job" label="Job" rules={[{ required: true }]} >
                    <Input placeholder="name" onChange={(jobValue) => setJobValue(jobValue.target.value)} value={jobValue} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={() => insertUser()}>
                        Add User
                    </Button>

                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={() => deleteUser()}>
                        Delete User
                    </Button>

                </Form.Item>
            </Form>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th><Checkbox></Checkbox></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getUsuarios.map(user => {
                                return <tr key={user.id}>
                                    <td>{user.email}</td>
                                    <td colSpan="2">{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td key={user.id}><Checkbox onChange={(v) => selectItem(v, user.id)}></Checkbox></td>
                                </tr>;
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );

}
export default HomeComponent;