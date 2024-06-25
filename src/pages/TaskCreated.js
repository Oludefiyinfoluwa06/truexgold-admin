import { useCallback } from "react";
import "./TaskCreated.css";

const TaskCreated = () => {
  const onUnknownContainerClick = useCallback(() => {
    // Please sync "Login Page" to the project
  }, []);

  return (
    <div className="task-created">
      <div className="canvas" />
      <footer className="topbar">
        <div className="left-sidebar">
          <div className="task-created-parent">
            <h1 className="task-created1">Task Created</h1>
            <div className="logonnew-1-group">
              <img
                className="logonnew-1-icon1"
                loading="lazy"
                alt=""
                src="/logonnew-1@2x.png"
              />
              <div className="truexgold-admin-container">
                <a className="truexgold-admin1">TRUEXGOLD ADMIN</a>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="task-table">
            <h2 className="view-list-of-container">
              <p className="view-list-of">View list of task created</p>
            </h2>
            <div className="table-content">
              <div className="table-content-child" />
              <div className="table-header-row">
                <div className="table-header-row-child" />
                <div className="title">Title</div>
                <div className="reward">Reward</div>
                <div className="time-stamp">Time Stamp</div>
                <div className="action">Action</div>
              </div>
              <div className="table-body">
                <div className="frame-parent">
                  <div className="community-column-parent">
                    <div className="community-column">
                      <b className="join-our-community">Join our community</b>
                    </div>
                    <div className="logon-column">
                      <img
                        className="logonnew-1-icon2"
                        loading="lazy"
                        alt=""
                        src="/logonnew-1-5@2x.png"
                      />
                    </div>
                    <div className="action-column-wrapper">
                      <div className="action-column">100</div>
                    </div>
                    <div className="footer">
                      <div className="div">24-06-2024</div>
                    </div>
                    <div className="logout-icon">
                      <div className="delete">Delete</div>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="join-our-channel-wrapper">
                      <b className="join-our-channel">Join our channel</b>
                    </div>
                    <div className="logonnew-1-wrapper">
                      <img
                        className="logonnew-1-icon3"
                        loading="lazy"
                        alt=""
                        src="/logonnew-1-5@2x.png"
                      />
                    </div>
                    <div className="wrapper">
                      <div className="div1">100</div>
                    </div>
                    <div className="container">
                      <div className="div2">24-06-2024</div>
                    </div>
                    <div className="delete-wrapper">
                      <div className="delete1">Delete</div>
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="join-our-community-wrapper">
                      <b className="join-our-community1">Join our community</b>
                    </div>
                    <div className="logonnew-1-container">
                      <img
                        className="logonnew-1-icon4"
                        loading="lazy"
                        alt=""
                        src="/logonnew-1-5@2x.png"
                      />
                    </div>
                    <div className="frame">
                      <div className="div3">100</div>
                    </div>
                    <div className="frame-div">
                      <div className="div4">24-06-2024</div>
                    </div>
                    <div className="delete-container">
                      <div className="delete2">Delete</div>
                    </div>
                  </div>
                  <div className="group-div">
                    <div className="join-our-community-container">
                      <b className="join-our-community2">Join our community</b>
                    </div>
                    <div className="logonnew-1-frame">
                      <img
                        className="logonnew-1-icon5"
                        loading="lazy"
                        alt=""
                        src="/logonnew-1-5@2x.png"
                      />
                    </div>
                    <div className="wrapper1">
                      <div className="div5">100</div>
                    </div>
                    <div className="wrapper2">
                      <div className="div6">24-06-2024</div>
                    </div>
                    <div className="delete-frame">
                      <div className="delete3">Delete</div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="join-our-community-frame">
                      <b className="join-our-community3">Join our community</b>
                    </div>
                    <div className="logonnew-1-wrapper1">
                      <img
                        className="logonnew-1-icon6"
                        loading="lazy"
                        alt=""
                        src="/logonnew-1-5@2x.png"
                      />
                    </div>
                    <div className="wrapper3">
                      <div className="div7">100</div>
                    </div>
                    <div className="wrapper4">
                      <div className="div8">24-06-2024</div>
                    </div>
                    <div className="delete-wrapper1">
                      <div className="delete4">Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="unknown">
            <div className="unknown1" onClick={onUnknownContainerClick}>
              <img
                className="majesticonslogout-line"
                loading="lazy"
                alt=""
                src="/majesticonslogoutline.svg"
              />
              <div className="unknown2">
                <div className="logout">Logout</div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default TaskCreated;
