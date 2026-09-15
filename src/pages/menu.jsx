import React, { useState } from "react";
import "./menu.css";
import menuData from "../data/menudata.js";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Pizza",
    "Burgers",
    "Desserts",
    "Drinks"
  ];

  const filteredMenu = menuData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  // =====================================
  // ADD FOOD TO BACKEND ORDER
  // =====================================
  const handleAddToOrder = async (item) => {
    try {
      const orderData = {
        customer_name: "Guest",

        items: [
          {
            id: item.id,
            name: item.name,
            category: item.category,
            price: Number(item.price),
            quantity: 1
          }
        ],

        total: Number(item.price)
      };

      const response = await fetch(
        "http://localhost:4000/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(orderData)
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`${item.name} added to order`);
        console.log("Order saved:", data);
      } else {
        alert(data.message || "Failed to save order");
      }

    } catch (error) {
      console.error("ORDER ERROR:", error);
      alert("Cannot connect to backend");
    }
  };

  return (
    <div className="menu-page">

      {/* Header */}
      <div className="menu-header">
        <div>
          <p className="restaurant-label">LUMIERE RESTAURANT</p>

          <h1>Our Menu</h1>

          <p className="menu-subtitle">
            Delicious food made fresh for you
          </p>
        </div>

        <div className="menu-count">
          <strong>{filteredMenu.length}</strong>
          <span>Items</span>
        </div>
      </div>

      {/* Search */}
      <div className="menu-controls">
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Food Cards */}
      <div className="food-grid">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div className="food-card" key={item.id}>
              <br />

              <div className="food-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="food-image"
                />

                <br />

                <span className="food-category">
                  {item.category}
                </span>
              </div>

              <div className="food-content">
                <div className="food-title-row">
                  <h2>{item.name}</h2>

                  <span className="food-price">
                    ₹{item.price}
                  </span>
                </div>

                <p className="food-description">
                  {item.description}
                </p>

                <button
                  className="add-button"
                  onClick={() => handleAddToOrder(item)}
                >
                  + Add to Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-food">
            <h2>No food found</h2>
            <p>Try another food name or category.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Menu;
