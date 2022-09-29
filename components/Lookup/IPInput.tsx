import style from "./css/lookup.module.css";

import { Row, Col, Button, Input, InputGroup } from "reactstrap";
const IPInput = () => {
  return (
    <>
      <InputGroup>
        <Col xs="2">
          <Input
            type="number"
            min={0}
            max={999}
            size={3}
            maxLength={3}
            // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            className={`${style["lookup__input--first"]} text-center`}
            placeholder="IP :"
          />
        </Col>
        <Col xs="3" className="d-flex justify-content-center align-items-end">
          <i className="fa fa-circle text-black mx-2 bg-indigo-800 p-1 rounded-circle text-black mx-2  "></i>
          <Input
            type="number"
            min={0}
            max={999}
            size={3}
            maxLength={3}
            // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            className={`${style["lookup__input--middle"]} text-center`}
          />
        </Col>
        <Col xs="3" className="d-flex justify-content-center align-items-end">
          <i className="fa fa-circle text-black mx-2 bg-indigo-800 p-1 rounded-circle text-black mx-2  "></i>
          <Input
            type="number"
            min={0}
            max={999}
            size={3}
            maxLength={3}
            // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            className={`${style["lookup__input--middle"]} text-center`}
          />
        </Col>
        <Col
          xs="3"
          className="d-flex justify-content-start align-items-end p-0"
        >
          <i className="fa fa-circle text-black mx-2 bg-indigo-800 p-1 rounded-circle"></i>
          <Input
            type="number"
            min={0}
            max={999}
            size={3}
            maxLength={3}
            // oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            className={`${style["lookup__input--last"]} text-center w-75`}
          />
          <Button
            className={`${style["lookup__input--button"]} align-self-center h-100 btn-purple--hover bg-indigo-900 w-25 border border-white border-2 border-start-0 p-0 text-white"`}
          >
            <i className="fa fa-search" />
          </Button>
        </Col>
      </InputGroup>
    </>
  );
};
export default IPInput;
