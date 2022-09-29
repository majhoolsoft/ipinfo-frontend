import style from "./css/lookup.module.css";

import { Row, Col, Button, Input, InputGroup } from "reactstrap";
const IPInput = () => {
  return (
    <>
      <InputGroup>
        <Col xs="3">
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
        <Col xs="3">
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
        <Col xs="3">
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
        <Col xs="3" className="d-flex justify-content-start p-0">
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
            className={`${style["lookup__input--button"]}  btn-purple--hover bg-indigo-900 w-25 border border-white border-2 border-start-0 p-0 text-white"`}
          >
            <i className="fa fa-search" />
          </Button>
        </Col>
      </InputGroup>
    </>
  );
};
export default IPInput;
