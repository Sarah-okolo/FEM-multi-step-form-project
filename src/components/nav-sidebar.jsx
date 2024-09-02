import '../components-styles/nav-sidebar.scss'
import NavLinks from './nav-links'


function NavSidebar() {
  return ( 
    <>
      <nav id="nav-sidebar">
        <div id='nav-links-container'>
          <NavLinks stepNumber = {1} stepName = "YOUR INFO" destination = '#personal-info' />
          <NavLinks stepNumber = {2} stepName = "SELECT PLAN" destination = '#select-your-plan' />
          <NavLinks stepNumber = {3} stepName = "ADD-ONS" destination = '#pick-add-ons' />
          <NavLinks stepNumber = {4} stepName = "SUMMARY" destination = '#finishing-up' />
        </div>
      </nav>
    </>
   );
}

export default NavSidebar;