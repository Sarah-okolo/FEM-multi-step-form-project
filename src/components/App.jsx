import NavSidebar from "./nav-sidebar";
import PersonalInfo from "./personal-info";
import BottomNav from "./bottom-page-nav";
import SelectYourPlan from "./select-your-plan";
import PickAddOns from "./pick-add-ons";
import FinishingUp from "./Finishing-up";
import ThankYou from "./Thank-you";

function App() {
  return (
    <>
      <div id="form-card">
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
      </div>
    </>
  );
}

export default App;
