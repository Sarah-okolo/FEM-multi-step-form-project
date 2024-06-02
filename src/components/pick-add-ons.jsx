import "../components-styles/pick-add-ons.scss";

function PickAddOns() {
  return (
    <>
      <div id="pick-add-ons">
        <h2>Pick add-ons</h2>
        <p className="instructions">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="add-on one">
          <div className="wrapper">
            <label role="checkbox" tabIndex="0" aria-checked="false">
              <ion-icon
                name="checkmark-sharp"
                className="checkmark1"
              ></ion-icon>
            </label>
            <div className="add-on-info">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <span className="add-on-price">+$1/mo</span>
        </div>

        <div className="add-on">
          <div className="wrapper">
            <label role="checkbox" tabIndex="0" aria-checked="false">
              <ion-icon
                name="checkmark-sharp"
                className="checkmark2"
              ></ion-icon>
            </label>
            <div className="add-on-info">
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <span className="add-on-price">+$2/mo</span>
        </div>

        <div className="add-on">
          <div className="wrapper">
            <label role="checkbox" tabIndex="0" aria-checked="false">
              <ion-icon
                name="checkmark-sharp"
                className="checkmark3"
              ></ion-icon>
            </label>
            <div className="add-on-info">
              <h3>Customizable Profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <span className="add-on-price">+$2/mo</span>
        </div>
      </div>
    </>
  );
}

export default PickAddOns;
