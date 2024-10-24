import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {

  const [count, setCount] = useState(0);

  // let count = 0;

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }


  return (
    <>
      <h1>Learning about Components</h1>

      <Product
        name="Amazon Echo"
        description="Smart Speaker"
        price="199.99"
      />

      <Product
        name="JBL Speaker"
        description="Bluetooth Speaker"
        price="299.99"
      />

      <Product
        name="Beats Studio"
        description="Wireless Speaker"
        price="400.99"
      />


      <h1>Welcome to my counter app</h1>
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

    </>
  );
}

export default App;
