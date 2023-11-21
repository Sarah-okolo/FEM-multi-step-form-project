import '../components-styles/nav-sidebar.scss'

function NavSidebar() {
  return ( 
    <>
      <nav id="nav-sidebar">
        <div id='nav-links-container'>
          
          <div className='link-wrapper'>
           <a href='#personal-info' className="round-nav-btn">1</a>
            <p className="what-section"><span className='step-faded-txt'>Step 1</span><br/>YOUR INFO</p>
          </div>
        
          <div className='link-wrapper'>
           <a href="#select-your-plan" className="round-nav-btn">2</a>
            <p className="what-section"><span className='step-faded-txt'>Step 2</span><br/>SELECT PLAN</p>
          </div>

          <div className='link-wrapper'>
            <a href="#pick-add-ons" className="round-nav-btn">3</a>
            <p className="what-section"><span className='step-faded-txt'>Step 3</span><br/>ADD-ONS</p>
          </div>
         
          <div className='link-wrapper'>
            <div className="round-nav-btn">4</div>
            <p className="what-section"><span className='step-faded-txt'>Step 4</span><br/>SUMMARY</p>
          </div>
            
          {/* <div className="progress-line"></div> */}

        </div>
      </nav>
    </>
   );
}

export default NavSidebar;