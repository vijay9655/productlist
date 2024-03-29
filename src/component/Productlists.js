import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, Input, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import 'antd/dist/reset.css';
import '../App.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import Item from "antd/es/list/Item";

function Productlists() {
    const [prodlist, setProdlist] = useState([]);
    const [cardlist, setCardlist] = useState([]);
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const { product_list } = useSelector((state) => state.data);
    const { card } = useSelector((state) => state.data);
  




    useEffect(() => {
        setProdlist(product_list)
        setCardlist(card)

    }, [product_list]);
    useEffect(() => {
        setProdlist(product_list)

        setCardlist(card)
      


    }, [card]);


   

    const Addcard_items = (values) => {

        setCardlist([...cardlist, { 'id': values.id, 'img': values.img, 'status': true, 'type': values.type, 'prodname': values.prodname, 'price': values.price, 'quantity': 1 }])

    }
    const Gotocard_items = (values) => {
        dispatch({ type: 'Add_card', payload: cardlist })
        navigate('/cardlist')
    }

    return (
        <div>

            <MDBContainer fluid className="my-5 text-center">
                <h4 className="mt-4 mb-5">
                    <strong>Product List</strong>
                </h4>

                <MDBRow>
                    {prodlist?.map((items, index) => {


                        return <MDBCol md="12" lg="4" className="mb-4">
                            <MDBCard>
                                <MDBRipple
                                    rippleColor="light"
                                    rippleTag="div"
                                    className="bg-image rounded hover-zoom"
                                >
                                    <MDBCardImage
                                        src={items.img}
                                        fluid
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                <h5>
                                                    <span className="badge bg-primary ms-2">{items.type}</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="hover-overlay">
                                            <div
                                                className="mask"
                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                            ></div>
                                        </div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <a href="#!" className="text-reset">
                                        <h5 className="card-title mb-3">{items.prodname}</h5>
                                    </a>

                                    <a className="text-reset">


                                        {cardlist[cardlist?.findIndex(Item=>Item.id === items.id)]?.id != items.id ? <Button onClick={() => Addcard_items(items)}>AddCard</Button> : <Button onClick={() => Gotocard_items(items)}>Goto Card</Button>}




                                    </a>
                                    <h6 className="mb-3">${items.price}</h6>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    })}

                </MDBRow>
            </MDBContainer></div>
    );
}

export default Productlists;