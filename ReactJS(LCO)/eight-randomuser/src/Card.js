import React from 'react';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <p className="mb-0"><FaMapMarkedAlt className="pr-1" />{details.location?.city}</p>
                    <p className="mb-0"><FaPhone className="pr-1" />{details.phone}</p>
                    <FaEnvelope className="pr-1" />
                    {details.email}
                    <h2 className="text-primary mt-3" style={{ border: "2px solid black", borderRadius: "25px" }}>
                        Date of Year : {details.dob?.date[0]}{details.dob?.date[1]}{details.dob?.date[2]}{details.dob?.date[3]}
                    </h2>
                </CardText>
            </CardBody>
        </Card>
    )
};

export default MyCard;