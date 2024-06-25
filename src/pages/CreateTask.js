import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTask.css";

const CreateTask = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/task-created");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Login Page" to the project
  }, []);

  return (
    <div className="create-task">
      <div className="create-task-child" />
      <main className="frame-main">
        <div className="frame-wrapper">
          <div className="create-task-parent">
            <h2 className="create-task1">Create Task</h2>
            <div className="logonnew-1-parent1">
              <img
                className="logonnew-1-icon7"
                loading="lazy"
                alt=""
                src="/logonnew-1@2x.png"
              />
              <div className="truexgold-admin-frame">
                <a className="truexgold-admin2">TRUEXGOLD ADMIN</a>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="frame-parent2">
              <div className="frame-parent3">
                <div className="title-parent">
                  <div className="title1">{`Title `}</div>
                  <div className="title-separator" />
                  <div className="link-to-the">Link to the task</div>
                </div>
                <div className="reward-allocated-parent">
                  <input
                    className="reward-allocated"
                    placeholder="Reward Allocated"
                    type="text"
                  />
                  <div className="reward-separator" />
                </div>
              </div>
              <input className="info-separator" type="text" />
            </div>
            <div className="frame-wrapper2">
              <div className="submit-cancel-container-parent">
                <button className="submit-cancel-container">
                  <div className="submit">Submit</div>
                </button>
                <button className="submit-cancel-container1">
                  <div className="cancel">Cancel</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="frame-section">
          <div className="frame-parent4">
            <button
              className="view-previous-task-wrapper"
              onClick={onFrameButtonClick}
            >
              <div className="view-previous-task">View Previous Task</div>
            </button>
            <div className="frame-wrapper3">
              <div
                className="majesticonslogout-line-parent"
                onClick={onFrameContainerClick}
              >
                <img
                  className="majesticonslogout-line1"
                  loading="lazy"
                  alt=""
                  src="/majesticonslogoutline.svg"
                />
                <div className="logout-wrapper">
                  <div className="logout1">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateTask;
