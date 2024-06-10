import React from "react";
import { Button, Navbar } from "flowbite-react";
import logo from "../assets/img/logo.png";
import arrow from "../assets/img/arrow.png";


function Header() {
  return (
    <div className="header relative">
      <Navbar fluid rounded className="bg-transparent p-0">
        <Navbar.Brand href="/">
          <img src={logo} className="" alt="Logo" />
        </Navbar.Brand>

       
        <div className="flex md:order-2">
         
            <div class="rainbow ">
             BEGIN NOW
             <img src={arrow} className="ml-2 w-6 h-4" alt="Logo" />
            </div>

            <div class="warning">
              <p>
                ⚠️ Your browser does not support{" "}
                <a href="https://web.dev/css-individual-transform-properties/">
                  @property
                </a>{" "}
                so the animation won’t work
                <br />
                Please use Chrome.
              </p>
            </div>
        
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            HOME
          </Navbar.Link>
          <Navbar.Link href="#">PROJECTS</Navbar.Link>
          <Navbar.Link href="#">YODHA AI POWER</Navbar.Link>
          <Navbar.Link href="#">BLOG</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
