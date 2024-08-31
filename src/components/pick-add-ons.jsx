import "../components-styles/pick-add-ons.scss";
import { useContext, useEffect, useState } from "react";
import AddOn from "./add-ons";
import { calcYearlyFees } from "./utility_functions";
import { MOYContext } from "./contexts";


function PickAddOns() {
  // use context from select-you-plan.jsx file.
  const {isMonthOrYear} = useContext(MOYContext);
  const [onlineServiceFee, setOnlineServiceFee] = useState("+$1/mo");
  const [largerStorageFee, setLargerStorageFee] = useState("+$2/mo");
  const [customizableProfileFee, setCustomizableProfileFee] = useState("+$2/mo");

  useEffect(() => {
    if (isMonthOrYear == "mo") {
      // set fees to yearly
      setOnlineServiceFee(`+$${calcYearlyFees(1)}/yr`);
      setLargerStorageFee(`+$${calcYearlyFees(2)}/yr`);
      setCustomizableProfileFee(`+$${calcYearlyFees(2)}/yr`);
    } else {
      // set fees to monthly
      setOnlineServiceFee(`+$${1}/mo`);
      setLargerStorageFee(`+$${2}/mo`);
      setCustomizableProfileFee(`+$${2}/mo`);
    }
  }, [isMonthOrYear]);

  return (
    <>
      <div id="pick-add-ons">
        <h2>Pick add-ons</h2>
        <p className="instructions">
          Add-ons help enhance your gaming experience.
        </p>

        <AddOn
          addOnH3="Online service"
          addOnInfo="Access to multiplayer games"
          addOnPrice={onlineServiceFee}
        />

        <AddOn
          addOnH3="Larger storage"
          addOnInfo="Extra 1TB of cloud save"
          addOnPrice={largerStorageFee}
        />

        <AddOn
          addOnH3="Customizable Profile"
          addOnInfo="Custom theme on your profile"
          addOnPrice={customizableProfileFee}
        />
      </div>
    </>
  );
}

export default PickAddOns;
