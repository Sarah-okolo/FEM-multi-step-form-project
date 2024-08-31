import { useEffect, useRef, useState, useContext } from 'react';
import '../components-styles/bottom-page-nav.scss'
import { BtnLinkNumberContext } from "./contexts";


function BottomNav() {
  const sectionLinks = ['personal-info', 'select-your-plan', 'pick-add-ons', 'finishing-up', 'thank-you'];
  const { btnLinkNumber, setBtnLinkNumber } = useContext(BtnLinkNumberContext);
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