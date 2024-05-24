import { React} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function MainNav() {
    return (
      <>
        <Navbar expand="lg" className="fixed-top bg-white border-b-2">
      <Container fluid>
        
        <Navbar.Brand><Link href='/'> <img src="./airbnb.svg" alt="Airbnb logo" className="w-32 h-8 m-1" /> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
  }
  


