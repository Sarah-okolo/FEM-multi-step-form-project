import NavSidebar from "./nav-sidebar";
import PersonalInfo from "./personal-info";
import BottomNav from './bottom-page-nav';

function App() {
  return (
    <>
      <div id="form-card">
        <NavSidebar />
        
        <main id='main-section'>
          <div id="content-section">
            <PersonalInfo />
          </div>
          <BottomNav />
        </main>
      </div>
    </>
  );
}

export default App

