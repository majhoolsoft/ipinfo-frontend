import style from "./lookup.module.css";
import { Col, Container, Row } from "reactstrap";
import IPInput from "./IPInput";
const MainLookup = () => {
  return (
    <section className={style["lookup"]}>
      <Container>
        <Row>
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
