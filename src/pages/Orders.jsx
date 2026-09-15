function Orders() {

  const orders = [
    {
      id: "#1042",
      table: "Table 05",
      customer: "Walk-in Guest",
      items: 3,
      amount: "₹850",
      status: "Preparing",
      time: "10:42 AM",
    },
    {
      id: "#1041",
      table: "Table 02",
      customer: "Walk-in Guest",
      items: 2,
      amount: "₹450",
      status: "Ready",
      time: "10:28 AM",
    },
    {
      id: "#1040",
      table: "Table 08",
      customer: "Corporate Guest",
      items: 5,
      amount: "₹1,200",
      status: "Served",
      time: "10:11 AM",
    },
    {
      id: "#1039",
      table: "Table 04",
      customer: "Walk-in Guest",
      items: 4,
      amount: "₹920",
      status: "Preparing",
      time: "09:56 AM",
    },
  ];

  return (
    <div className="page orders-page">

      <div className="orders-heading">

        <div>
          <span className="eyebrow">SERVICE CONTROL</span>

          <h1>Orders</h1>

          <p>
            Track every table from kitchen to guest.
          </p>
        </div>

        <div className="service-status">
          <span></span>
          Kitchen is operating normally
        </div>

      </div>


      <div className="order-summary">

        <div>
          <span>ACTIVE</span>
          <strong>18</strong>
        </div>

        <div>
          <span>PREPARING</span>
          <strong>07</strong>
        </div>

        <div>
          <span>READY</span>
          <strong>05</strong>
        </div>

        <div>
          <span>SERVED</span>
          <strong>42</strong>
        </div>

      </div>


      <div className="orders-board">

        <div className="board-heading">
          <span>ORDER</span>
          <span>TABLE</span>
          <span>GUEST</span>
          <span>ITEMS</span>
          <span>AMOUNT</span>
          <span>STATUS</span>
        </div>

        {orders.map((order) => (

          <div className="order-board-row" key={order.id}>

            <div className="board-order-id">
              <strong>{order.id}</strong>
              <small>{order.time}</small>
            </div>

            <strong>{order.table}</strong>

            <span>{order.customer}</span>

            <span>{order.items} items</span>

            <strong>{order.amount}</strong>

            <span
              className={`status-badge ${order.status.toLowerCase()}`}
            >
              {order.status}
            </span>

          </div>

        ))}

      </div>


      <div className="order-timeline">

        <div className="timeline-title">
          <span className="eyebrow">ORDER JOURNEY</span>
          <h2>How service moves</h2>
        </div>

        <div className="timeline">

          <div>
            <b>01</b>
            <strong>Order received</strong>
            <span>Guest places an order</span>
          </div>

          <div>
            <b>02</b>
            <strong>Kitchen</strong>
            <span>Chef prepares the dishes</span>
          </div>

          <div>
            <b>03</b>
            <strong>Ready</strong>
            <span>Order is ready to serve</span>
          </div>

          <div>
            <b>04</b>
            <strong>Served</strong>
            <span>Guest receives the order</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Orders;