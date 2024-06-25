import Dashboard1 from "../components/Dashboard1";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="background" />
      <main className="credentials-parent">
        <div className="credentials1">
          <h1 className="welcome-back">Welcome Back</h1>
          <div className="input-fields">
            <img
              className="logonnew-1-icon"
              loading="lazy"
              alt=""
              src="/logonnew-11@2x.png"
            />
            <a className="truexgold-admin">TRUEXGOLD ADMIN</a>
          </div>
        </div>
        <Dashboard1 />
      </main>
    </div>
  );
};

export default Dashboard;
