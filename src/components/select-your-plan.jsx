import { useRef, useState, useContext } from 'react';
import '../components-styles/select-your-plan.scss';
import Plan from './Plan';
import { calcYearlyFees } from './utility_functions';
import { MOYContext } from "./contexts";


function SelectYourPlan() {
  const [whiteSwitch, toggleSwitch] = useState(true);
  const [arcadeFee, setArcadeFee] = useState("$9/mo");
  const [advancedFee, setAdvancedFee] = useState("$12/mo");
  const [proFee, setProFee] = useState("$15/mo");
  const {isMonthOrYear, setIsMonthOrYear} = useContext(MOYContext);
  const slider = useRef(null);

// Function to toggle the plans yearly and monthly fees
  function toggleMonthYear() {
    if(whiteSwitch) {
      // set to yearly
      slider.current.classList.add('slide');
      setArcadeFee(`$${calcYearlyFees(9)}/${isMonthOrYear}`);
      setAdvancedFee(`$${calcYearlyFees(12)}/${isMonthOrYear}`);
      setProFee(`$${calcYearlyFees(15)}/${isMonthOrYear}`);
      setIsMonthOrYear("mo");
    }
    else{
      // set to monthly
      slider.current.classList.remove('slide');
      setArcadeFee(`$${9}/${isMonthOrYear}`);
      setAdvancedFee(`$${12}/${isMonthOrYear}`);
      setProFee(`$${15}/${isMonthOrYear}`);
      setIsMonthOrYear("yr");
    }
    toggleSwitch(!whiteSwitch);
  };

  return (
    <>
      <div id='select-your-plan'>
        <h2>Select your plan</h2>
        <p className='instruction'>You have the option of monthly or yearly billing.</p>       

        <div id='plans-container'>      
          <Plan planImg='/images/icon-arcade.svg'
                 planImgAlt='arcade plan logo'
                 planH3Text='Arcade'
                 planFee={arcadeFee}
                 isYearly={isMonthOrYear}
          />
         
          <Plan planImg='/images/icon-advanced.svg'
                 planImgAlt='advanced plan logo'
                 planH3Text='Advanced'
                 planFee={advancedFee}
                 isYearly={isMonthOrYear}
          />

          <Plan planImg='/images/icon-pro.svg'
                 planImgAlt='pro plan logo'
                 planH3Text='Pro'
                 planFee={proFee}
                 isYearly={isMonthOrYear}
          />
        </div>
       
        <div id='month-year-select'>
          <p>Monthly</p>
          <div id="month-year-toggle-btn" onClick={toggleMonthYear}><span className='white-slide' ref={slider}></span></div>
          <p>Yearly</p>
        </div>
      </div>
    </>
   );
}

export default SelectYourPlan;