import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./EmailInfo.css";

const EmailInfo = ({ className = "" }) => {
  const navigate = useNavigate();

  const onResendActionContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`email-info ${className}`}>
      <div className="email-title">
        <h3 className="verify-email">Verify Email</h3>
      </div>
      <div className="we-have-sent-container">
        <p className="we-have-sent">{`We have sent an email verification  code to your mail. `}</p>
        <p className="please-enter-the">
          Please enter the code to verify your email
        </p>
      </div>
      <div className="code-input">
        <div className="code-digits">
          <div className="digit" />
          <div className="digit1" />
          <div className="digit2" />
          <div className="digit3" />
        </div>
      </div>
      <div className="verify-button">
        <button className="verify-action">
          <div className="verify">Verify</div>
        </button>
      </div>
      <div className="email-resend">
        <div className="resend-action" onClick={onResendActionContainerClick}>
          <div className="i-did-not">I did not receive an email</div>
        </div>
      </div>
    </div>
  );
};

EmailInfo.propTypes = {
  className: PropTypes.string,
};

export default EmailInfo;
