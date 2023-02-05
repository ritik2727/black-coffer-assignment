import { Row, Col, Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  Title,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
} from "chart.js";
import { Doughnut, Radar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

export const Charts = ({ details }) => {
  // variables
  // intensity
  const intensities = details && details.map((details) => details.intensity);
  const likelihoods = details && details.map((details) => details.likelihood);
  const countries = details && details.map((details) => details.country);
  const regions = details && details.map((details) => details.region);
  const countrySet = new Set([...countries]);
  const country_set = [...countrySet];
  const regionSet = new Set([...regions]);
  const region_set = [...regionSet];

  const relevances = details && details.map((details) => details.relevance);
  const relevanceSet = new Set([...relevances]);
  const relevance_set = [...relevanceSet];

  const intensityData = {
    labels: region_set,
    datasets: [
      {
        label: "Intensity",
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
          "Aqua",
          "gray",
          "white",
          "pink",
          "brown",
        ],
        borderColor: "#001529",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: intensities,
      },
    ],
  };
  const likelikHoodData = {
    labels: country_set,
    datasets: [
      {
        label: "Likelihood",
        data: likelihoods,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Radar Chart",
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          "black",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
        ],
      },
      ticks: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: region_set,
    datasets: [
      {
        label: "Relevance",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: relevance_set,
        color:'whitesmoke'
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      
      color:'whitesmoke',
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          color:'whitesmoke',
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  };

  return (
    <div>
      <Row className="g-3">
        <Col xs={12}>
          <Card
            className="h1-100"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color:'whitesmoke'
            }}
          >
            <Card.Body>
              <Card.Title>Intensity</Card.Title>
              <Doughnut data={intensityData} />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card
            className="h1-100"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color:'whitesmoke'
            }}
          >
            <Card.Body>
              <Card.Title>Likelihood</Card.Title>
              <Radar data={likelikHoodData} options={options} />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card
            className="h1-100"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color:'whitesmoke'
             
            }}
          >
            <Card.Body>
              <Card.Title>Relevance</Card.Title>
              <Line data={data} options={config} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
