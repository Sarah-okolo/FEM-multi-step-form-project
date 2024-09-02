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

    // Hide all the sections
    sectionLinks.forEach((section) => {
      document.getElementById(section).style.display='none';
    });

    // Display only the corresponding section of the current step.
    document.getElementById(sectionLinks[btnLinkNumber-1]).style.display="block"
  }, [btnLinkNumber])

  // VALIDATES AND SUBMITS FORM DATA
  function submitForm() {
    const inputFields = document.querySelectorAll('.input-field');
    const userData = {userName:'', userEmail:'', userPhoneN:'', planName:'', planPrice:'', addons: []}; // stores the user's form data
    let formHasEmptyFields = Array.from(inputFields).some(field => field.value === ''); // finds empty input fields

    // Checks if there are any empty input fields or if any field is valid or not
    if (formHasEmptyFields || !isValid) {
      // move back to the 1st section of the form if any of the input fields are empty
      document.getElementById('personal-info').scrollIntoView();
      setBtnLinkNumber(cur => cur = 1);
      // display 'field required' warning for the specific empty field.
      inputFields.forEach((field, index) => {
        if (field.value == '') {
          field.style.border='1px solid red';
          document.querySelectorAll('.required')[index].style.display='block';
        }
      });
    }
    else {
      // UPDATE AND SUBMIT FORM DATA IF NO INPUT FIELD IS EMPTY.
      userData.userName = inputFields[0].value;
      userData.userEmail = inputFields[1].value;
      userData.userPhoneN = inputFields[2].value;
      userData.planName = selectedPlanName;
      userData.planPrice = selectedPlanPrice;
      selectedAddOns.forEach((addon) => {
        let addOnName = addon.children[0].children[1].children[0].innerText
        let addonPrice = addon.children[1].innerText;
        userData.addons.push({addOnName, addonPrice})
      });
      console.log(userData)
    }
  }


  // Displays the next section in the form
  function next() {
      if(btnLinkNumber <= 4 && btnLinkNumber > 0 ) {
        setBtnLinkNumber(cur => cur + 1);
        document.getElementById(sectionLinks[btnLinkNumber]).scrollIntoView();
        document.getElementById('go-back-btn').style.visibility = 'visible';

        if(btnLinkNumber == 3) {
          nxtBtn.current.classList.add('confirm')
          updateNsOrConfirm("Confirm");
        }
        else if (btnLinkNumber == 4){
          document.getElementById('go-back-btn').style.visibility = 'hidden';
          btmNav.current.style.display = "none";
          submitForm();
        }
      }

      if(btnLinkNumber == 0) {
        // setBtnLinkNumber(cur => cur + 2);
        document.getElementById(sectionLinks[btnLinkNumber]).scrollIntoView();
        document.getElementById('go-back-btn').style.visibility = 'hidden';
      }
  }

  // Displays the previous section in the form
  function back() {
    if(btnLinkNumber > 0) {
      setBtnLinkNumber(cur => cur - 1);
      document.getElementById(sectionLinks[btnLinkNumber-2]).scrollIntoView();
      if(btnLinkNumber == 2) {
        document.getElementById('go-back-btn').style.visibility = 'hidden';
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