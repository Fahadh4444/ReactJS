import React, { useState, useEffect } from 'react';
import { Axios } from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "";

const url = "https://api.pixels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "https://jsonware.com/json/3631f2ed0b38f18d32387d6c5c92c665.json";

const Buypage = ({ addInCart }) => {

    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         };
    //     }); 
    // };

    const fetchPhotos = async () => {
        const { data } = await Axios.get(localUrl)
    };

    const { photos } = data;

    useEffect(() => {
        fetchPhotos();
    }, []);


};

export default BuyPage;