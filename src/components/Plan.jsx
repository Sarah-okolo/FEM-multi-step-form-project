import React, { useContext, useEffect, useRef } from "react";
import "../components-styles/select-your-plan.scss";
import { SLPlanContext } from "./contexts";


function Plan(props) {
  const { planImg, planImgAlt, planH3Text, planFee, isYearly } = props;
  const { updateSelectedPlanName, updateSelectedPlanPrice } = useContext(SLPlanContext);
  const monthsFreeTxt = useRef(null);
  const planFocus = useRef(null);
  const initialRender = useRef(true);

  // Updates the selectedPlan Name and Price state with the h3 and p elements of the focused plan element.
  function setSelectedPlanState(el) {
    updateSelectedPlanName(el.children[1].children[0].innerText)
    updateSelectedPlanPrice(el.children[1].children[1].innerText)
  }

  // sets focus on the first plan box when the component mounts.
  useEffect(() => {
    const plann = Array.from(document.querySelectorAll('.plan'));
    plann[0].classList.add("plan-focus");
    setSelectedPlanState(plann[0])
  }, []);

  // used useEffect to rerender this component everytime the fees range toggles between month and year.
  useEffect(() => {
    if (initialRender.current) {
      // Skip running on mount
      initialRender.current = false;
    } 
    else {
      // checks if the 'isYearly' value is set to 'mo' and not 'yr'
      if (isYearly == "mo") {
        monthsFreeTxt.current.classList.add("display");
      } else {
        monthsFreeTxt.current.classList.remove("display");
      }
      // gets the current focused plan
      let focusedPlan =  Array.from(document.querySelectorAll('.plan')).filter((item) => {
        return item.classList.contains('plan-focus');
      })[0];
      setSelectedPlanState(focusedPlan);
  }}, [isYearly]);

  // function to set the focus state of each plan box on click
  function setFocus() {
    const planBox = document.querySelectorAll(".plan");
    // on click, first gets all the plan box and unfocus them.
    planBox.forEach((box) => box.classList.remove("plan-focus"));
    // next, set focus on the currently clicked plan.
    planFocus.current.classList.add("plan-focus");
    setSelectedPlanState(planFocus.current)
  }


  return (
    <>
      <div className="plan" ref={planFocus} onClick={setFocus}>
        <img src={planImg} alt={planImgAlt} className="plan-logo" />
        <div>
          <h3>{planH3Text}</h3>
          <p>{planFee}</p>
          <span className="months-free-txt" ref={monthsFreeTxt}>
            2 months free
          </span>
        </div>
      </div>
    </>
  );
}

export default Plan;