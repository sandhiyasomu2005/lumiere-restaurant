import { useState } from "react";
import menuData from "../data/menudata";

function Billing() {

  const [cart, setCart] = useState([
    {
      ...menuData[0],
      quantity: 1,
    },
    {
      ...menuData[3],
      quantity: 1,
    },
  ]);

  const [table, setTable] = useState("Table 05");
  const [payment, setPayment] = useState("Card");

  const addItem = (item) => {

    const existing = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existing) {

      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);

    }
  };

  const changeQuantity = (id, amount) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.05;

  const total = subtotal + gst;

 const generateBill = async () => {
  try {
    if (cart.length === 0) {
      alert("Please add at least one item");
      return;
    }

    const orderData = {
      customer_name: table,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: Number(item.price),
        quantity: item.quantity
      })),
      total: Number(total.toFixed(2))
    };

    // Send order to backend
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

    if (!response.ok || !data.success) {
      alert(data.message || "Failed to save order");
      return;
    }

    // Keep your existing localStorage bill
    localStorage.setItem(
      "lastBill",
      JSON.stringify({
        table,
        cart,
        subtotal,
        gst,
        total,
        payment,
        orderId: data.orderId
      })
    );

    alert(`Bill generated successfully! Order ID: ${data.orderId}`);

  } catch (error) {
    console.error("BILLING ORDER ERROR:", error);
    alert("Cannot connect to backend");
  }
};

  return (
    <div className="page billing-page">

      <div className="billing-heading">

        <div>
          <span className="eyebrow">POINT OF SALE</span>

          <h1>Billing Counter</h1>

          <p>
            Build the order and complete the guest's bill.
          </p>
        </div>

        <select
          className="table-selector"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option>Table 01</option>
          <option>Table 02</option>
          <option>Table 03</option>
          <option>Table 04</option>
          <option>Table 05</option>
          <option>Table 06</option>
          <option>Table 07</option>
          <option>Table 08</option>
        </select>

      </div>


      <div className="billing-layout">

        {/* MENU SIDE */}

        <section className="billing-menu">

          <div className="billing-section-title">

            <div>
              <span className="eyebrow">
                QUICK MENU
              </span>

              <h2>Select dishes</h2>
            </div>

            <span>
              {menuData.length} dishes
            </span>

          </div>


          <div className="billing-food-grid">

            {menuData.map((item) => (

              <button
                className="billing-food"
                key={item.id}
                onClick={() => addItem(item)}
              >

                <div className="billing-food-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="billing-food-info">

                  <strong>{item.name}</strong>

                  <span>
                    ₹{item.price}
                  </span>

                </div>

                <b>+</b>

              </button>

            ))}

          </div>

        </section>


        {/* RECEIPT SIDE */}

        <section className="receipt">

          <div className="receipt-header">

            <span className="eyebrow">
              CURRENT BILL
            </span>

            <div className="receipt-logo">
              LUMIÈRE
            </div>

            <p>
              Table {table.replace("Table ", "")}
            </p>

          </div>


          <div className="receipt-items">

            {cart.length === 0 ? (

              <div className="empty-cart">
                No items added yet.
              </div>

            ) : (

              cart.map((item) => (

                <div className="receipt-item" key={item.id}>

                  <div>
                    <strong>{item.name}</strong>
                    <small>
                      ₹{item.price} each
                    </small>
                  </div>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        changeQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        changeQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>

                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))

            )}

          </div>


          <div className="receipt-totals">

            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>GST · 5%</span>
              <strong>₹{gst.toFixed(2)}</strong>
            </div>

            <div className="grand-total">
              <span>Total</span>
              <strong>
                ₹{total.toFixed(2)}
              </strong>
            </div>

          </div>


          <div className="payment-method">

            <span className="eyebrow">
              PAYMENT METHOD
            </span>

            <div className="payment-options">

              {["Cash", "Card", "UPI"].map((method) => (

                <button
                  key={method}
                  className={
                    payment === method
                      ? "selected"
                      : ""
                  }
                  onClick={() => setPayment(method)}
                >
                  {method}
                </button>

              ))}

            </div>

          </div>


          <button
            className="generate-bill"
            onClick={generateBill}
          >
            Generate Bill
            <span>→</span>
          </button>

        </section>

      </div>

    </div>
  );
}

export default Billing;