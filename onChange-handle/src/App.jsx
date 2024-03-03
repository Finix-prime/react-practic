import { useState } from 'react';
import CheckBox from './components/checkbox.jsx';

function App() {
  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantiity(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handlePayment(event) {
    setPayment(event.target.value);
  }

  function handleShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input
          value={name}
          onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input
          className="hidden-arrow"
          value={quantity}
          onChange={handleQuantiity}
          type='number' />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleComment}
          placeholder='Enter delivery instructions' />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
          <option value="">Select options</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping == "Pick Up"}
            onChange={handleShipping} />Pickup
        </label><br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping == "Delivery"}
            onChange={handleShipping} />Delivery
        </label>
        <p>Shipping: {shipping}</p>

        <CheckBox />

      </div>
    </>
  )
}

export default App
