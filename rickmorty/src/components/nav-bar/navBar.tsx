import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="lg" className="bg-body-tertiary">
            <Container className="align-items-center">
                <BoostrapNavbar.Brand href="/">
                    <h1> Rick and Morty</h1>
                </BoostrapNavbar.Brand>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            {" "}
                            Personagens
                        </Link>

                        <Link className="nav-link" to="episodes">
                            {" "}
                            Episódios
                        </Link>

                        <Link className="nav-link" to="location">
                            {" "}
                            Localizações
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
