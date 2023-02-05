import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Sidebar } from "./components/Sidebar";
import { Charts } from "./components/Charts";
import "./App.css";

export const App = () => {
  const [details, setdetails] = useState([]);

  const show = async (e) => {
    const res = await fetch("/api/dashboard", {
      method: "GET",
    });

    const resdata = await res.json();
    console.log(resdata.data);
    setdetails(resdata.data);
  };

  useEffect(() => {
    show();
  }, []);
  // const [details, setDetails] = useState([])
  // const { get } = axios

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await get('http://localhost:4000/api/dashboard')
  //     console.log(data.details);
  //     setDetails(data.details)
  //   })()
  // }, [])

  return (
    <>
     <div
            style={{
              backgroundColor:'rgb(26 33 56)',
              height: "100%",
              width: "100%",
            }}
          >
      <Header />
      <Container>
        <Row>
          <Col xs={2} lg={2}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <Charts details={details} />
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};
