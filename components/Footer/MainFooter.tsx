import { Col, Row } from "reactstrap";
import style from "../../assets/css/footer.module.css";
const Footer = () => {
  return (
    <div className={style["footer"]}>
      <div className={style["footer__top"]} />
      <div className={`${style["footer__main"]} bg-indigo-900 px-3`}>
        <Row>
          <Col md="6" className="mb-5">
            <h1>IPInfo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos porro alias ullam, cupiditate eos harum quo ipsum
              quis. Repudiandae, quae?
            </p>
          </Col>
          <Col xs="12" md="2">
            <div className="d-flex justify-content-center">
              <ul className="text-start">
                <li>
                  <h5>Lorem, ipsum dolor.</h5>
                </li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </Col>
          <Col xs="12" md="2">
            <div className="d-flex justify-content-center">
              <ul className="text-start">
                <li>
                  <h5>Lorem, ipsum dolor.</h5>
                </li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </Col>
          <Col xs="12" md="2">
            <div className="d-flex justify-content-center">
              <ul className="text-start">
                <li>
                  <h5>Lorem, ipsum dolor.</h5>
                </li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className={`${style["footer__copyright"]} pt-1 bg-black text-center`}
      >
        <Col xs="12">
          <p className="mb-0">
            Copyright © 2022 made by
            <a href="https://www.majhoolsoft.com" target="_blank">
              Majhoolsoft
            </a>
            All rights reserved.
          </p>
        </Col>
      </div>
    </div>
  );
};
export default Footer;
