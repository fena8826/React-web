



import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { FaRegEye, FaFilter } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../App.css"; 


const PizzaMenu = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

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
    {
      id: 2,
      name: "Bismarck",
      price: "$20.50",
      oldPrice: "$30.50",
      description:
        "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority of Lorem Ipsum, you need.",
      img: "./images/Bismark.png",
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
    {
      id: 2,
      name: "Bismarck",
      price: "$20.50",
      oldPrice: "$30.50",
      description:
        "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority of Lorem Ipsum, you need.",
      img: "./images/Bismark.png",
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
    {
      id: 2,
      name: "Bismarck",
      price: "$20.50",
      oldPrice: "$30.50",
      description:
        "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority of Lorem Ipsum, you need.",
      img: "./images/Bismark.png",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const filterOptions = {
    Crust: ["Crust-1", "Crust-2", "Crust-3"],
    Price: ["Low to High", "High to Low"],
    Size: ["Medium", "Regular", "Large"],
    Cheese: ["Extra", "Regular", "None"],
    Type: ["Veg", "Non-Veg"],
    Flavour: ["Crust-1", "Crust-2", "Crust-3"],
  };

  return (
    <Container>
      {/* HEADER SECTION */}
      <div className="header-container">
        <div className="filter-btn">
          <FaFilter />
          <span>Filter</span>
        </div>
        <div className="dropdown-group">
          {Object.entries(filterOptions).map(([label, options]) => (
            <Dropdown key={label} className="custom-dropdown">
              <Dropdown.Toggle variant="light" className="dropdown-toggle-custom">
                {label} <span className="arrow">&#9650;</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {options.map((opt, i) => (
                  <Dropdown.Item key={i}>{opt}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
        <div className="results-text">Showing 1–12 of {pizzas.length} Results</div>
      </div>


      <Row>
        {pizzas.map((pizza, index) => (
          <Col
            md={6}
            key={`${pizza.id}-${index}`}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`mb-4 pizza-card ${
              visibleCards[index]
                ? index % 2 === 0
                  ? "slide-left"
                  : "slide-right"
                : "hidden"
            }`}
          >
            <div className="d-flex align-items-start gap-4 border-bottom pb-4">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="pizza-image"
              />
              <div>
                <h6 className="pizza-title">{pizza.name.toUpperCase()}</h6>
                <p className="text-muted pizza-desc">{pizza.description}</p>
                <div className="d-flex align-items-center mb-2 Oldprice">
                  <span className="fw-bold text-warning me-2">
                    {pizza.price}
                  </span>
                  <span
                    style={{
                      color: "#e0e0e0",
                      textDecoration: "line-through",
                      fontSize: "17px",
                    }}
                  >
                    {pizza.oldPrice}
                  </span>
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
    </Container>
  );
};

export default PizzaMenu;
