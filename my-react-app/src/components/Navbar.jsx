import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const NavbarC = () => {
  return (
    // <nav>
    //   <h1>Creovex</h1>
    //   <div>
    //     <a href="#">Home </a>
    //     <a href="#">Case Studies </a>
    //     <a href="#">Blog </a>
    //     <a href="#">About us </a>
    //     <button>Book a call </button>
    //   </div>
    // </nav>
    // <Container>
    <Navbar expand="lg" className="bg-body-tertiary" fixed = "top">
      {/* <Container> */}
        <Navbar.Brand href="#">Creovex</Navbar.Brand>
      {/* </Container> */}
    </Navbar>
  // </Container>


  );
};

export default NavbarC;

