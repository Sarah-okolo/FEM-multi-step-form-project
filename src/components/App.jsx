import NavSidebar from "./nav-sidebar";
import PersonalInfo from "./personal-info";
import BottomNav from "./bottom-page-nav";
import SelectYourPlan from "./select-your-plan";
import PickAddOns from "./pick-add-ons";
import FinishingUp from "./Finishing-up";
import ThankYou from "./Thank-you";
import { MyContextsProvider } from "./contexts";


function App() {
  return (
    <>
      <div id="form-card">
        <MyContextsProvider>
          <NavSidebar />
          <main id="main-section">
            <div id="content-section">
                <PersonalInfo />
                <SelectYourPlan />
                <PickAddOns /> 
                <FinishingUp />
                <ThankYou />
            </div>
            <BottomNav />
          </main>
        </MyContextsProvider>
      </div>

      <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/Sarah-okolo">Sarah Okolo</a>.
    </div>
    </>
  );
}

export default App;
