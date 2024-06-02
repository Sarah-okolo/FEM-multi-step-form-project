import "../components-styles/Finishing-up.scss";

function FinishingUp() {
  return (
    <>
      <div id="finishing-up">
        <h2>Finishing up</h2>
        <p className="instruction">
          Double-check everything looks OK before confirming.
        </p>

        <div id="selected-plan-price-container">
          <div className="flex" id="selected-plan">
            <div>
              <h3>
                Arcade(<span>Monthly</span>)
              </h3>
              <a href="#select-your-plan" id="change-plan">
                Change
              </a>
            </div>
            <span className="amounts selected-plan-price">$9/mo</span>
          </div>

          <div className="flex extra-prices">
            <p>Online Service</p>
            <span className="amounts online-service-price">+$1/mo</span>
          </div>

          <div className="flex extra-prices">
            <p>Larger Storage</p>
            <span className="amounts larger-storage-price">+$2/mo</span>
          </div>
        </div>

        <div className="flex total-amount">
            <p>Total (per <span id="mo-yr">month</span>)</p>
            <span id="total-selected-plan-amount">+$12/mo</span>
        </div>
       
      </div>
    </>
  );
}
export default FinishingUp;
