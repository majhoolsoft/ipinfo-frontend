import MainLayout from "../layouts/Main/Main";
import style from "../assets/css/index.module.css";
import triangle from "../assets/img/triangle.svg";
import Lookup from "../components/Lookup/MainLookup";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
  Table,
} from "reactstrap";
import Image from "next/image";
import { useState } from "react";
const Home = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);

  const toggleFaq1 = () => setFaq1(!faq1);
  const toggleFaq2 = () => setFaq2(!faq2);
  const toggleFaq3 = () => setFaq3(!faq3);

  return (
    <>
      <Lookup />
      <section className={`${style["second"]} text-dark`}>
        <article className={`${style["second__top"]} bg-light text-center p-5`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores
            adipisci, a accusantium praesentium nesciunt cum quia sunt eveniet
            excepturi aliquam numquam doloremque voluptas atque velit
            necessitatibus incidunt aliquid labore!
          </p>
        </article>
        <div className="bg-light py-5">
          <Container>
            <Row className="gy-5 mb-5">
              <Col md="6">
                <article>
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias praesentium nihil sunt dolorem in omnis. Ipsum
                    voluptatum quaerat ex molestias.
                  </p>
                  <Button color="danger" outline className="rounded-pill me-2">
                    Try for free
                  </Button>
                  <Button color="primary" outline className="rounded-pill">
                    read more
                  </Button>
                </article>
              </Col>
              <Col md="6">
                <div className={style["code-window"]}>
                  <div
                    className={`${style["code-window__header"]} bg-indigo-900 px-2 rounded-top d-flex align-items-center`}
                  >
                    <Input
                      type="text"
                      placeholder="Lorem ipsum dolor sit"
                      className="form-control border-0 bg-indigo-900 text-secondary"
                    />
                    <Button className="ml-2 bg-indigo-900 btn-purple--hover">
                      <i className="fa fa-search" />
                    </Button>
                  </div>
                  <div
                    className={`${style["code-window__code"]}  rounded-bottom p-1`}
                  >
                    <code>
                      {"{"} "ipAddress": "2.190.231.78", "continentCode": "AS",
                      "continentName": "Asia", "countryCode": "IR",
                      "countryName": "Iran", "isEuMember": false,
                      "currencyCode": "IRR", "currencyName": "Rial",
                      "phonePrefix": "98", "languages": [ "fa-IR", "ku" ],
                      "stateProvCode": "23", "stateProv": "Tehran", "district":
                      "Shahrestān-e Tehrān", "city": "Tehran", "geonameId":
                      112931, "latitude": 35.7543, "longitude": 51.4205,
                      "gmtOffset": 3.5, "timeZone": "Asia/Tehran",
                      "weatherCode": "IRXX0018", "asNumber": 58224, "asName":
                      "TCI", "isp": "Information Technology Company",
                      "linkType": "dsl", "usageType": "consumer", "isCrawler":
                      false, "isProxy": false, "threatLevel": "low" {"}"}
                    </code>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className={style["third"]}>
        <div className="bg-indigo-800">
          <Container className="text-center pt-5">
            <Row className="gy-5">
              <Col md="4">
                <h2 className="mb-4">Lorem, ipsum.</h2>
                <i className="fa fa-search h1 mb-5" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam eos dicta dignissimos itaque quod aut obcaecati
                  quaerat harum excepturi molestias.
                </p>
              </Col>
              <Col md="4">
                <h2 className="mb-4">Lorem, ipsum.</h2>
                <i className="fa fa-map h1 mb-5" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam eos dicta dignissimos itaque quod aut obcaecati
                  quaerat harum excepturi molestias.
                </p>
              </Col>
              <Col md="4">
                <h2 className="mb-4">Lorem, ipsum.</h2>
                <i className="fa fa-shield h1 mb-5" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam eos dicta dignissimos itaque quod aut obcaecati
                  quaerat harum excepturi molestias.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Image src={triangle} alt="" layout="responsive" className="w-100" />
      </section>
      <section className={style["fourth"]}>
        <Container className="text-center">
          <h2>Our Packs</h2>
          <p>Per Month</p>
          <Row className="gy-5 mb-5">
            <Col md="4">
              <Card
                className={`${style["card"]} border-0 bg-danger bg-opacity-75`}
              >
                <CardBody>
                  <CardHeader className="border-0 py-3" tag="h3">
                    Card title
                  </CardHeader>
                  <hr className="text-primary bg-danger mt-0" />
                  <CardSubtitle className="mb-2" tag="h6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, consequatur?
                  </CardSubtitle>
                  <CardTitle tag="h3">$30</CardTitle>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem, ipsum dolor.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet
                      <i className="fa-solid fa-circle-check" />
                    </li>
                  </ul>
                  <Button color="danger" className="rounded-pill my-3">
                    Buy now
                  </Button>
                </CardBody>
                <div className="bg-danger w-100 rounded-bottom p-3" />
              </Card>
            </Col>
            <Col md="4">
              <Card
                className={`${style["card"]} ${style["card--selected"]}  border-0 bg-success bg-opacity-25`}
              >
                <CardBody>
                  <CardHeader className="border-0 py-3" tag="h3">
                    Card title
                  </CardHeader>
                  <hr className="text-primary bg-success mt-0" />
                  <CardSubtitle className="mb-2" tag="h6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, consequatur?
                  </CardSubtitle>
                  <CardTitle tag="h3">$30</CardTitle>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem, ipsum dolor.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet
                      <i className="fa-solid fa-circle-check" />
                    </li>
                  </ul>
                  <Button color="success" className="rounded-pill my-3">
                    Buy now
                  </Button>
                </CardBody>
                <div className="bg-success w-100 rounded-bottom p-3" />
              </Card>
            </Col>
            <Col md="4">
              <Card
                className={`${style["card"]} border-0 bg-warning bg-opacity-75`}
              >
                <CardBody>
                  <CardHeader className="border-0 py-3" tag="h3">
                    Card title
                  </CardHeader>
                  <hr className="text-primary bg-warning mt-0" />
                  <CardSubtitle className="mb-2" tag="h6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, consequatur?
                  </CardSubtitle>
                  <CardTitle tag="h3">$30</CardTitle>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem, ipsum dolor.
                      <i className="fa-solid fa-circle-xmark" />
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet
                      <i className="fa-solid fa-circle-check" />
                    </li>
                  </ul>
                  <Button color="warning" className="rounded-pill my-3">
                    Buy now
                  </Button>
                </CardBody>
                <div className="bg-warning w-100 rounded-bottom p-3" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style["fifth"]}>
        <Container className="text-center">
          <h2 className="mb-5">Our Customers</h2>
          <Row className="h1 mb-4 gy-4">
            <Col xs="4" md="2">
              <i className="fa-brands fa-youtube" />
            </Col>
            <Col xs="4" md="2">
              <i className="fa-brands fa-github" />
            </Col>
            <Col xs="4" md="2">
              <i className="fa-brands fa-facebook" />
            </Col>
            <Col xs="4" md="2">
              <i className="fa-brands fa-whatsapp" />
            </Col>
            <Col xs="4" md="2">
              <i className="fa-brands fa-facebook" />
            </Col>
            <Col xs="4" md="2">
              <i className="fa-brands fa-whatsapp" />
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Card className="bg-indigo-900 p-4">
            <CardBody>
              <CardTitle tag="h2">Ready to get started?</CardTitle>
              <Row className="gy-2">
                <Col md="6">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col md="6" className="d-flex justify-content-end">
                  <Button type="button" color="light" className="me-3">
                    Buy now
                  </Button>
                  <Button type="button" color="light" outline>
                    Buy now
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </section>
      <section className={style["sixth"]}>
        <Container className="mb-5">
          <h2 className="text-center">FAQ</h2>
          <Card className="rounded text-white bg-indigo-900 mb-3">
            <CardHeader className="border-secondary margin-3">
              <Button
                onClick={toggleFaq1}
                color="transparent"
                className="text-light w-100 text-start"
              >
                {faq1 ? (
                  <i className="fa fa-arrow-down" />
                ) : (
                  <i className="fa fa-arrow-right" />
                )}
                <span className="px-2">Lorem ipsum dolor sit amet?</span>
              </Button>
            </CardHeader>
            <Collapse isOpen={faq1}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Collapse>

            <CardHeader className="border-secondary margin-3">
              <Button
                onClick={toggleFaq2}
                color="transparent"
                className="text-light w-100 text-start"
              >
                {faq2 ? (
                  <i className="fa fa-arrow-down" />
                ) : (
                  <i className="fa fa-arrow-right" />
                )}
                <span className="px-2">Lorem ipsum dolor sit amet?</span>
              </Button>
            </CardHeader>
            <Collapse isOpen={faq2}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Collapse>

            <CardHeader
              className={`border-secondary margin-3 ${
                !faq3 && "border-bottom-0"
              }`}
            >
              <Button
                onClick={toggleFaq3}
                color="transparent"
                className="text-light w-100 text-start"
              >
                {faq3 ? (
                  <i className="fa fa-arrow-down" />
                ) : (
                  <i className="fa fa-arrow-right" />
                )}
                <span className="px-2">Lorem ipsum dolor sit amet?</span>
              </Button>
            </CardHeader>
            <Collapse isOpen={faq3}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Collapse>
          </Card>
        </Container>
      </section>
      <section className={style["seventh"]}>
        <Card className="bg-indigo-800 rounded p-5 mb-5">
          <Container>
            <Row>
              <Col md="6" className="mb-2">
                <article>
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p className="text-secondary pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias praesentium nihil sunt dolorem in omnis. Ipsum
                    voluptatum quaerat ex molestias.
                  </p>
                </article>
              </Col>
              <Col md="6" className="mb-2">
                <Card className="bg-indigo-900">
                  <CardBody>
                    <Table dark striped className="tablesorter mb-0" responsive>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Country</th>
                          <th>City</th>
                          <th className="text-center">Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td className="text-center">$36,738</td>
                        </tr>
                        <tr>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td className="text-center">$23,789</td>
                        </tr>
                        <tr>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                          <td className="text-center">$56,142</td>
                        </tr>
                        <tr>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                          <td className="text-center">$38,735</td>
                        </tr>
                        <tr>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                          <td className="text-center">$63,542</td>
                        </tr>
                        <tr>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                          <td className="text-center">$78,615</td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td>Gloucester</td>
                          <td className="text-center">$98,615</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </section>
      <section className={`${style["eighth"]}`}>
        <Card className="bg-indigo-800 rounded p-5 mb-5">
          <Container>
            <Row>
              <Col md="6" className="mb-5">
                <Card className="bg-indigo-900">
                  <CardBody className="p-0">
                    <div className={style["code-window"]}>
                      <div
                        className={`${style["code-window__header"]} bg-indigo-900 px-2 rounded-top d-flex align-items-center`}
                      >
                        <Input
                          type="text"
                          placeholder="Lorem ipsum dolor sit"
                          className="form-control border-0 bg-indigo-900 text-secondary"
                        />
                        <Button className="ml-2 bg-indigo-900 btn-purple--hover">
                          <i className="fa fa-search" />
                        </Button>
                      </div>
                      <div
                        className={`${style["code-window__code"]}  rounded-bottom p-1`}
                      >
                        <code>
                          {"{"} "ipAddress": "2.190.231.78", "continentCode":
                          "AS", "continentName": "Asia", "countryCode": "IR",
                          "countryName": "Iran", "isEuMember": false,
                          "currencyCode": "IRR", "currencyName": "Rial",
                          "phonePrefix": "98", "languages": [ "fa-IR", "ku" ],
                          "stateProvCode": "23", "stateProv": "Tehran",
                          "district": "Shahrestān-e Tehrān", "city": "Tehran",
                          "geonameId": 112931, "latitude": 35.7543, "longitude":
                          51.4205, "gmtOffset": 3.5, "timeZone": "Asia/Tehran",
                          "weatherCode": "IRXX0018", "asNumber": 58224,
                          "asName": "TCI", "isp": "Information Technology
                          Company", "linkType": "dsl", "usageType": "consumer",
                          "isCrawler": false, "isProxy": false, "threatLevel":
                          "low" {"}"}
                        </code>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <article className="col-md-6 mb-2">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p className="text-secondary pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias praesentium nihil sunt dolorem in omnis. Ipsum
                  voluptatum quaerat ex molestias.
                </p>
              </article>
            </Row>
          </Container>
        </Card>
      </section>
      <section className={`${style["ninth"]}`}>
        <h2 className="title text-center mb-4">Contact Form</h2>
        <Container>
          <Card className="bg-indigo-900 rounded p-5 mb-5">
            <CardBody>
              <Form>
                <Row>
                  <Col md="4" className="py-2">
                    <FormGroup>
                      <Label for="firstname">First Name</Label>
                      <Input
                        id="firstname"
                        placeholder="First Name"
                        type="text"
                        defaultValue="John"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" className="py-2">
                    <FormGroup>
                      <Label for="lastname">Last Name</Label>
                      <Input
                        id="lastname"
                        placeholder="Last Name"
                        type="text"
                        defaultValue="Doe"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" className="py-2">
                    <FormGroup>
                      <Label for="email">Email address</Label>
                      <Input
                        id="email"
                        placeholder="Doe@majhoolsoft.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" className="py-2">
                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input
                        type="textarea"
                        id="message"
                        cols={80}
                        placeholder="Here can be your description"
                        rows={4}
                        defaultValue={
                          "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <Button
                      type="submit"
                      className="btn-fill btn btn-purple text-black px-4"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </section>
    </>
  );
};
Home.layout = MainLayout;
export default Home;
