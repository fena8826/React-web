
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegEye, FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../App.css";

// 🍕 Filter Header Component
const PizzaFilterHeader = ({ filterOptions }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-icon me-5">
        <FaFilter style={{ marginRight: 7 }} />
        Filter
      </div>

      {Object.entries(filterOptions).map(([key, options]) => (
        <div key={key} className="filter-group text-secondary-subtle fw-100">
          <div className="filter-label fw-100" onClick={() => toggleDropdown(key)}>
            {key}
            {openDropdown === key ? (
              <FaChevronUp className="ms-1 small d-inline-flex align-items-center dropdown-icon" />
            ) : (
              <FaChevronDown className="ms-1 small d-inline-flex align-items-center dropdown-icon" />
            )}
          </div>

          {openDropdown === key && (
            <div className="filter-dropdown">
              {options.map((opt, i) => (
                <div key={i} className="filter-option border-bottom fs-6">
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="results-text ms-auto me-3">
        Showing 1–12 of 28 Results
      </div>
    </div>
  );
};

// 🍕 Main Pizza Menu Component
const PizzaMenu = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Margerita.png",
    },
    {
      id: 2,
      name: "Bismarck",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Bismark.png",
    },
    {
      id: 3,
      name: "FIRORI Di ZUCCA",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Fiori.png",
    },
    {
      id: 4,
      name: "VALDOTANA",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Valdostana.png",
    },
    {
      id: 5,
      name: "PIZZA TARTUFATA",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Tartufata.png",
    },
    {
      id: 6,
      name: "FRANCESCANA",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Francescana.png",
    },
    {
      id: 7,
      name: "BOSCAIOLA",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Boscaiola.png",
    },
    {
          id: 8,
      name: "Margherita Pizza",
      price: "$20.50",
      oldPrice: "$30.50",
      description: "Lorem Ipsum is simply dummy text of the There are many variations of passages of Lorem Ipsum available, but the majority e of Lorem Ipsum, you need",
      img: "./images/Margerita.png",
    }


  ];

  const filterOptions = {
    Crust: ["Crust-1", "Crust-2", "Crust-3"],
    Price: ["$15", "$20", "$25"],
    Size: ["Medium", "Regular", "Large"],
    Cheese: ["Veg", "Cheese", "Non-veg"],
    Type: ["Neapolitan", "Chicago", "Greek"],
    Flavour: ["Spicy", "Sweet", "Cheesy"],
  };

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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <Container>
      {/*  Header Section */}
      <div className="pizza-hero-section">
        <div className="pizza-hero-overlay">
          <h1 className="hero-title">
            PIZZA <span className="highlight fw-bold">CRUST</span> & <span className="highlight-orange">TORTILLAS</span>
          </h1>
          <p className="hero-subtitle text-upercase text-bold">
            HIS CREATION SET OFF A HEATED DEBATE OVER WHETHER PINEAPPLE BELONGS ON PIZZA
          </p>
        </div>
      </div>

      {/*  Filter */}
      <div className="mt-5">
        <PizzaFilterHeader filterOptions={filterOptions} />
      </div>

      {/*  Pizza Cards */}
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
            <div className="d-flex align-items-start gap-6 border-bottom pb-3">
              <img src={pizza.img} alt={pizza.name} className="pizza-image" />
              <div>
                <h6 className="pizza-title">{pizza.name.toUpperCase()}</h6>
                <p className="text-muted pizza-desc fw-light ms-4">{pizza.description}</p>
                <div className="d-flex align-items-center mb-2 Oldprice">
                  <span className="fw-bold text-warning me-2 ms-4">{pizza.price}</span>
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
