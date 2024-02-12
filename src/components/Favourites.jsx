import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
 const favourites = useSelector((state) => state.favourites.content);
 console.log(favourites);
 return (
  <Container className=" mt-5">
   <Row>
    <Col>
     <ListGroup>
      {favourites.map((favourite, i) => (
       <ListGroupItem className="bg-light text-warning" key={i}>
        <a href= {favourite.company_name}</a>
       </ListGroupItem>
      ))}
     </ListGroup>
    </Col>
   </Row>
  </Container>
 );
};

export default Favourites;
