import { Col, Card, Button } from "react-bootstrap";
import {SpinnerRoundOutlined, SpinnerInfinity} from 'spinners-react'

const Character = ({image, name, gender, status, species, created}) => {
  return (
    <Col md={4} style={{ width: "18rem" }}>
      <Card bg={"dark text-white text-center mt-3 mb-3"}>
        <Card.Img variant={"top"} src={image} />
        <Card.Body>
          <Card.Title>
            {name} - {gender}
          </Card.Title>
            <Card.Text>
              <p>
              {status === "Alive" || status === "Dead" ? ( 
              <SpinnerRoundOutlined color={status === "Alive" ? "#38ad48" : "red"}/>) : (
              <SpinnerInfinity color={"#38ad48"}/>)  
              } {status} - {species}
                

              </p> 
            </Card.Text>  
          <Button type={"button"} variant={"primary"} block>
            Ver màs
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
