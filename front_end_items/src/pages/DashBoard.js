import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AddObject from '../components/AddForm';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  var [listOfesults, setlistOfesults] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
        fetch('http://localhost:8000/api/v1/ingredients/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                setlistOfesults([...data])
              console.log(listOfesults)
              setLoading(false);
            });
    }
  }, []);



  return (
    <div>
      {loading === false && (
        <Fragment>
            <AddObject/>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Vegan</th>
                    <th>Non-comedogenic</th>
                    <th>China</th>
                </tr>
            </thead>
            <tbody>
                    {listOfesults.map(listitem => (
                        <tr key={listitem.name}>    
                            <td>{listitem.name}</td>
                            {listitem.vegan ? <td>yes</td>:<td>no</td>}
                            {listitem.non_comedogenic ? <td>yes</td>:<td>no</td>}
                            {listitem.can_be_sold_in_china ? <td>yes</td>:<td>no</td>}
                        </tr>                      
                    ))}
            </tbody>
          </Table>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;