import style from "./css/lookup.module.css";
import { Col, Container, Row } from "reactstrap";
import IPInput from "./IPInput";
const MainLookup = () => {
  return (
    <section className={style["lookup"]}>
      <Container>
        <div className={style["lookup__background"]} />
        <Row>
          <Col xs="12">
            <h2 className="text-center">Lookup IP Address:</h2>
          </Col>
        </Row>
        <Row className={`${style["lookup__input"]} mx-auto w-50`}>
          <IPInput></IPInput>
        </Row>
      </Container>
    </section>
  );
};
export default MainLookup;
