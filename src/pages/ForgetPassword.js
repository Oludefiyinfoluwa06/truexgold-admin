import Content from "../components/Content";
import PasswordReset from "../components/PasswordReset";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forget-password">
      <Content />
      <div className="content">
        <PasswordReset />
      </div>
    </div>
  );
};

export default ForgetPassword;
