import { Nav, Navbar, Button, Container } from "react-bootstrap";
export const Header = () => {
  return (
    <Navbar
      sticky="top"
      style={{
        backgroundColor: "rgb(34 43 69)",
        borderBottom: "#F037A5",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
      }}
    >
      <Container>
        <Nav>
          <Nav.Link
            className="navbar-brand"
           
          >
            ChartJS
          </Nav.Link>
        </Nav>
      
      </Container>
    </Navbar>
  );
};
