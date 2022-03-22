import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import {Tabs, Tab, Container, Table} from "react-bootstrap";
import { useNavigate } from "react-router-dom"


const Units = () => {
    //Axios Call Starts
    const [allUnits, setAllUnits] = useState([]) 
    useEffect(async() => {
        const response = await axios.get("http://localhost:3004/units")
        setAllUnits(response.data)
      },[]);
      //Axios Call End
      //Navigation To Details Page
      let navigate = useNavigate();
      const redirect = (selectedData) => {
        navigate(`/unitsdetails/${selectedData.id}` , { state:selectedData})
      }
       
    return (
             <div>
                <Navigation/>
                <Container>    
                    <h3 className="mb-3">Ages</h3>                 
                    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="all" title="All">
                            
                        </Tab>
                        <Tab eventKey="dark" title="Dark">
                            
                        </Tab>
                        <Tab eventKey="feudal" title="Feudal">
                            
                        </Tab>
                        <Tab eventKey="castle" title="Castle">
                       
                        </Tab>
                        <Tab eventKey="imperial" title="Imperial">
                           
                        </Tab>
                    </Tabs>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>costs</th>
                            </tr>
                        </thead>
                        <tbody>
                        { allUnits && allUnits.map((unit, index) => (
                            <tr key={index} onClick={() => redirect(unit)}>
                                <td>{unit.id}</td>
                                <td>{unit.name}</td>
                                <td>{unit.age}</td>
                                <td>
                                    {unit.cost ? Object.keys(unit.cost).map((item, index2) => {
                                        return( 
                                        <div key={index2}>
                                            <span>{item}: </span>
                                            <span>{unit.cost[item]}<br/></span>
                                        </div>
                                        )   
                                    }) : ""}
                                </td>
                            </tr>
                        ))}       
                        </tbody>
                    </Table>
                </Container>
            </div>
    )
}
export default Units;