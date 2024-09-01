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
      linkBtns.forEach((btn) => btn.classList.remove('active'));
      linkBtns[btnLinkNumber-1].classList.add('active');
    }
  }, [btnLinkNumber])

  // removes the active state of all section btns and sets only for the currently clicked link btn.
  function setActive() {
    document.querySelectorAll(".round-nav-btn").forEach((link) => link.classList.remove('active'));
    linksRef.current.classList.add('active');
    setBtnLinkNumber(Number(linksRef.current.innerText))
  }

  // CHECK IF THE BOTTOM NAV BAR IS DISPLAYED OR NOT ONCLICK OF THE LINK BTNS. IF IT IS, DO NOTHING, ELSE DISPLAY IT

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