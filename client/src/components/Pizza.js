import React,{useState} from 'react'
import {Modal} from 'react-bootstrap';

export default function Pizza({pizzadata}) {
    const [quantity,setquantity] = useState(1);
    const [varient,setvarient] = useState('small');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizzadata.name}</h1>
                <img src={pizzadata.image} className="img-fluid "  style={{height:'200px',width:'200px'}}/>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {pizzadata.varients.map(varient=>{
                            return <option className="form-group" value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((v,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <p className="mt-1"><b>Prices :</b> {pizzadata.prices[0][varient] * quantity} Rs</p>    
                </div>
                <div className="m-1 w-100">
                    <button className="btn btn-danger">Add To Cart</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>{pizzadata.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="model_big_image">
            <img src={pizzadata.image} className="img-fluid "  style={{height:'300px',width:'300px'}}/>
            </div>
            <p>{pizzadata.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleClose} className="btn btn-danger">Close</button>
            </Modal.Footer>
        </Modal>

        </div>
    )
}
