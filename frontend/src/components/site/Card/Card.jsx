import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import MainContext from "../../../context/context";

const Card = () => {
  const { data, addToBasket } = useContext(MainContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  return (
    <div>
      <div className="Product_title">
        <h4>POPULAR PRODUCTS</h4>
        <h3>Our Products</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
          <br />
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
          <br />
          consequatur laboriosam ipsam.
        </p>
        <div className="Card">
          <div className="container">
            <div className="search_title">
              <input
                className="input_search"
                type="text"
                placeholder="search_data"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="sort_button"
                onClick={() => setSortBy({ field: "title", asc: true })}
              >
                A-Z
              </button>
              <button
                className="sort_button"
                onClick={() => setSortBy({ field: "title", asc: false })}
              >
                Z-A
              </button>
              <button
                className="sort_button"
                onClick={() => setSortBy({ field: "price", asc: true })}
              >
                Azalan
              </button>
              <button
                className="sort_button"
                onClick={() => setSortBy({ field: "price", asc: false })}
              >
                Artan
              </button>
              <button className="sort_button" onClick={() => setSortBy(null)}>
                default
              </button>
            </div>

            <div className="row">
              {data
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .sort((a, b) => {
                  if (!sortBy) {
                    return 0;
                  } else if (sortBy.asc) {
                    return a[sortBy.field] > b[sortBy.field]
                      ? 1
                      : b[sortBy.field] > a[sortBy.field]
                      ? -1
                      : 0;
                  } else if (sortBy.asc == false) {
                    return a[sortBy.field] < b[sortBy.field]
                      ? 1
                      : b[sortBy.field] < a[sortBy.field]
                      ? -1
                      : 0;
                  }
                })

                .map((item, index) => (
                  <div className="col-4" key={index}>
                    <div className="card" style={{ width: "22rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <div className="price">
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <span>5.0</span>
                          </div>
                          <div className="Heart">
                            <i className="fa-solid fa-heart"></i>
                            <span>29</span>
                          </div>
                          <p>{item.price}$</p>
                        </div>
                        <p className="card-text">{item.description}</p>
                        <div className="card_footer">
                          <button
                            className="Basket"
                            onClick={() => {
                              addToBasket(item._id);
                            }}
                          >
                            Add to Basket
                          </button>
                          <Link to={`/detail/${item._id}`}>View Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
