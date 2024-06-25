import PropTypes from "prop-types";
import "./TransactionMonitor.css";

const TransactionMonitor = ({ className = "" }) => {
  return (
    <div className={`account-info ${className}`}>
      <div className="account-title">
        <h1 className="transaction-monitoring2">Transaction Monitoring</h1>
        <div className="logonnew-1-parent">
          <img
            className="logonnew-1-icon2"
            loading="lazy"
            alt=""
            src="/logonnew-11@2x.png"
          />
          <div className="admin-title">
            <a className="truexgold-admin1">TRUEXGOLD ADMIN</a>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <div className="user-assets">
          <div className="user-assets-child" />
          <div className="username1">Username</div>
          <div className="coins">Coins</div>
        </div>
        <div className="user-transactions">
          <div className="transaction-list">
            <div className="transaction-row">
              <div className="transaction-details">
                <img
                  className="oval-icon"
                  loading="lazy"
                  alt=""
                  src="/oval@2x.png"
                />
                <div className="user-name">
                  <b className="lenwis-clark">Lenwis Clark</b>
                </div>
              </div>
              <div className="avatar-list">
                <div className="avatar-row">
                  <img
                    className="oval-icon1"
                    loading="lazy"
                    alt=""
                    src="/oval@2x.png"
                  />
                  <div className="avatar-names">
                    <b className="john-doe">John Doe</b>
                  </div>
                </div>
                <div className="avatar-row1">
                  <img
                    className="oval-icon2"
                    loading="lazy"
                    alt=""
                    src="/oval@2x.png"
                  />
                  <div className="felix-stark-wrapper">
                    <b className="felix-stark">Felix Stark</b>
                  </div>
                </div>
                <div className="avatar-row2">
                  <img
                    className="oval-icon3"
                    loading="lazy"
                    alt=""
                    src="/oval@2x.png"
                  />
                  <div className="lenwis-clark-wrapper">
                    <b className="lenwis-clark1">Lenwis Clark</b>
                  </div>
                </div>
                <div className="avatar-row3">
                  <img
                    className="oval-icon4"
                    loading="lazy"
                    alt=""
                    src="/oval@2x.png"
                  />
                  <div className="lenwis-clark-container">
                    <b className="lenwis-clark2">Lenwis Clark</b>
                  </div>
                </div>
                <div className="avatar-row4">
                  <img
                    className="oval-icon5"
                    loading="lazy"
                    alt=""
                    src="/oval@2x.png"
                  />
                  <div className="lenwis-clark-frame">
                    <b className="lenwis-clark3">Lenwis Clark</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-buttons">
              <div className="login-row">
                <div className="logonnew-1-group">
                  <img
                    className="logonnew-1-icon3"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="spacer">
                    <div className="empty-space">57 439 329</div>
                  </div>
                </div>
                <div className="logonnew-1-container">
                  <img
                    className="logonnew-1-icon4"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="wrapper">
                    <div className="div">49 289 328</div>
                  </div>
                </div>
                <div className="logonnew-1-parent1">
                  <img
                    className="logonnew-1-icon5"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="container">
                    <div className="div1">40 328 210</div>
                  </div>
                </div>
                <div className="logonnew-1-parent2">
                  <img
                    className="logonnew-1-icon6"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="frame">
                    <div className="div2">37 328 812</div>
                  </div>
                </div>
                <div className="logonnew-1-parent3">
                  <img
                    className="logonnew-1-icon7"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="wrapper1">
                    <div className="div3">35 320 233</div>
                  </div>
                </div>
                <div className="logonnew-1-parent4">
                  <img
                    className="logonnew-1-icon8"
                    loading="lazy"
                    alt=""
                    src="/logonnew-1-1@2x.png"
                  />
                  <div className="wrapper2">
                    <div className="div4">30 322 123</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TransactionMonitor.propTypes = {
  className: PropTypes.string,
};

export default TransactionMonitor;
