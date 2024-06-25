import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Dashboard1.css";

const Dashboard1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`dashboard1 ${className}`}>
      <div className="monitor-activity">
        <div className="metric-icons-row">
          <div className="metric-icons-row1">
            <div className="metric-icons-row2">
              <div className="metric-icons-row-child" />
              <img
                className="dicons"
                loading="lazy"
                alt=""
                src="/3dicons@2x.png"
              />
            </div>
            <div className="metric-details-row">
              <div className="metric-details-row1">
                <div className="metric-details-row2">
                  <b className="monitor-users-activity">
                    monitor user’s activity
                  </b>
                </div>
                <div className="analyze-user-engagement">
                  Analyze user engagement metrics such as active users, session
                  lengths, and retention rates. This data helps in understanding
                  user behavior and improving the platform.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-icons-row3">
          <div className="frame-parent">
            <div className="ellipse-parent">
              <div className="frame-child" />
              <img
                className="dicons1"
                loading="lazy"
                alt=""
                src="/3dicons-1@2x.png"
              />
            </div>
            <div className="frame-wrapper">
              <div className="frame-group">
                <div className="sets-and-adjusts-session-limit-wrapper">
                  <b className="sets-and-adjusts">
                    sets and adjusts session limits
                  </b>
                </div>
                <div className="set-the-basic">
                  Set the basic parameters for a tapping session, such as the
                  maximum number of coins that can be earned per session and the
                  duration of each session.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-icons-row4">
          <div className="frame-container">
            <div className="ellipse-group">
              <div className="frame-item" />
              <img
                className="dicons2"
                loading="lazy"
                alt=""
                src="/3dicons-2@2x.png"
              />
            </div>
            <div className="frame-div">
              <div className="frame-parent1">
                <div className="create-tasks-wrapper">
                  <b className="create-tasks">Create Tasks</b>
                </div>
                <div className="schedule-tasks-to">
                  Schedule tasks to update to increase user engagement and
                  promote social interactions within the community.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-icons-row5">
          <div className="frame-parent2">
            <div className="ellipse-container">
              <div className="frame-inner" />
              <img
                className="dicons3"
                loading="lazy"
                alt=""
                src="/3dicons-3@2x.png"
              />
            </div>
            <div className="frame-wrapper1">
              <div className="frame-parent3">
                <div className="transaction-monitoring-wrapper">
                  <b className="transaction-monitoring1">
                    Transaction Monitoring
                  </b>
                </div>
                <div className="get-people-with">
                  Get people with aleast 1,000 followers to post your adverts
                  and perform social engagement tasks for you on their social
                  media account.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-icons-row6">
          <div className="frame-parent4">
            <div className="ellipse-parent1">
              <div className="ellipse-div" />
              <img
                className="dicons4"
                loading="lazy"
                alt=""
                src="/3dicons-4@2x.png"
              />
            </div>
            <div className="frame-wrapper2">
              <div className="frame-parent5">
                <div className="view-users-wallets-wrapper">
                  <b className="view-users-wallets">View User’s Wallets</b>
                </div>
                <div className="search-for-and">
                  Search for and select individual users to view their wallet
                  information.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-icons-row7">
          <div className="frame-parent6">
            <div className="ellipse-parent2">
              <div className="frame-child1" />
              <img
                className="dicons5"
                loading="lazy"
                alt=""
                src="/3dicons-5@2x.png"
              />
            </div>
            <div className="frame-wrapper3">
              <div className="frame-parent7">
                <div className="community-management-wrapper">
                  <b className="community-management">Community Management</b>
                </div>
                <div className="share-regular-updates">
                  Share regular updates on the platform, including new features,
                  upcoming events, and other important announcements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="logout1">Logout</div>
      </div>
    </section>
  );
};

Dashboard1.propTypes = {
  className: PropTypes.string,
};

export default Dashboard1;
