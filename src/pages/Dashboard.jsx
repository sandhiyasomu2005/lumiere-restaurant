import "../index.css";

function Dashboard() {

  const stats = [
    {
      label: "Today's Revenue",
      value: "₹25,450",
      change: "+12.8%",
      note: "vs yesterday",
      icon: "↗",
    },
    {
      label: "Total Orders",
      value: "128",
      change: "+18",
      note: "orders today",
      icon: "▤",
    },
    {
      label: "Average Order",
      value: "₹1,198",
      change: "+5.4%",
      note: "this week",
      icon: "◇",
    },
    {
      label: "Available Dishes",
      value: "48",
      change: "42",
      note: "available today",
      icon: "✦",
    },
  ];

  const orders = [
    ["#1042", "Table 05", "3 items", "₹850", "Preparing"],
    ["#1041", "Table 02", "2 items", "₹450", "Ready"],
    ["#1040", "Table 08", "5 items", "₹1,200", "Served"],
    ["#1039", "Table 04", "4 items", "₹920", "Preparing"],
  ];

  const bars = [48, 62, 55, 79, 67, 94, 74];

  return (
    <div className="page dashboard-page">

      <section className="dashboard-heading">

        <div>
          <span className="eyebrow">GOOD MORNING · LUMIÈRE</span>

          <h1>
            Good morning,
            <em> Admin.</em>
          </h1>

          <p>
            Here's what's happening at your restaurant today.
          </p>
        </div>

        <button className="gold-button">
          + New Order
        </button>

      </section>


      <section className="stat-grid">

        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>

            <div className="stat-card-top">
              <span>{stat.label}</span>
              <b>{stat.icon}</b>
            </div>

            <strong className="big-number">
              {stat.value}
            </strong>

            <div className="stat-meta">
              <span>{stat.change}</span>
              <small>{stat.note}</small>
            </div>

            <div className="stat-ring"></div>

          </div>
        ))}

      </section>


      <section className="dashboard-grid">

        <div className="luxury-card revenue-card">

          <div className="card-title-row">

            <div>
              <span className="eyebrow">PERFORMANCE</span>
              <h2>Revenue overview</h2>
              <p>Weekly restaurant performance</p>
            </div>

            <select className="small-select">
              <option>This week</option>
              <option>This month</option>
            </select>

          </div>

          <div className="chart">

            <div className="chart-grid">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chart-bars">

              {bars.map((height, index) => (
                <div className="chart-column" key={index}>

                  <div
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  >
                    <span>₹{height * 250}</span>
                  </div>

                  <small>
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </small>

                </div>
              ))}

            </div>

          </div>

        </div>


        <div className="luxury-card recent-card">

          <div className="card-title-row">

            <div>
              <span className="eyebrow">LIVE SERVICE</span>
              <h2>Recent orders</h2>
            </div>

            <span className="live-indicator"></span>

          </div>

          <div className="recent-orders">

            {orders.map((order) => (

              <div className="recent-order" key={order[0]}>

                <div className="order-id">
                  {order[0]}
                </div>

                <div className="order-details">
                  <strong>{order[1]}</strong>
                  <span>{order[2]}</span>
                </div>

                <div className="order-price">
                  <strong>{order[3]}</strong>
                  <span className={order[4].toLowerCase()}>
                    {order[4]}
                  </span>
                </div>

              </div>

            ))}

          </div>

          <button className="outline-button">
            View all orders →
          </button>

        </div>

      </section>


      <section className="dashboard-bottom">

        <div className="experience-banner">

          <span className="eyebrow">
            THE LUMIÈRE EXPERIENCE
          </span>

          <h2>
            Every table tells
            <br />
            <em>a story.</em>
          </h2>

          <p>
            Manage your entire restaurant operation
            from one elegant workspace.
          </p>

          <button className="gold-button">
            Open Billing →
          </button>

          <div className="gold-orbit"></div>

        </div>


        <div className="luxury-card floor-card">

          <div className="card-title-row">
            <div>
              <span className="eyebrow">FLOOR STATUS</span>
              <h2>Dining tables</h2>
            </div>

            <strong className="table-total">
              12 / 18
            </strong>
          </div>

          <div className="tables">

            {["01", "02", "03", "04", "05", "06"].map(
              (table, index) => (
                <div
                  className={`table ${index % 2 ? "busy" : "free"}`}
                  key={table}
                >
                  <strong>{table}</strong>
                  <small>
                    {index % 2 ? "Busy" : "Free"}
                  </small>
                </div>
              )
            )}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;