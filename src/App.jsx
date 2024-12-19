import logo from "./images/logo.svg"
import { useState } from "react"

function App() {
  const [spending, setSpending] = useState([
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ])

  const getMaxAmount = () => {
    if (spending.length === 0) return 0;
    return Math.max(...spending.map((s) => s.amount));
  };

  const maxAmount = getMaxAmount();

  return (
    <>
      <main>
        <section className="balance">
          <div>
            <span>My balance</span>

            <h1>$921.48</h1>
          </div>

          <img src={logo} alt="Logo" />
        </section>

        <section className="spending">
          <div>
            <h1>Spending - Last 7 days</h1>

            <ul>
              {spending.map((item) => (
                <li>
                  {/* Em React, o atributo style espera um objeto JavaScript, e as propriedades de estilo são escritas em camelCase */}
                  <div style={{ height: `calc(3 * ${item.amount}px)`, backgroundColor: item.amount === maxAmount ? "#76b5bc" : "#ec775f" }}>
                    <span className="tooltip-text">${item.amount}</span>
                  </div>

                  <span>{item.day}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr />

          <div className="total">
            <div>
              <span>Total this month</span>

              <h1>$478.33</h1>
            </div>

            <div>
              <span>+2.4%</span>

              <span>from last month</span>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
