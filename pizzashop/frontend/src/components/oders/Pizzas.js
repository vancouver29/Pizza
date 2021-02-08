import React, { Component, Fragment } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Formular from "./Formular";

export class Pizzas extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirect: false,
    kunden_name: "",
    email: "",
    telefon: 0,
    sorte: "",
    size: "",
  };

  setSize(event) {
    this.setState({
      size: event.target.value,
      sorte:
        event.target.value.charAt(0) === "m"
          ? "Margherita"
          : event.target.value.charAt(0) === "s"
          ? "Salami"
          : "Diavolo",
    });
  }

  submitHandlder = () => {
    // event.preventDefault();
    this.setState({
      redirect: true,
    });
    // this.props.history.push("/formular");
  };

  render() {
    if (this.state.redirect) {
      return (
        <Fragment>
          <Formular size={this.state.size} sorte={this.state.sorte} />
          {/* <Redirect to={{ pathname: "/formular", state: { ...this.state } }} /> */}
        </Fragment>
      );
    } else {
      const { kunden_name, email, telefon, size } = this.state;
      return (
        <div className="d-inline-block">
          {/* *************************** Margherita ***************************** */}
          <div style={{ display: "inline-block" }}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="/static/images/margherita.png" />
              <Card.Body>
                <Card.Title>Margherita</Card.Title>
                <Card.Text>Beschreibung von Margherita Pizza.</Card.Text>
                <fieldset>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={4}>
                        Größe
                      </Form.Label>
                      <Col sm={10}>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="m_medium"
                            name="size"
                            checked={
                              this.state.size === "m_medium" ? true : false
                            }
                          />{" "}
                          medium
                        </div>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="m_large"
                            name="size"
                            checked={
                              this.state.size === "m_large" ? true : false
                            }
                          />{" "}
                          large
                        </div>
                      </Col>
                    </Form.Group>
                  </Form>
                </fieldset>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.submitHandlder}
                >
                  Pizza bestellen
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* *************************** Salami ***************************** */}
          <div style={{ display: "inline-block" }}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="/static/images/salami.png" />
              <Card.Body>
                <Card.Title>Salami</Card.Title>
                <Card.Text>Beschreibung von Salami Pizza. </Card.Text>
                <fieldset>
                  <Form onSubmit={this.submitHandlder}>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={4}>
                        Größe
                      </Form.Label>
                      <Col sm={10}>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="s_small"
                            checked={
                              this.state.size === "s_small" ? true : false
                            }
                          />{" "}
                          small
                        </div>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="s_medium"
                            name="size"
                            checked={
                              this.state.size === "s_medium" ? true : false
                            }
                          />{" "}
                          medium
                        </div>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="s_large"
                            name="size"
                            checked={
                              this.state.size === "s_large" ? true : false
                            }
                          />{" "}
                          large
                        </div>
                      </Col>
                    </Form.Group>
                  </Form>
                </fieldset>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.submitHandlder}
                >
                  Pizza bestellen
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* *************************** Diavolo ***************************** */}
          <div style={{ display: "inline-block" }}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="/static/images/diavolo.png" />
              <Card.Body>
                <Card.Title>Diavolo</Card.Title>
                <Card.Text>Beschreibung von Diavolo. </Card.Text>
                <fieldset>
                  <Form onSubmit={this.submitHandlder}>
                    <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={4}>
                        Größe
                      </Form.Label>
                      <Col sm={10}>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="d_small"
                            checked={
                              this.state.size === "d_small" ? true : false
                            }
                          />{" "}
                          small
                        </div>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="d_medium"
                            name="size"
                            checked={
                              this.state.size === "d_medium" ? true : false
                            }
                          />{" "}
                          medium
                        </div>
                        <div onChange={(event) => this.setSize(event)}>
                          <input
                            type="radio"
                            value="d_large"
                            name="size"
                            checked={
                              this.state.size === "d_large" ? true : false
                            }
                          />{" "}
                          large
                        </div>
                      </Col>
                    </Form.Group>
                  </Form>
                </fieldset>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.submitHandlder}
                >
                  Pizza bestellen
                </Button>
              </Card.Body>
            </Card>
          </div>
          {/* <div style={{ visibility: "hidden" }}>
            <Formular {...this.state} ref={(el) => (this.componentRef = el)} />
          </div> */}
        </div>
      );
    }
  }
}

export default Pizzas;
