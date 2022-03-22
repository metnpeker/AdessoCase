import React from 'react'
import Navigation from '../Navigation/Navigation';
import {Row, Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import bannerImg from "../../images/banner.jpg";
const Home = () => {
    return (
        <div>
                <Navigation/>
                <Row className="justify-content-md-center" >
                    <Col md={10} xs ={12}>
                    <Image className="w-100" src={bannerImg}></Image>
                    </Col>
                </Row>          
        </div>
    )
}
export default Home;
