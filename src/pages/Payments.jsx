function Payments() {

  const payments = [
    ["#PAY-1042", "Table 05", "Card", "₹850", "10:42 AM"],
    ["#PAY-1041", "Table 02", "UPI", "₹450", "10:28 AM"],
    ["#PAY-1040", "Table 08", "Cash", "₹1,200", "10:11 AM"],
    ["#PAY-1039", "Table 04", "Card", "₹920", "09:56 AM"],
    ["#PAY-1038", "Table 01", "UPI", "₹640", "09:42 AM"],
  ];

  return (
    <div className="page payments-page">

      <div className="payments-heading">

        <div>
          <span className="eyebrow">FINANCE</span>

          <h1>Payment Journal</h1>

          <p>
            Every successful transaction, in one clear view.
          </p>
        </div>

        <button className="gold-button">
          Export Report ↓
        </button>

      </div>


      <div className="payment-overview">

        <div className="payment-total">

          <span>TODAY'S COLLECTION</span>

          <strong>₹25,450</strong>

          <small>
            ↑ 12.8% compared with yesterday
          </small>

        </div>

        <div>
          <span>Card</span>
          <strong>₹10,820</strong>
        </div>

        <div>
          <span>UPI</span>
          <strong>₹8,420</strong>
        </div>

        <div>
          <span>Cash</span>
          <strong>₹6,210</strong>
        </div>

      </div>


      <div className="payment-ledger">

        <div className="ledger-heading">

          <span>TRANSACTION</span>
          <span>TABLE</span>
          <span>METHOD</span>
          <span>AMOUNT</span>
          <span>TIME</span>
          <span>STATUS</span>

        </div>

        {payments.map((payment) => (

          <div className="ledger-row" key={payment[0]}>

            <strong>{payment[0]}</strong>

            <span>{payment[1]}</span>

            <span className="method">
              {payment[2]}
            </span>

            <strong>{payment[3]}</strong>

            <span>{payment[4]}</span>

            <span className="completed">
              Completed
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Payments;