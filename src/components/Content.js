import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content1 ${className}`}>
      <div className="columns">
        <div className="graphic" />
        <img
          className="logonnew-1-icon1"
          loading="lazy"
          alt=""
          src="/logonnew-1@2x.png"
        />
      </div>
      <h1 className="truexgold">TRUEXGOLD</h1>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
