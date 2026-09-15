function Reports() {

  const sales = [
    ["Monday", "₹82,450"],
    ["Tuesday", "₹91,200"],
    ["Wednesday", "₹76,850"],
    ["Thursday", "₹105,400"],
    ["Friday", "₹98,650"],
    ["Saturday", "₹128,900"],
    ["Sunday", "₹112,300"],
  ];
  const timings = [
    ["10:00 AM", "₹12,450"],
    ["11:00 AM", "₹18,200"],
    ["12:00 PM", "₹22,850"],
    ["01:00 PM", "₹28,400"],
    ["02:00 PM", "₹24,650"],
    ["03:00 PM", "₹19,900"],
    ["04:00 PM", "₹15,300"],
  ];


  const products = [
    ["01", "Royal Biryani", "142 sold", "₹63,900"],
    ["02", "Butter Chicken", "118 sold", "₹49,560"],
    ["03", "Truffle Pasta", "96 sold", "₹36,480"],
    ["04", "Paneer Tikka", "82 sold", "₹26,240"],
  ];

  return (
    <div className="page reports-page">

      <div className="reports-heading">

        <div>
          <span className="eyebrow">MANAGEMENT INSIGHTS</span>

          <h1>Restaurant Reports</h1>

          <p>
            Understand what's driving your restaurant.
          </p>
        </div>

        <select className="report-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>

      </div>


      <div className="report-kpis">

        <div>
          <span>Total Revenue</span>
          <strong>₹7,84,250</strong>
          <small>↑ 18.4%</small>
        </div>

        <div>
          <span>Total Orders</span>
          <strong>2,418</strong>
          <small>↑ 12.2%</small>
        </div>

        <div>
          <span>Average Bill</span>
          <strong>₹1,198</strong>
          <small>↑ 5.4%</small>
        </div>

        <div>
          <span>Customer Rating</span>
          <strong>4.8/5</strong>
          <small>Excellent</small>
        </div>

      </div>


      <div className="reports-layout">

        <div className="report-chart-card">

          <span className="eyebrow">
            REVENUE TREND
          </span>

          <h2>Weekly sales</h2>

          <div className="large-chart">

            {sales.map((sale, index) => (

              <div className="large-bar-column" key={sale[0]}>

                <span className="large-value">
                  {sale[1]}
                </span>

                <div
                  className="large-bar"
                  style={{
                    height: `${45 + index * 7}%`,
                  }}
                ></div>

                <small>
                  {sale[0].slice(0, 3)}
                </small>

              </div>

            ))}

          </div>

        </div>


        <div className="best-sellers">

          <span className="eyebrow">
            TOP PERFORMERS
          </span>

          <h2>Best sellers</h2>

          {products.map((product) => (

            <div className="best-seller" key={product[0]}>

              <span className="rank">
                {product[0]}
              </span>

              <div>
                <strong>{product[1]}</strong>
                <small>{product[2]}</small>
              </div>

              <b>{product[3]}</b>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Reports;