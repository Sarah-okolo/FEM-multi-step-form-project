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
      document.getElementById('go-back-btn').style.visibility = 'visible';
    }
    if (btnLinkNumber == 1) {
      document.getElementById('go-back-btn').style.visibility = 'hidden';
    }
  }, [btnLinkNumber])

  // removes the active state of all section btns and sets only for the currently clicked link btn.
  function setActive() {
    document.querySelectorAll(".round-nav-btn").forEach((link) => {
      link.style.backgroundColor = 'transparent'
      link.style.color = 'hsl(229, 24%, 87%)';
      link.style.border = '1px solid white';

  });
    linksRef.current.style.backgroundColor = 'hsl(206, 94%, 87%)';
    linksRef.current.style.color = 'hsl(213, 96%, 18%)';
    linksRef.current.style.border = 'none';
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