import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function Topbar()
{
    return(
        <Container fluid className="p-3">

            <Row>
                <Col xs={3}>
                <img src={require ('./Images/logoflip.png')}/>
                </Col>
                <Col xs={6}>
                <input type="text" placeholder="Search for Products, Brands and More"></input>
                </Col>
                <Col  >
                <span className="icon">  <FaRegUserCircle /></span> 
              
                </Col>
               
                <Col>
                <span className="icon"><FaCartArrowDown /></span>
                
                </Col>
            </Row>

        </Container>
    )
}