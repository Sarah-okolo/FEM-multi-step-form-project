import "../components-styles/Finishing-up.scss";
import { useContext, useEffect, useState } from "react";
import { extractNumericValues } from "./utility_functions";
import { SLAddOnsContext, SLPlanContext, MOYContext } from "./contexts";


function FinishingUp() {
  const { selectedAddOns } = useContext(SLAddOnsContext);
  const { selectedPlanName, selectedPlanPrice } = useContext(SLPlanContext);
  const { isMonthOrYear } = useContext(MOYContext);
  const [rerender, triggerRerender] = useState(false);
  let totalPrice;

  // Calculates the total plan and addOn price
  if (selectedPlanPrice != "") {
    const addOnsPrice = selectedAddOns.map((item) => extractNumericValues(item.children[1].innerText));
    let totalAddOnPrice = 0;
    addOnsPrice.forEach((num) => totalAddOnPrice += num );
    totalPrice = totalAddOnPrice + extractNumericValues(selectedPlanPrice)
  }

  // Manually triggers a rerender because the DOM is not updating on time.
  useEffect(() => {
    triggerRerender(prev => !prev);
  }, [selectedAddOns])

  return (
    <>
      <div id="finishing-up">
        <h2>Finishing up</h2>
        <p className="instruction">
          Double-check everything looks OK before confirming.
        </p>

        <div id="selected-plan-price-container">
          <div className="flex" id="selected-plan">
            <div>
              <h3>
                {selectedPlanName} (<span>{isMonthOrYear == "mo" ? "Yearly" : "Monthly"}</span>)
              </h3>
              <a href="#select-your-plan" id="change-plan">
                Change
              </a>
            </div>
            <span className="selected-plan-price">{selectedPlanPrice}</span>
          </div>

          {/* Renders the list of user selected Add ons. */}
          {selectedAddOns.map((item, index) => (
            <div key={index} className="flex extra-prices">
              <p>{item.querySelector("h3").innerText}</p>
              <span className="selected-addon-price">{item.children[1].innerText}</span>
            </div>
          ))}
        </div>

        <div className="flex total-amount">
          <p>
            Total (per <span id="mo-yr">{isMonthOrYear == "mo" ? "year" : "month"}</span>)
          </p>
          <span id="total-selected-plan-amount">{`+$${totalPrice}/${isMonthOrYear == "mo" ? "yr" : "mo"}`}</span>
        </div>
      </div>
    </>
  );
}
export default FinishingUp;