import React from 'react'
import { Nav,Navbar, Container} from "react-bootstrap";

const Navigation = () => {  
        return (
            <div>
                <Navbar> 
                 <Container>
                    <Navbar.Brand className="justify-content-center"></Navbar.Brand>
                        <Navbar.Collapse className = "justify-content-end">
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/units">Units</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>    
                 </Container>  

                </Navbar>
            </div>
        )
}
export default Navigation;