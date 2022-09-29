import { Col, Container, Row } from "reactstrap";
import IPInput from "./IPInput";
const MainLookup = () => {
  return (
    <section>
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <Col xs="12" md="3">
            <h2 className="text-center">IP Address:</h2>
          </Col>
          <Col xs="12" md="6">
            <IPInput></IPInput>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default MainLookup;
