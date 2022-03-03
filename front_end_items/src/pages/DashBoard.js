import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
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
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>vegan</th>
                    <th>non-comedogenic</th>
                    <th>China</th>
                </tr>
            </thead>
            <tbody>
                    {listOfesults.map(listitem => (
                        <tr key={listitem.name}>    
                            <th>{listitem.name}</th>
                            <th>{listitem.type}</th>
                            <th>{listitem.can_be_sold_in.value}</th>
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