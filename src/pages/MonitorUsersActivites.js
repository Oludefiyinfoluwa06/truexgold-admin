import Content from "../components/Content";
import "./MonitorUsersActivites.css";

const MonitorUsersActivites = () => {
  return (
    <div className="monitor-users-activites">
      <div className="monitor-users-activites-child" />
      <main className="header">
        <div className="app-title-container-wrapper">
          <div className="app-title-container">
            <h1 className="monitor-users-activities">
              Monitor User’s Activities
            </h1>
            <div className="logonnew-1-parent">
              <img
                className="logonnew-1-icon"
                loading="lazy"
                alt=""
                src="/logonnew-1@2x.png"
              />
              <div className="truexgold-admin-wrapper">
                <a className="truexgold-admin">TRUEXGOLD ADMIN</a>
              </div>
            </div>
          </div>
        </div>
        <Content />
      </main>
    </div>
  );
};

export default MonitorUsersActivites;
