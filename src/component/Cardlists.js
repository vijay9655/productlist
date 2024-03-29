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

function Cardlists() {

    const [cardlist, setCardlist] = useState([]);

    const [open, setOpen] = useState({ visible: false });

    let navigate = useNavigate()
    const showModal = (record) => {
        
        setOpen({ visible: true, record });
    };

    const handleCancel = (e) => {
       
        setOpen({ visible: false });
    };


   
    const onFinish = (values) => {


       
        //var edit = cardlist.findIndex((e) => e.id === values.id);
        let arr = [...cardlist];

        arr.forEach(n => {
            if (n.id === values.id) {
                n.quantity = values.quantity;
            }
        })
        //arr[edit].quantity = values.quantity;
        setCardlist(arr)
        dispatch({ type: 'Edit_card', payload: arr })

        setOpen({ visible: false });
    };
    const onFinishFailed = (errorInfo) => {
       
    };

    let dispatch = useDispatch()

    const { card } = useSelector((state) => state.data);
   




    useEffect(() => {
        setCardlist(card)


    }, [card]);

    const Remove_card = (values) => {
        const removeitem = cardlist.findIndex((e) => e.id === values.id);
        if (removeitem > -1) {
            cardlist.splice(removeitem, 1);       

        }
      
        dispatch({ type: 'Delete_card', payload: cardlist })

        return setCardlist(cardlist)

    }


   

    const moveprod = () => {
        navigate('/')
    }
    return (
        <div>
            <Button onClick={moveprod} style={{ textAlign: 'start', position: 'absolute', border: 'none', textDecoration: 'none' }}><strong>&#8592;Product Lists</strong></Button>
            <MDBContainer fluid className="my-5 text-center">


                <h4 className="mt-4 mb-5">
                    <strong>Card List</strong>
                </h4>

                <MDBRow>
                    {cardlist?.map((items, index) => {


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
                                                    <span className="badge bg-primary ms-2">{items.quantity}</span>
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
                                        <Space>
                                            <Button onClick={() => { showModal(items) }}>Edit Card</Button>
                                            <Button onClick={() => Remove_card(items)}>Remove Card</Button>
                                        </Space>

                                        {/* {cardlist[index * 1]?.id != items.id ? <Button onClick={() => Addcard_items(items)}>AddCard</Button> : <Button onClick={() => Gotocard_items(items)}></Button>} */}




                                    </a>
                                    <h6 className="mb-3">${items.price}</h6>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    })}

                </MDBRow>
            </MDBContainer>

            {
                open.visible && (
                    <Modal
                        title="Add Card"
                        open={open.visible}
                        centered
                        footer='null'
                        onCancel={handleCancel}
                    >
                        {
                            (open.visible && open.record) && (
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    initialValues={{
                                        remember: true,
                                        ...open.record
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="id"
                                        name="id"
                                        initialValue={open.record.id}

                                  
                                    >
                                        <Input disabled={true} defaultValue={open.record.id} />
                                    </Form.Item>

                                    <Form.Item
                                        label="quantity"
                                        name="quantity"
                                        initialValue={open.record.quantity}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your price!',
                                            },
                                        ]}
                                    >
                                        <Input defaultValue={open.record.quantity} value={open.record.quantity} />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Space>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                            <Button onClick={handleCancel} danger={true}>
                                                Cancel
                                            </Button>
                                        </Space>

                                    </Form.Item>
                                </Form>
                            )
                        }

                    </Modal>
                )
            }

        </div>
    );
}

export default Cardlists;