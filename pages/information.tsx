import MainLayout from "../layouts/Main/Main";
import InformationLookup from "../components/Lookup/InformationLookup";
import style from "../assets/css/information.module.css";
import { Alert, Col, Container, Row } from "reactstrap";
const Information = () => {
  return (
    <>
      <section className={`${style["information"]} mb-5`}>
        <Container>
          <Row className="my-5">
            <Col xs="12">
              <InformationLookup></InformationLookup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="3" className={style["risk"]}>
              <h3 className="py-3 text-center">Lorem, ipsum dolor:</h3>
              <Col xs="12" role="alert">
                <Alert className="bg-indigo-800 text-center text-white border-0">
                  <Row>
                    <Col xs="12">
                      <h4>3/5</h4>
                    </Col>
                  </Row>
                  <Row className="fs-2 gx-1">
                    <Col>
                      <i className="fa fa-skull-crossbones text-danger" />
                    </Col>
                    <Col>
                      <i className="fa fa-skull-crossbones text-danger" />
                    </Col>
                    <Col>
                      <i className="fa fa-skull-crossbones text-danger" />
                    </Col>
                    <Col>
                      <i className="fa fa-skull-crossbones" />
                    </Col>
                    <Col>
                      <i className="fa fa-skull-crossbones" />
                    </Col>
                  </Row>
                </Alert>
              </Col>
              <h3 className="py-3 text-center">Lorem, ipsum dolor:</h3>
              <Col xs="12">
                <Alert className="text-white border-0 bg-indigo-800">
                  <ul>
                    <li className="d-flex justify-content-between">
                      <span>Lorem, ipsum.</span>
                      <span>
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Lorem</span>
                      <span>
                        <i className="fa fa-check-circle text-success" />
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Lorem, ipsum.</span>
                      <span>
                        <i className="fa fa-ban text-danger" />
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Lorem</span>
                      <span>
                        <i className="fa fa-ban text-danger" />
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Lorem, ipsum.</span>
                      <span>
                        <i className="fa fa-ban text-danger" />
                      </span>
                    </li>
                  </ul>
                </Alert>
              </Col>
            </Col>
            <Col xs="12" md="9">
              <h3 className="py-3 text-center">Lorem, ipsum dolor:</h3>
              <Alert className="bg-indigo-800 border-0 text-white">
                <ul>
                  <li className=" d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum</span>
                    <span className={`${style["space"]} flex-grow-1`} />
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className=" d-flex flex-wrap justify-content-between">
                    <span className="text-start">lorem</span>
                    <span className={`${style["space"]} flex-grow-1`} />
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className=" d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum dolor.</span>
                    <span className={`${style["space"]} flex-grow-1`} />
                    <span className="text-end">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </li>
                  <li className=" d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum dolor.</span>
                    <span className={`${style["space"]} flex-grow-1`} />
                    <span className="text-end">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </li>
                  <li className=" d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum dolor.</span>
                    <span className={`${style["space"]} flex-grow-1`} />
                    <span className="text-end">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </li>
                </ul>
              </Alert>
              <h3 className="py-3 text-center">Lorem, ipsum dolor:</h3>
              <Alert className="bg-indigo-800 text-white border-0">
                <ul>
                  <li className="d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum</span>
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum</span>
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum</span>
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-between">
                    <span className="text-start">Lorem, ipsum</span>
                    <span className="text-end">Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>
                <div
                  id="map"
                  className="w-100 mx-auto rounded"
                  style={{ height: 300, backgroundColor: "red" }}
                >
                  map
                </div>
              </Alert>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

Information.layout = MainLayout;
export default Information;
