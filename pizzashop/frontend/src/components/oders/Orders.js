import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getOrders, deleteOrder } from "../../actions/orders_actions";

import { FaSearch } from "react-icons/fa";

export class Orders extends Component {
  state = {
    search: "",
  };

  static PropTypes = {
    orders: PropTypes.array.isRequired,
    getOrders: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log("this.props", this.props);
    this.props.getOrders();
  }

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredOrdersByNameOderByEmail = this.props.orders.filter(
      (order) => {
        return (
          order.kunden_name.toLowerCase().indexOf(search.toLowerCase()) !==
            -1 || order.email.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      }
    );

    return (
      <Fragment>
        <h2>Pizzas Bestellungen</h2>
        <br />
        <form>
          <div className="form-row">
            <FaSearch size={32} />
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                placeholder="Suche nach Namen oder Email"
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>

        <br />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Kunden_name</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Sorte</th>
              <th>Größe</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredOrdersByNameOderByEmail.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.kunden_name}</td>
                <td>{order.email}</td>
                <td>{order.telefon}</td>
                <td>{order.sorte}</td>
                <td>{order.size}</td>
                <td>
                  <button
                    onClick={this.props.deleteOrder.bind(this, order.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders_reducers.orders,
});

export default connect(mapStateToProps, { getOrders, deleteOrder })(Orders);
