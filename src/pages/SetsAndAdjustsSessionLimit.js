import { useCallback } from "react";
import "./SetsAndAdjustsSessionLimit.css";

const SetsAndAdjustsSessionLimit = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Login Page" to the project
  }, []);

  return (
    <div className="sets-and-adjusts-session-limit">
      <div className="sets-and-adjusts-session-limit-child" />
      <footer className="frame-footer">
        <div className="sets-and-adjusts-session-limit-parent">
          <h2 className="sets-and-adjusts">Sets and Adjusts Session Limits</h2>
          <div className="logonnew-1-parent2">
            <img
              className="logonnew-1-icon8"
              loading="lazy"
              alt=""
              src="/logonnew-1@2x.png"
            />
            <div className="truexgold-admin-wrapper1">
              <a className="truexgold-admin3">TRUEXGOLD ADMIN</a>
            </div>
          </div>
        </div>
        <section className="frame-wrapper4">
          <div className="set-amount-parent">
            <h3 className="set-amount">Set Amount</h3>
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="frame-parent5">
                <div className="frame-parent6">
                  <input
                    className="frame-inner"
                    placeholder="Set amount "
                    type="text"
                  />
                  <div className="amount-input" />
                </div>
                <div className="set-limit-parent">
                  <input
                    className="set-limit"
                    placeholder="Set Limit"
                    type="text"
                  />
                  <div className="limit-input" />
                </div>
              </div>
              <div className="frame-wrapper5">
                <div className="frame-parent7">
                  <button className="set-wrapper">
                    <div className="set">Set</div>
                  </button>
                  <button className="edit-wrapper">
                    <div className="edit">Edit</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="frame-wrapper6">
          <div
            className="majesticonslogout-line-group"
            onClick={onFrameContainerClick}
          >
            <img
              className="majesticonslogout-line2"
              loading="lazy"
              alt=""
              src="/majesticonslogoutline.svg"
            />
            <div className="logout-container">
              <div className="logout2">Logout</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SetsAndAdjustsSessionLimit;
