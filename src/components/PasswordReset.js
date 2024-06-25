import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./PasswordReset.css";

const PasswordReset = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/forget-password1");
  }, [navigate]);

  const onNavigationContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`password-reset ${className}`}>
      <div className="details">
        <div className="email-input">
          <h3 className="forget-password2">Forget Password?</h3>
          <div className="input">
            <div className="field">
              <div className="email1">Email</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button-container" onClick={onButtonContainerClick}>
        <div className="reset-password">Reset Password</div>
      </button>
      <div className="navigation1" onClick={onNavigationContainerClick}>
        <img className="epback-icon" loading="lazy" alt="" src="/epback.svg" />
        <div className="back-to-login">Back to Login</div>
      </div>
    </div>
  );
};

PasswordReset.propTypes = {
  className: PropTypes.string,
};

export default PasswordReset;
