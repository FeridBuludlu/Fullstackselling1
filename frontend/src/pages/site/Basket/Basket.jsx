import React, { useContext } from "react";
import MainContext from "../../../context/context";
import Helmet from "react-helmet";
import "./Basket.css";
const Basket = () => {
  const { addToBasket, deleteFromBasket, basket } = useContext(MainContext);
  return (
    <div className="container my-5 table_baskett">
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={item.image} alt="" width="100px" height="100px" />
                </td>
                <td>{item.title}</td>
                <td>{item.count}</td>

                <td>{item.totalPrice}$</td>
                <td>
                  <button
                    onClick={() => {
                      deleteFromBasket(item._id);
                    }}
                    className="btn btn-danger "
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      addToBasket(item._id);
                    }}
                    className="btn btn-warning "
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
