import React, { useContext, useEffect, useRef, useState } from "react";
import { SLAddOnsContext, MOYContext } from "./contexts";


function AddOn(props) {
  const { addOnH3, addOnInfo, addOnPrice } = props;
  const addOnFocus = useRef(null);
  const [isFocused, changeFocus] = useState(false);
  const {updateSelectedAddOns} = useContext(SLAddOnsContext);
  const { isMonthOrYear } = useContext(MOYContext);

  // updates an array in state with the html elements that have the .plan-focus class
  function updateAddOn() {
    updateSelectedAddOns(Array.from(document.querySelectorAll(".add-on")).filter((item) => {
      return item.classList.contains('plan-focus');
    }));
  }

  useEffect(() => {
    updateAddOn();
  }, [isMonthOrYear])

  function selectAddOn() {
    const addOnBox = document.querySelectorAll(".add-on");
    const addOncheckBox = addOnFocus.current.querySelector('#checkbx');

    // sets the checked and focus state of each addOn box.
    addOnBox.forEach(() => {
      // If not focused (not checked)
      if (!isFocused) {
        addOnFocus.current.classList.add("plan-focus");
        addOncheckBox.classList.add("checked");
        addOncheckBox.setAttribute('aria-checked', true);
      }
      //If focused (checked)
      else {
        addOnFocus.current.classList.remove("plan-focus");
        addOncheckBox.classList.remove("checked");
        addOncheckBox.setAttribute('aria-checked', false);
      }
      changeFocus(!isFocused);
    });

    updateAddOn();
  }

  
  return (
    <>
      <div className="add-on" ref={addOnFocus} onClick={selectAddOn}>
        <div className="wrapper">
          <div role="checkbox" id="checkbx" tabIndex="0" aria-checked="false">
            <ion-icon name="checkmark-sharp" className="checkmark"></ion-icon>
          </div>
          <div className="add-on-info">
            <h3>{addOnH3}</h3>
            <p>{addOnInfo}</p>
          </div>
        </div>
        <span className="add-on-price">{addOnPrice}</span>
      </div>
    </>
  );
}

export default AddOn;
