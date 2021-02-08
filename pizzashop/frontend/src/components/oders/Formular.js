import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOrder } from "../../actions/orders_actions";
import Pizzas from "./Pizzas";

const showResult = () => {
  window.alert("Bestellung Erfolgreich gesendet.");
};

class Formular extends Component {
  state = {
    isSubmit: false,
    kunden_name: "",
    email: "",
    telefon: "",
    sorte: "",
    size: "",
  };

  constructor(props) {
    super(props);

    if (props.size && props.sorte) {
      this.state = {
        sorte: props.sorte,
        size: props.size.substring(2),
      };
    }
  }

  static propTypes = {
    addOrder: PropTypes.func.isRequired,
  };

  showResult = () => {
    window.alert("Bestellung erfolgreich gesendet.");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmit: true,
    });
    const { kunden_name, email, telefon, sorte, size } = this.state;
    const order = { kunden_name, email, telefon, sorte, size };
    console.log("type of telefon is ", typeof order.telefon);
    this.props.addOrder(order, showResult);
  };

  static propTypes = {
    addOrder: PropTypes.func.isRequired,
  };

  render() {
    if (this.state.isSubmit) {
      return <Pizzas />;
    } else {
      const { kunden_name, email, telefon, sorte, size } = this.state;
      return (
        <div className="card card-body mt-4 mb-4">
          <h2>Bestellung</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="kunden_name"
                onChange={this.onChange}
                placeholder="Ihr Name"
                value={kunden_name}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChange}
                placeholder="Ihre Email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Telefon Nummer</label>
              <input
                className="form-control"
                type="text"
                name="telefon"
                onChange={this.onChange}
                placeholder="Ihre Telefonnummer"
                value={telefon}
              />
            </div>
            <div className="form-group">
              <label>Pizza sorte</label>
              <input
                className="form-control"
                type="text"
                name="sorte"
                onChange={this.onChange}
                value={sorte}
              />
            </div>
            <div className="form-group">
              <label>Pizzas Größe </label>
              <input
                className="form-control"
                type="text"
                name="size"
                onChange={this.onChange}
                value={size}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default connect(null, { addOrder })(Formular);
