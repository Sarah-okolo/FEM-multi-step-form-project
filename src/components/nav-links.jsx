import {useRef, useEffect, useContext} from 'react'
import '../components-styles/nav-sidebar.scss'
import { BtnLinkNumberContext } from "./contexts";


function NavLinks(props) {
  const {stepNumber, stepName, destination} = props;
  const { btnLinkNumber, setBtnLinkNumber } = useContext(BtnLinkNumberContext);
  const linksRef = useRef(null);

  // updates the active states of the linkBtns when the btnLinkNumber state changes
  useEffect(() => {
    if (btnLinkNumber <= 4 && btnLinkNumber > 0) {
      const linkBtns = document.querySelectorAll(".round-nav-btn");
      // removes the active state from all the link-btns
      linkBtns.forEach((btn) => {
        btn.style.backgroundColor = 'transparent'
        btn.style.color = 'hsl(229, 24%, 87%)';
        btn.style.border = '1px solid white';
      });
      // sets the active state for only the currently clicked the link-btn
      linkBtns[btnLinkNumber-1].style.backgroundColor = 'hsl(206, 94%, 87%)';
      linkBtns[btnLinkNumber-1].style.color = 'hsl(213, 96%, 18%)';
      linkBtns[btnLinkNumber-1].style.border = 'none';
      document.getElementById('go-back-btn').style.visibility = 'visible'; // displays the go-back btn if the user is not currently on the first step
    }
    if (btnLinkNumber == 1) {
      document.getElementById('go-back-btn').style.visibility = 'hidden'; // hides the go-back btn if the user is currently on the first step
    }
  }, [btnLinkNumber])

  // updates the btnLinkNumber with the number text of the currently clicked link
  function setActive() {
    setBtnLinkNumber(Number(linksRef.current.innerText))
  }


  return (
    <>
      <div className='link-wrapper'>
        <a href={destination} ref={linksRef} className="round-nav-btn" onClick={setActive}>{stepNumber}</a>
        <p className="what-section">
          <span className='step-faded-txt'>Step {stepNumber}</span><br/>{stepName}
        </p>
      </div>
    </>
  )
}

export default NavLinks