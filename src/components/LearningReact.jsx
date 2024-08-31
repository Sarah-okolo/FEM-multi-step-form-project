import { useState, useRef } from "react";

const LearningReact = () => {
    const [count, setCount] = useState(0);
    const [isRich, setRichness] = useState(false);
    const [preferredMethod, setPPmethod] = useState("")
    const [ischecked, setIsChecked] = useState("")

    // componenet styles
    const btnStyles = {
        color: "white",
        borderRadius: "5px",
        padding: "5px 20px",
        border: "2px solid rgb(0, 166, 255)",
        backgroundColor: "rgb(0, 166, 255)",
    }

    const ronStyles = {
        display: "block",
        margin: "0 auto",
    }

    const combinedStyles = { ...btnStyles, ...ronStyles };

    const container = {
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
    }

    const btnsCont = {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        width: "100%"
    }

    const bigCount = {
        fontSize: "60px",
        color: "black",
        textAlign: "center",
        margin: "30px"
    }

    const pelement = {
        fontSize: "15px",
        color: "black"
    }

    const fset = {
        display: "grid",
        justifyContent: "center",
        margin: "20px",
        width: "auto",
        padding: "10px",
    }

    // component functions

    //for state management learning
    function increment() {
        // Making use of updater functions to remove state batching
        // Using an updater functions is neccessary if you want to work with the previous state of a variable
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

// for toggling boolean values in react learining
    function toggleRichness() {
        setRichness(!isRich);
    }

    // for handling onChange events in react learning
    function handlePaymentMethod(event) {
        console.log(event.target.value)
        setPPmethod(event.target.value);
    }

    function handlePPIsChecked(event) {
        setIsChecked(event.target.value);
        console.log(event.target.value)
    }

  return (
    <div style={container}>
        <h1 style={bigCount}>{count}</h1>

        <div style={btnsCont}>
            <button style={btnStyles} onClick={decrement}>Decrement</button>
            <button style={btnStyles} onClick={reset}>Reset</button>
            <button style={btnStyles} onClick={increment}>Increment</button>
        </div>

        <h2 style={bigCount}>{isRich ? "Rich" : "Poor"}</h2>
        <button style={combinedStyles} onClick={toggleRichness}>rich or not</button>

{/* for handling state in the onChange event with dropdowns in react */}
        <select onChange={handlePaymentMethod}>
            <option value="">Select payment method</option>
            <option>Verve</option>
            <option>Visa</option>
            <option>Mastercard</option>
        </select>g

        <p style={pelement}>Preferred payment method is: {preferredMethod}</p>

{/* for handling state for the onChange event with the radio inputs in react */}
        <fieldset style={fset} onChange={handlePPIsChecked}>
        <label style={pelement}>
        <input type="radio" name="paymentMethod" value= "Verve"/>
        Verve
        </label>
<br />
        <label style={pelement}>
        <input type="radio" name="paymentMethod" value="Visa"/>
        Visa
        </label>
<br />
        <label style={pelement}>
        <input type="radio" name="paymentMethod" value="Mastercard"/>
        Mastercard
        </label>
        </fieldset>

    </div>
  )
}

export default LearningReact