import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import { toast, ToastContainer } from 'react-toastify';
import { Container, Row, Col } from "reactstrap";

import Buypage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    })

    if (isAlreadyAdded !== -1) {
      toast("Already Added to Cart", {
        type: 'error'
      });
    };
    if (isAlreadyAdded === -1) {
      setCartItem([...cartItem, item]);
    };

  };

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase Complete!!!", {
      type: 'success'
    })
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <Buypage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
