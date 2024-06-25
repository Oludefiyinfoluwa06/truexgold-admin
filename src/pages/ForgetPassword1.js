import Content from "../components/Content";
import EmailInfo from "../components/EmailInfo";
import "./ForgetPassword1.css";

const ForgetPassword1 = () => {
  return (
    <div className="forget-password1">
      <Content />
      <div className="verification">
        <EmailInfo />
      </div>
    </div>
  );
};

export default ForgetPassword1;
