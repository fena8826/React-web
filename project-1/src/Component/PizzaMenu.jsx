import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../App.css";

const PizzaMenu = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$20.50",
      oldPrice: "$30.50",
      description:
        "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority of Lorem Ipsum, you need.",
      img: "./images/Margerita.png", 
    },
    {
      id: 2,
      name: "Bismarck",
      price: "$20.50",
      oldPrice: "$30.50",
      description:
        "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority of Lorem Ipsum, you need.",
      img: "./images/Bismark.png",
    },
  ];

  return (
   <div className="container">
      <h2 className="text-center mb-4">Pizza Crust & Tortillas</h2>
      <Row>
        {pizzas.map((pizza, index) => (
          <Col
            md={6}
            key={pizza.id}
            className={`mb-4 pizza-card ${show ? (index % 2 === 0 ? "slide-left" : "slide-right") : "hidden"}`}
          >
            <div className="d-flex align-items-start gap-4 border-bottom pb-4">
              <img src={pizza.img} alt={pizza.name} className="pizza-image" />

              <div>
                <h6 className="pizza-title">{pizza.name.toUpperCase()}</h6>
                <p className="text-muted pizza-desc">{pizza.description}</p>

                <div className="d-flex align-items-center mb-2 Oldprice">
                  <span className="fw-bold text-warning me-2">{pizza.price}</span>
                 <span style={{ color: "#e0e0e0", textDecoration: "line-through" ,fontSize:"17px"}}>
              {pizza.oldPrice}</span>

                </div>

                <div className="d-flex align-items-center">
                  <Button variant="dark" className="order-btn me-3">
                    ORDER NOW
                  </Button>
                  <Button variant="light" className="icon-btn me-2">
                    <CiHeart />
                  </Button>
                  <Button variant="light" className="icon-btn">
                    <FaRegEye />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PizzaMenu;
