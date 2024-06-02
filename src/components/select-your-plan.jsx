import '../components-styles/select-your-plan.scss'

function SelectYourPlan() {
  const slider = document.getElementById('white-slide');

  const toggleMonthYear = () => {
    slider.classList.toggle("slide");
  };

  return (
    <>
      <div id='select-your-plan'>
        <h2>Select your plan</h2>
        <p className='instruction'>You have the option of monthly or yearly billing.</p>       

        <div id='plans-container'>
          <div className="plan">
            <img src='/images/icon-arcade.svg' alt='arcade plan logo' className='plan-logo'/>
            <div>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>
         
          <div className="plan">
            <img src='/images/icon-advanced.svg' alt='advanced plan logo' className='plan-logo'/>
            <div>
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
          </div>

          <div className="plan">
            <img src='/images/icon-pro.svg' alt='pro plan logo' className='plan-logo'/>
            <div>
              <h3>Pro</h3>
              <p>$15/mo</p>
            </div>
          </div>
        </div>
       
        <div id='month-year-select'>
          <p>Monthly</p>
          <div id="month-year-toggle-btn" onClick={toggleMonthYear}><span id='white-slide'></span></div>
          <p>Yearly</p>
        </div>
      </div>
    </>
   );
}

export default SelectYourPlan;