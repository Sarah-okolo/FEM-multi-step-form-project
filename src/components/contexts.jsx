import { createContext, useState } from 'react';

// context to share the value of the isMonthOrYear state value initially manipulated in the select-your-plan.jsx file.
export const MOYContext = createContext();
// context to share the value of the selectedAddOns state value initially manipulated in the add-ons.jsx file.
export const SLAddOnsContext = createContext();
// context to share the value of the selectedPlan state value initially manipulated in the Plan.jsx file.
export const SLPlanContext = createContext();
// context to store the number of the currently active nav link in the nav-links.jsx file.
export const BtnLinkNumberContext = createContext();
// context to store the validity state of the input fields in the form-field.jsx file.
export const InputValidityContext = createContext();


export const MyContextsProvider = ({ children }) => {
  const [isMonthOrYear, setIsMonthOrYear] = useState("yr"); // For use in MOYContext
  const [selectedAddOns, updateSelectedAddOns] = useState([]); // For use in SLAddOnsContext
  const [selectedPlanName, updateSelectedPlanName] = useState(""); // For use in SLPlanContext
  const [selectedPlanPrice, updateSelectedPlanPrice] = useState(""); // For use in SLPlanContext
  const [btnLinkNumber, setBtnLinkNumber] = useState(1); // For use in BtnLinkNumberContext
  const [isValid, setValidity] = useState(false); // For use in InputValidityContext


  return (
    <MOYContext.Provider value={{ isMonthOrYear, setIsMonthOrYear }}>
      <SLAddOnsContext.Provider value={{ selectedAddOns, updateSelectedAddOns }}>
        <SLPlanContext.Provider value={{ selectedPlanName, updateSelectedPlanName, selectedPlanPrice, updateSelectedPlanPrice}}>
          <BtnLinkNumberContext.Provider value={{ btnLinkNumber, setBtnLinkNumber }}>
            <InputValidityContext.Provider value={{ isValid, setValidity }}>
             {children}
            </InputValidityContext.Provider>
          </BtnLinkNumberContext.Provider>
        </SLPlanContext.Provider>
      </SLAddOnsContext.Provider>
    </MOYContext.Provider>
  );
};