import React from 'react'
import Navigation from '../Navigation/Navigation';
import {Container, Table} from "react-bootstrap";
import { useLocation } from 'react-router';



const UnitsDetails = () => {
    const { state } = useLocation();
    return (
        <div>
        <Navigation />
        <Container>
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{state.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{state.description}</td>                               
                    </tr>
                    <tr>
                        <td>Min. Requried Age:</td>
                        <td>{state.age}</td>                               
                    </tr>
                    <tr>
                        <td>Wood Cost:</td>
                        <td >{state.cost.Wood}</td>                               
                    </tr>
                    <tr>
                        <td>Gold Cost:</td>
                        <td>{state.cost.Gold}</td>                               
                    </tr>
                    <tr>
                        <td>Build Time:</td>
                        <td>{state.build_time}</td>                               
                    </tr>
                    <tr>
                        <td>Reload Time:</td>
                        <td>{state.reload_time}</td>                               
                    </tr>
                    <tr>
                        <td>Hit Points:</td>
                        <td>{state.hit_points}</td>                               
                    </tr>
                    <tr>
                        <td>Attacks:</td>
                        <td>{state.attack}</td>                               
                    </tr>
                    <tr>
                        <td>Accuracy:</td>
                        <td>{state.accuracy}</td>                               
                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>
    )
}
export default UnitsDetails;