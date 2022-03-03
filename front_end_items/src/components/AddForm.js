import React, { useState, useEffect, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AddObject() {
    const [showing, setShow] = useState(false);
    const [product, setProduct] = useState('')
    const [vegan, setVegan] = useState(false)
    const [NonComedogenic, setNonComedogenic] = useState(false)
    const [canBeSoldInChina, setCanBeSoldInChina] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(NonComedogenic)
        fetch('http://localhost:8000/api/v1/ingredients/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                "name": product,
                "vegan": vegan,
                "non_comedogenic": NonComedogenic,
                "can_be_sold_in_china": canBeSoldInChina
            })
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Add a new product
        </Button>
        <Modal show={showing} onHide={handleClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>product</Form.Label>
                        <Form.Control type="String" placeholder="Enter Prouct Name" onChange={e => setProduct(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Vegan" onClick={e => setVegan(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Non-Comedogenic" onClick={e => setNonComedogenic(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Can Be Sold In China" onClick={e => setCanBeSoldInChina(e.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
      </>
    );
  }
  
  export default AddObject;