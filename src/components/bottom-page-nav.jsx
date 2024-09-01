import { useEffect, useRef, useState, useContext } from 'react';
import '../components-styles/bottom-page-nav.scss'
import { BtnLinkNumberContext, InputValidityContext, SLPlanContext, SLAddOnsContext } from "./contexts";


function BottomNav() {
  const sectionLinks = ['personal-info', 'select-your-plan', 'pick-add-ons', 'finishing-up', 'thank-you'];
  const { btnLinkNumber, setBtnLinkNumber } = useContext(BtnLinkNumberContext);
  const { selectedPlanName, selectedPlanPrice } = useContext(SLPlanContext);
  const { selectedAddOns } = useContext(SLAddOnsContext);
  const {isValid} = useContext(InputValidityContext);
  const [nsOrConfirm, updateNsOrConfirm] = useState("Next Step");
  const nxtBtn = useRef(null);
  const btmNav = useRef(null);

  // Changes the color of the and text of the next btn respectively on change of the btnLinkNumber state.
  useEffect(() => {
    if (btnLinkNumber < 4) {
      nxtBtn.current.classList.remove('confirm');
      updateNsOrConfirm("Next Step");
      document.getElementById("bottom-nav").style.display = "flex";
    }
    if (btnLinkNumber == 4) {
      nxtBtn.current.classList.add('confirm');
      updateNsOrConfirm("Confirm");
    }
  }, [btnLinkNumber])

  // VALIDATES AND SUBMITS FORM DATA
  function submitForm() {
    // stores the user's form data
    const userData = {
      userName:'',
      userEmail:'',
      userPhoneN:'',
      planName:'',
      planPrice:'',
      addons: []
    };

    const inputFields = document.querySelectorAll('.input-field');
    inputFields.forEach((field, index) => {
      // checks if the input field is not empty
      if (field.value !== ''){
        // checks if the any input field value is invalid
        if (!isValid) {
          document.getElementById('personal-info').scrollIntoView();
          setBtnLinkNumber(cur => cur = 1);
        }
        // ENSURES THE INPUT FIELD IS NOT EMPTY AND ITS VALUE IS VALID, THEN PROCEEDS TO UPDATE AND SUBMIT FORM DATA
        else {
          userData.userName = inputFields[0].value;
          userData.userEmail = inputFields[1].value;
          userData.userPhoneN = inputFields[2].value;
          userData.planName = selectedPlanName;
          userData.planPrice = selectedPlanPrice;
          
          selectedAddOns.forEach((addon) => {
            let addOnName = addon.children[0].children[1].children[0].innerText
            let addonPrice = addon.children[1].innerText;
            userData.addons.push({addOnName, addonPrice})
          })

          console.log(userData)
        }
      }
      else {
        // Move back to the 1st section of the form if an input field is empty.
        field.style.border='1px solid red';
        document.querySelectorAll('.required')[index].style.display='block';
        document.getElementById('personal-info').scrollIntoView();
        setBtnLinkNumber(cur => cur = 1);
      }
    });
  }

  // Displays the next section in the form
  function next() {
      if(btnLinkNumber <= 4 && btnLinkNumber > 0 ) {
        setBtnLinkNumber(cur => cur + 1);
        document.getElementById(sectionLinks[btnLinkNumber]).scrollIntoView();
      }

      if(btnLinkNumber == 0) {
        setBtnLinkNumber(cur => cur + 2);
        document.getElementById(sectionLinks[btnLinkNumber+1]).scrollIntoView();
      }

      if(btnLinkNumber == 3) {
        nxtBtn.current.classList.add('confirm')
        updateNsOrConfirm("Confirm");
      }

      if (btnLinkNumber == 4){
        btmNav.current.style.display = "none";
        submitForm();
      }
  }

  // Displays the previous section in the form
  function back() {
    if(btnLinkNumber > 0) {
      setBtnLinkNumber(cur => cur - 1);
      // checks to ensure btnLinkNumber is not set to a negative number.
      if (btnLinkNumber - 2 >= 0) {
        document.getElementById(sectionLinks[btnLinkNumber - 2]).scrollIntoView();
      }
    }
  };

  return ( 
    <>
      <div id="bottom-nav" ref={btmNav}>
        <button id='go-back-btn' onClick={back}>Go Back</button>
        <button className='next-btn' onClick={next} ref={nxtBtn}>{nsOrConfirm}</button>
      </div>
    </>
   );
}

export default BottomNav;