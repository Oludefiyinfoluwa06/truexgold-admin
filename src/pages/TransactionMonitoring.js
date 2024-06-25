import { useCallback } from "react";
import TransactionMonitor from "../components/TransactionMonitor";
import { useNavigate } from "react-router-dom";
import "./TransactionMonitoring.css";

const TransactionMonitoring = () => {
  const navigate = useNavigate();

  const onLogoutButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="transaction-monitoring">
      <div className="transaction-monitoring-child" />
      <main className="account-info-parent">
        <TransactionMonitor />
        <div className="logout-button-wrapper">
          <div className="logout-button" onClick={onLogoutButtonContainerClick}>
            <img
              className="majesticonslogout-line"
              loading="lazy"
              alt=""
              src="/majesticonslogoutline.svg"
            />
            <div className="logout-wrapper">
              <div className="logout">Logout</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransactionMonitoring;
