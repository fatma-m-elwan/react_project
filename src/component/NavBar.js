import {React , useState} from "react";
import {Container , Navbar , Nav} from 'react-bootstrap';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {BrowserRouter as Router } from "react-router-dom"
import {HashLink} from "react-router-hash-link";

const  NavBar = () => {
    const [activate1 , setActivate1] = useState("active")
    const [activate2 , setActivate2] = useState("")
    const [activate3 , setActivate3] = useState("")
    const[activelink, setactivelink]=useState('home');

    const onUpdateActiveLink =(value)=>{
    setactivelink(value);
}

    return(
        <Router>
            <Navbar bg="primary" expand="md">
                <Container>
                    {/* <Navbar.Brand href="">Elwan</Navbar.Brand> */}
                    <a className="navbar-brand fs-1 fw-bold text-light" href="/">Elwan</a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className="ww">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={"nav-link fs-5 text-light" + activate1} onClick={(e) => {setActivate1("active") ; setActivate2("") ; setActivate3("")}}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={"nav-link fs-5 text-light" + activate2} onClick={(e) => {setActivate2("active") ; setActivate1("") ; setActivate3("")}}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={"nav-link fs-5 text-light" + activate3} onClick={(e) => {setActivate3("active") ; setActivate1("") ; setActivate2("")}}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/fatma-mohamed-48893126a/"><img src={navIcon1}/></a>
                                <a href="#"><img src={navIcon2}/></a>
                                <a href="#"><img src={navIcon3}/></a>
                            </div>
                            <HashLink to="#connects" className={activelink === 'connects' ? "active-navbar-link":"navbar-link"} onClick={()=>onUpdateActiveLink('connects')}> 
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
export default NavBar